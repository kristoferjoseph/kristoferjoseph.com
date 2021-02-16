let test = require('tape')
let tiny = require('tiny-json-http')
let sandbox = require('@architect/sandbox')

test('env', t => {
  t.plan(1)
  t.ok(sandbox, 'sandbox')
})

test('sandbox.start', async t => {
  t.plan(1)
  let result = await sandbox.start()
  t.ok(result, 'opened')
})

// callback style
test('get /', t => {
  t.plan(1)
  tiny.get({
    url: 'http://localhost:3333'
  },
  function win (err, result) {
    if (err) {
      t.fail(err, err)
    } else {
      t.ok(true, 'got result', console.log(result.toString().substring(50) + '...'))
    }
  })
})

// promise style
test('get /', t => {
  t.plan(1)
  tiny.get({
    url: 'http://localhost:3333'
  }).then(function win (result) {
    t.ok(true, 'got result', console.log(result.toString().substring(50) + '...'))
  }).catch(function fail (err) {
    t.fail(err, err)
  })
})

// async/await style
test('get /', async t => {
  t.plan(1)
  try {
    var url = 'http://localhost:3333'
    var result = await tiny.get({url})
    t.ok(true, 'got result', console.log(result.toString().substring(50) + '...'))
  } catch (e) {
    t.fail(e, e, console.log(e))
  }
})

test('shut down the sandbox', async t => {
  t.plan(1)
  let result = await sandbox.end()
  t.ok(result, 'shutdown successfully')
})
