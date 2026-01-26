export function createShortId() {
  const timePart = Date.now().toString(36).slice(-2);
  const randPart = Math.random().toString(36).slice(2, 8);
  return timePart + randPart;
}

export function normalizeUrl(link) {
  const scheme = 'https://';
  if (link.startsWith('https') || link.startsWith('http')) {
    return link;
  } else {
    return `${scheme}${link}`;
  }
}
