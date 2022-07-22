const fs = require('fs')
const jwt = require('jsonwebtoken')

const { delay } = require('../utils')
const { jwtOptions } = require('../config/app')

module.exports = async (ctx, next) => {
  const errors = []
  const authorization = ctx.request.headers.authorization || ''

  await delay()

  if (!authorization.trim()) {
    errors.push([8, 'Missing Bearer token'])
    ctx.status = 401
    return (ctx.body = {
      code: ctx.status,
      status: 'Bad Request',
      messages: errors.map(([code, err]) => ({
        code: `ERR${code}`,
        message: err,
      })),
    })
  }

  let auth = authorization.split(' ')
  auth = auth[auth.length - 1].trim()
  if (!auth) {
    errors.push([9, 'Invalid Bearer token format'])
    ctx.status = 401
    return (ctx.body = {
      code: ctx.status,
      status: 'Bad Request',
      messages: errors.map(([code, err]) => ({
        code: `ERR${code}`,
        message: err,
      })),
    })
  }

  try {
    const now = new Date().getTime() / 1000
    const publicKey = fs.readFileSync(`${__dirname}/../JWT-RS256.key.pub`, 'utf8')

    ctx.state.user = await jwt.verify(auth, publicKey, jwtOptions)
    if (ctx.state.user.exp <= now) {
      errors.push([11, 'Invalid session'])
      ctx.status = 401
      return (ctx.body = {
        code: ctx.status,
        status: 'Bad Request',
        messages: errors.map(([code, err]) => ({
          code: `ERR${code}`,
          message: err,
        })),
      })
    }
  } catch (e) {
    errors.push([10, 'Failed to decode jwt token'])
    ctx.status = 401
    return (ctx.body = {
      code: ctx.status,
      status: 'Bad Request',
      messages: errors.map(([code, err]) => ({
        code: `ERR${code}`,
        message: err,
      })),
    })
  }

  next()
}
