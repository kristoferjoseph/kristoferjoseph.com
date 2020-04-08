const Main = require('@architect/views/main.js')
exports.handler = async function Index () {
  let body = Main({
    fullname: 'Kristofer Joseph',
    title: 'kj',
    occupation: 'think dreams ⌁ make things ⌁ help beings',
    location: 'Bay Area, Ca',
    bio: 'Kristofer "kj" Joseph truly believes that the internet is the most powerful tool for bringing people together and raising our collective understanding. He has dedicated his career to building tools to enable people to share their dreams with the world.',
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
