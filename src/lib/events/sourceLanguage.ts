const NON_ENGLISH_PATH_SEGMENT = /\/(es|fr|de|it|pt|ru|tr|zh|ja|ko)\//i;

export const isEnglishSourceUrl = (value: string) => {
  try {
    const parsed = new URL(value);
    const host = parsed.hostname.toLowerCase();
    const path = parsed.pathname.toLowerCase();
    if (host.endsWith("wikipedia.org") && !host.startsWith("en.")) {
      return false;
    }
    return !NON_ENGLISH_PATH_SEGMENT.test(path);
  } catch {
    return false;
  }
};
