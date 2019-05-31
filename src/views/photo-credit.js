module.exports = function PhotoCredit (props) {
  props = props || {}
  let photographer = props.photographer || ''
  let service = props.service || ''
  let credit = props.credit || ''

  return `
<a
  class="
    position-absolute
    display-inline-block
    padding-top-8
    padding-right-16
    padding-bottom-8
    padding-left-16
    margin-bottom-16
    font-weight-300
    font-size-12
    text-decoration-none
    color-FFFFFF
    border-radius-pill
    background-color-overlay
  "
  href="${credit}"
  style="bottom:0.5rem;left:2rem;"
  target="_blank"
  rel="noopener"
>
  Photo by <span class="color-2DA6FF">${photographer}</span> on <span class="color-2DA6FF">${service}</span>
</a>
  `
}
