module.exports = {
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: '/:path*',
        destination: `https://plugins.wese.co.tz/tg/:path*`,
      },
    ];
  },
}
