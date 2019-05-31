module.exports = function MediumHeading (props) {
  props = props || {}
  let children = props.children || ''
  return `
<h2
  class="
    margin-bottom-14
    font-size-16
    font-weight-300
    text-transform-uppercase
    color-979797
  "
>
  ${children}
</h2>
  `
}
