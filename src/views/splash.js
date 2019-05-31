const PhotoCredit = require('./photo-credit.js')
module.exports = function Aside (props) {
  props = props || {}
  let photographer = props.photographer || ''
  let service = props.service || ''
  let credit = props.credit || ''

  return `
<aside
  class="
    position-relative
    height-15
    height-100-large
    background-image
    background-position-center
    background-size-cover
    flex-grow-1-large
  "
>
  ${PhotoCredit({
    photographer,
    service,
    credit
  })}
</aside>
  `
}
