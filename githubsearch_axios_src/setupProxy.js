// http-proxy-middleware 1.x 版本后用这个 const { createProxyMiddleware } = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/api1': '' },
    }),
  )
}
