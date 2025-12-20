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
  // periodic cleanup to avoid unbounded growth
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (v.expires < now) buckets.delete(k);
    }
  }
  buckets.set(key, { count: 1, expires: now + windowMs });
  return true;
}

