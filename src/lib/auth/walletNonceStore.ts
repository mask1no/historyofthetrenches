type NonceRecord = {
  nonce: string;
  address: string;
  expiresAt: number;
  used: boolean;
};

const store = new Map<string, NonceRecord>();

export function saveNonce(address: string, nonce: string, ttlMs: number) {
  const expiresAt = Date.now() + ttlMs;
  const key = `${address}:${nonce}`;
  store.set(key, { nonce, address, expiresAt, used: false });
  return { nonce, expiresAt };
}

export function consumeNonce(address: string, nonce: string) {
  const key = `${address}:${nonce}`;
  const record = store.get(key);
  if (!record) return null;
  if (record.used) return null;
  if (record.expiresAt < Date.now()) {
    store.delete(key);
    return null;
  }
  record.used = true;
  store.set(key, record);
  return record;
}

