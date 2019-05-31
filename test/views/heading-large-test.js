const test = require('tape')
const LargeHeading = require('../../src/views/heading-large.js')

test('LargeHeading', t => {
  t.test('exists', t => {
    t.plan(1)
    t.ok(LargeHeading)
  })

  t.test('should take props', t => {
    t.plan(1)
    let output = LargeHeading({
      children: 'Your name'
    })
    console.log(output)
    t.ok(/Your name/.test(output))
  })
})
