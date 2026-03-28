export function createShortId(): string {
  const timePart = Date.now().toString(36).slice(-2);
  const randPart = Math.random().toString(36).slice(2, 8);
  return timePart + randPart;
}

export function normalizeUrl(link: string): string {
  const scheme = 'https://';
  if (link.startsWith('https') || link.startsWith('http')) {
    return link;
  } else {
    return `${scheme}${link}`;
  }
}
