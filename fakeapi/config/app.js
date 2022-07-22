const jwtOptions = { algorithm: 'RS256' }
const staticUserPwd = 'admin'
const staticUser = {
  id: 1,
  username: 'admin',
  email: 'admin@example.com',
  roles: [{ id: 1, name: 'admin' }],
  modules: [],
}

module.exports = {
  jwtOptions,
  staticUser,
  staticUserPwd,
}
