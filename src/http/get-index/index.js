const Main = require('@architect/views/main.js')
exports.handler = async function Index () {
  let body = Main({
    fullname: 'Kristofer Joseph',
    title: 'kj',
    occupation: 'think dreams ⌁ make things ⌁ help beings',
    location: 'Bay Area, Ca',
    bio: '👋 Why hello there!<br><br>When I grow up I would like to build a cabin in the redwoods where I can grow food whilst training raccoon kits to fly on the backs of ravens. <br><br> Until then, I will most likley continue with what I\'ve been up to for the past two decades and make tools to help people bring their visions into reality on the web. <br><br> I\'m currently working on <a style="color: #FD6D6D;" href="https://begin.com">Begin</a> and am always happy to hear from you.',
    email: 'kj@begin.com',
    twitter: 'dam',
    linkedin: '',
    instagram: '',
    facebook: '',
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: 'https://images.unsplash.com/photo-1517984148507-8b3358812287?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
  })

  return {
    headers: { 'content-type': 'text/html; charset=utf8' },
    body
  }
}
