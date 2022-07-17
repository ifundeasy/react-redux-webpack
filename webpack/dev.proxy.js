module.exports = {
  '/mjserver': {
    // target: service[env.proxy] // --env.proxy=test
    target: 'https://mjserver.typicode.com',
    // pathRewrite: { '^/mjserver': '/mjserver' },
    secure: false,
    changeOrigin: true,
  },
  '/fakeapi': {
    target: 'http://localhost:4000',
    pathRewrite: { '^/fakeapi': '' },
    secure: false,
    changeOrigin: true,
    cookieDomainRewrite: 'localhost',
  },
}
