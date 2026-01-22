export function createShortId() {
  const timePart = Date.now().toString(36).slice(-2);
  const randPart = Math.random().toString(36).slice(2, 8);
  return timePart + randPart;
}