type Bucket = { count: number; expires: number };

const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (bucket && bucket.expires > now) {
    if (bucket.count >= limit) return false;
    bucket.count += 1;
    return true;
  }
  buckets.set(key, { count: 1, expires: now + windowMs });
  return true;
}

