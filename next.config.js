/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ] },
      ...["/test", "/typing", "/userdatapuller", "/api/:path*"].map(source => ({
        source,
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      })),
    ]
  },
  async redirects() {
    return [
      { source: "/resume.pdf", destination: "/umar-orakzai-resume.pdf", permanent: true },
      { source: "/umar-orakzai-resume.docx", destination: "/umar-orakzai-resume.pdf", permanent: true },
    ]
  },
}

module.exports = nextConfig
