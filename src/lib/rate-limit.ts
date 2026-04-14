const requests = new Map<string, number[]>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // max requests per window

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requests.get(ip) ?? [];

  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    requests.set(ip, recent);
    return true;
  }

  recent.push(now);
  requests.set(ip, recent);

  // Cleanup old IPs every 1000 entries
  if (requests.size > 1000) {
    for (const [key, vals] of requests) {
      if (vals.every((t) => now - t >= WINDOW_MS)) {
        requests.delete(key);
      }
    }
  }

  return false;
}
