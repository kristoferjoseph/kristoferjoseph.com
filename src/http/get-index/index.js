const Main = require('@architect/views/main.js')
exports.handler = async function Index () {
  let body = Main({
    fullname: 'Kristofer Joseph',
    title: 'kj',
    occupation: 'Conjurer of markup, wrangler of styles ✨',
    location: 'Bay Area, Ca',
    bio: 'Thinker of dreams ⌁ Maker of things ⌁ Aspiring helper of beings<br><br> Currently working on <a style="color: #FD6D6D;" href="https://begin.com">Begin</a>',
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
    type: 'text/html; charset=utf8',
    body
  }
}
