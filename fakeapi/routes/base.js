const fs = require('fs')
const jwt = require('jsonwebtoken')
const Router = require('koa-router')

const { delay } = require('../utils')
const { jwtOptions, staticUser, staticUserPwd } = require('../config/app')
const { auth } = require('../middlewares')

const root = new Router()

root.all('', async (ctx) => {
  await delay()
  return (ctx.body = {
    code: 200,
    status: 'OK',
  })
})

root.post('registration', async (ctx) => {
  const errors = []
  const { email, username, password } = ctx.request.body

  await delay()

  if (!email) errors.push([1, 'Please enter an email address'])
  if (!username) errors.push([2, 'Username cannot be empty'])
  if (!password) errors.push([3, 'Password cannot be empty'])
  if (errors.length) {
    ctx.status = 422
    return (ctx.body = {
      code: ctx.status,
      status: 'Bad Request',
      messages: errors.map(([code, err]) => ({
        code: `ERR${code}`,
        message: err,
      })),
    })
  }

  return (ctx.body = {
    code: 200,
    status: 'OK',
  })
})

root.post('login', async (ctx) => {
  const errors = []
  const { email, username, password } = ctx.request.body

  await delay()

  if (!(email || username)) errors.push([4, 'Please enter an email/username'])
  if (!password) errors.push([5, 'Password cannot be empty'])
  if (errors.length) {
    ctx.status = 422
    return (ctx.body = {
      code: ctx.status,
      status: 'Bad Request',
      messages: errors.map(([code, err]) => ({
        code: `ERR${code}`,
        message: err,
      })),
    })
  }

  const uname = [staticUser.username, staticUser.email].indexOf(email || username) > -1
  const sendResponse = () => {
    ctx.status = 422
    errors.push([6, 'Incorrect email/username with password'])
    return (ctx.body = {
      code: ctx.status,
      status: 'Bad Request',
      messages: errors.map(([code, err]) => ({
        code: `ERR${code}`,
        message: err,
      })),
    })
  }

  if (!(uname && password === staticUserPwd)) return sendResponse()

  let token

  try {
    const privateKey = {
      key: fs.readFileSync(`${__dirname}/../JWT-RS256.key`, 'utf8'),
      passphrase: fs.readFileSync(`${__dirname}/../secret`, 'utf8').trim(),
    }
    token = await jwt.sign(staticUser, privateKey, {
      ...jwtOptions,
      expiresIn: '1h',
    })
  } catch (e) {
    errors.push([7, 'Failed to create jwt token'])
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

  return (ctx.body = {
    code: 200,
    status: 'OK',
    messages: null,
    data: {
      count: 1,
      rows: [
        {
          // ...staticUser,
          token,
        },
      ],
    },
  })
})

root.get('profile', auth, async (ctx) => {
  ctx.body = {
    code: 200,
    status: 'OK',
    messages: null,
    data: {
      count: 1,
      rows: [ctx.state.user],
    },
  }
})

root.all('logout', auth, async (ctx) => {
  await delay()
  // * in real case we deleting session in some store (e.g. redis, sql)
  return (ctx.body = {
    code: 200,
    status: 'OK',
  })
})

module.exports = root
