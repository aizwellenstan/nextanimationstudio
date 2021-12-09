module.exports = {
  // reactStrictMode: true,
  env: {
    // HOST: 'http://localhost:3000',
    // HOST: 'https://nas.api.smartores.com',
    HOST: 'https://nas.api.nextanimationstudio.com',
  },
  images: {
    domains: ['picsum.photos', 'nas.admin.smartores.com'],
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
      {
        source: '/cn/home',
        destination: '/',
      },
      {
        source: '/cn/:slug',
        destination: '/:slug',
      },
      {
        source: '/cn/ourbusiness/:slug',
        destination: '/ourbusiness/:slug',
      },
      {
        source: '/cn/ourupdates/:slug',
        destination: '/ourupdates/:slug',
      },
      {
        source: '/cn/ourworks/:slug',
        destination: '/ourworks/:slug',
      },
      {
        source: '/jp/home',
        destination: '/',
      },
      {
        source: '/jp/:slug',
        destination: '/:slug',
      },
      {
        source: '/jp/ourbusiness/:slug',
        destination: '/ourbusiness/:slug',
      },
      {
        source: '/jp/ourupdates/:slug',
        destination: '/ourupdates/:slug',
      },
      {
        source: '/jp/ourworks/:slug',
        destination: '/ourworks/:slug',
      },
    ]
  },
}
