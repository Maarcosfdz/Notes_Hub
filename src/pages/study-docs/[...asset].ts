import type {APIRoute} from 'astro';import {studyAsset} from '../../server/assets';
export const GET:APIRoute=context=>studyAsset(context,'study-docs');export const HEAD=GET;
