/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  // Only enable standalone for non-Windows platforms (Railway uses Linux containers)
  ...(process.platform !== "win32" ? { output: "standalone" } : {}),
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), geolocation=(), microphone=()"
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self'",
              "connect-src 'self' https:",
              "frame-src https:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'"
            ].join("; ")
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          }
        ]
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;

