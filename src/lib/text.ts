/**
 * Typographic rule (Aviv, round 3): a paragraph never ends on a line of only
 * one or two words. Tying the last three words with no-break spaces keeps at
 * least three words on the final line (two when the last words are long, so
 * the line still fits a phone). Length is preserved (one space → one
 * U+00A0), so a string split into parts can be re-sliced by length.
 */
export function keepThree(text: string, maxTail = 26): string {
  const words = text.split(' ');
  // Too short to have a first line of its own: leave it free to wrap.
  if (words.length < 5) return text;
  // Tie as many of the last words as stay short enough to fit a phone line.
  let tie = 2;
  while (tie > 0 && words.slice(-(tie + 1)).join(' ').length > maxTail) tie--;
  if (tie === 0) return text;
  const head = words.slice(0, -(tie + 1)).join(' ');
  const tail = words.slice(-(tie + 1)).join('\u00A0');
  return `${head} ${tail}`;
}

/** keepThree across several consecutive parts (e.g. text / <em> / text). */
export function keepThreeParts(parts: string[]): string[] {
  const joined = keepThree(parts.join(''));
  const out: string[] = [];
  let at = 0;
  for (const p of parts) {
    out.push(joined.slice(at, at + p.length));
    at += p.length;
  }
  return out;
}
