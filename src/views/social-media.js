const Icon = require('./icon')
module.exports = function SocialMedia (props) {
  props = props || {}
  let twitter = props.twitter || ''
  let linkedin = props.linkedin || ''
  let instagram = props.instagram || ''
  let facebook = props.facebook || ''

  return `
<div class="display-flex">
${twitter
  ? `
  <a
    href="https://twitter.com/${twitter}"
    target="_blank"
    rel="noopener"
  >
    ${Icon({
      class: 'margin-right-18 fill-979797 fill-hover-058AEA transition-fill',
      style: 'width:1.470625rem;height:1.25rem;',
      href: 'twitter'
    })}
  </a>
  `
  : ''
}
${linkedin
  ? `
  <a
    href="https://linkedin.com/in/${linkedin}"
    target="_blank"
    rel="noopener"
  >
    ${Icon({
      class: 'margin-right-18 fill-979797 fill-hover-058AEA transition-fill',
      style: 'width:1.25rem;height:1.25rem;',
      href: 'linkedin'
    })}
  </a>
  `
  : ''
}
${instagram
  ? `
  <a
    href="https://instagram.com/${instagram}"
    target="_blank"
    rel="noopener"
  >
    ${Icon({
      class: 'margin-right-18 fill-979797 fill-hover-058AEA transition-fill',
      style: 'width:1.25rem;height:1.25rem;',
      href: 'instagram'
    })}
  </a>
  `
  : ''
}
${facebook
  ? `
  <a
    href="https://facebook.com/${facebook}"
    target="_blank"
    rel="noopener"
  >
    ${Icon({
      class: 'margin-right-18 fill-979797 fill-hover-058AEA transition-fill',
      style: 'width:1.25rem;height:1.25rem;',
      href: 'facebook'
    })}
  </a>
  `
  : ''
}
</div>
  `
}
