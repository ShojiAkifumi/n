if (!process.env.WORDPRESS_API_URL) {
    throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "https://blogly.wp.xdomain.jp",
        ],
    },
}

module.exports = nextConfig