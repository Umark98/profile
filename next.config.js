/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      { source: "/resume.pdf", destination: "/umar-orakzai-resume.pdf", permanent: true },
      { source: "/umar-orakzai-resume.docx", destination: "/umar-orakzai-resume.pdf", permanent: true },
    ]
  },
}

module.exports = nextConfig
