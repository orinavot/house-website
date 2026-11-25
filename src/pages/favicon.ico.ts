import type { APIRoute } from 'astro';
import { faviconPng, icoFromPng } from '../lib/favicon';

export const GET: APIRoute = async () =>
  new Response(icoFromPng(await faviconPng(32), 32), {
    headers: { 'Content-Type': 'image/x-icon' },
  });
