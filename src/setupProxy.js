const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://elite-calls-com.trackdrive.com',
      changeOrigin: true,
    })
  );
};
