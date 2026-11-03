# syntax=docker/dockerfile:1
# Same runtime validated locally; pin the official multi-platform image by digest.
ARG NODE_IMAGE=node:24.14.0-bookworm-slim@sha256:d8e448a56fc63242f70026718378bd4b00f8c82e78d20eefb199224a4d8e33d8
FROM ${NODE_IMAGE} AS packages
ENV ASTRO_TELEMETRY_DISABLED=1
WORKDIR /app
RUN npm install --global pnpm@11.1.2
COPY package.json pnpm-lock.yaml .npmrc ./

FROM packages AS production-dependencies
RUN --mount=type=cache,id=notes-hub-pnpm,target=/pnpm/store \
    pnpm install --prod --frozen-lockfile --store-dir=/pnpm/store

FROM packages AS build
RUN --mount=type=cache,id=notes-hub-pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --store-dir=/pnpm/store
COPY astro.config.mjs tsconfig.json ./
COPY src ./src
# public/ can be absent in a fresh checkout (currently all study assets are private).
RUN --mount=type=bind,source=.,target=/context,readonly \
    mkdir -p public && if [ -d /context/public ]; then cp -a /context/public/. public/; fi
COPY scripts/verify-content.mjs ./scripts/verify-content.mjs
RUN pnpm verify:content && pnpm build

FROM ${NODE_IMAGE} AS runtime
ENV NODE_ENV=production HOST=0.0.0.0 PORT=4321 NOTES_DB_PATH=/data/notes-hub.sqlite ASTRO_TELEMETRY_DISABLED=1
WORKDIR /app
RUN mkdir /data && chown node:node /data && chmod 700 /data
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY package.json ./package.json
COPY --from=build /app/dist ./dist
# The existing administrative CLI uses native TypeScript; no new backend/bundler.
COPY src/server/auth.ts src/server/database.ts src/server/study-schema.ts src/server/import-schema.ts ./src/server/
COPY scripts/auth-migrate.mjs scripts/users.mjs scripts/database.mjs ./scripts/
COPY private/study-assets ./private/study-assets
COPY docker/*.mjs ./docker/
USER node
EXPOSE 4321
HEALTHCHECK --interval=30s --timeout=8s --start-period=30s --start-interval=2s --retries=3 CMD ["node", "docker/healthcheck.mjs"]
CMD ["node", "docker/entrypoint.mjs"]
