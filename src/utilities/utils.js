export function createShortId() {
  const timestamp = Date.now().toString(36);
  const randomness = Math.random().toString(36).substring(2);
  return `${timestamp}${randomness}`;
}