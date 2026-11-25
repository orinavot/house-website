/**
 * Favicon (Aviv, 2026-11-25): "Ho" cropped from Ori's HOUSE logo, burnt
 * orange on white. public/favicon.svg is the source;
 * the PNG and ICO versions are rasterised from it at build time.
 */
import sharp from 'sharp';
import svg from '../../public/favicon.svg?raw';

export const PAPER = '#FFFFFF';

/** Square PNG of the favicon; `fill` paints the transparent margins. */
export async function faviconPng(size: number, fill?: string): Promise<Uint8Array<ArrayBuffer>> {
  let img = sharp(new TextEncoder().encode(svg), { density: 600 }).resize(size, size);
  if (fill) img = img.flatten({ background: fill });
  return new Uint8Array(await img.png().toBuffer());
}

/** A one-image .ico that wraps a PNG (supported by every current browser). */
export function icoFromPng(png: Uint8Array, size: number): Uint8Array<ArrayBuffer> {
  const out = new Uint8Array(22 + png.length);
  const v = new DataView(out.buffer);
  v.setUint16(0, 0, true); // reserved
  v.setUint16(2, 1, true); // type: icon
  v.setUint16(4, 1, true); // one image
  v.setUint8(6, size);
  v.setUint8(7, size);
  v.setUint8(8, 0); // no palette
  v.setUint8(9, 0);
  v.setUint16(10, 1, true); // colour planes
  v.setUint16(12, 32, true); // bits per pixel
  v.setUint32(14, png.length, true);
  v.setUint32(18, 22, true); // image data offset
  out.set(png, 22);
  return out;
}
