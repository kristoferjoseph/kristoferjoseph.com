const Icon = require('./icon')
module.exports = function MailLink (props) {
  props = props || {}
  let email = props.email || ''
  return email
    ? `
<a
  class="
    display-inline-flex
    align-items-center
    padding-top-16
    padding-right-32
    padding-bottom-16
    padding-left-32
    margin-right-18
    margin-bottom-16
    font-size-18
    font-weight-300
    text-decoration-none
    color-FFFFFF
    border-radius-pill
    background-color-045C9C
    background-color-hover-058AEA
    transition-background-color
  "
  href="mailto:${email}?subject=Hi%20there!"
>
  ${Icon({
    class: 'margin-right-12 fill-FFFFFF',
    style: 'width:1.125rem;height:1rem;',
    href: 'chat-bubble'
  })}
  Drop me an email!
</a>
  `
  : ''
}
