const PLACEHOLDER_CHART_PATTERNS = [/coming-soon/i, /placeholder/i, /example\.com/i, /tbd/i];

export const hasUsableChartUrl = (chartUrl?: string, chartHidden?: boolean) => {
  if (chartHidden || !chartUrl || chartUrl.trim().length === 0) {
    return false;
  }

  try {
    const parsed = new URL(chartUrl);
    if (parsed.protocol !== "https:") {
      return false;
    }
  } catch {
    return false;
  }

  return !PLACEHOLDER_CHART_PATTERNS.some((pattern) => pattern.test(chartUrl));
};
