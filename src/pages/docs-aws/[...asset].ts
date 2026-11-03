import type {APIRoute} from 'astro';import {studyAsset} from '../../server/assets';
export const GET:APIRoute=context=>studyAsset(context,'docs-aws');export const HEAD=GET;
