const Icon = require('./icon')
module.exports = function LocationLink (props) {
  let location = props.location || ''
  return location
    ? `
<a
  class="
    display-inline-flex
    align-items-center
    padding-top-8
    padding-right-16
    padding-bottom-8
    padding-left-16
    margin-bottom-32
    font-weight-300
    text-decoration-none
    color-5A5C5B
    color-hover-058AEA
    border-radius-pill
    background-color-F2F0F3
    fill-979797
    fill-hover-058AEA
  "
  href="https://www.google.com/maps/place/${location}"
  target="_blank"
  rel="noopener"
>
  ${Icon({
    class: 'margin-right-8 fill-inherit',
    style: 'width:0.4375rem;height:0.625rem;',
    href: 'location-marker'
  })}
  ${location}
</a>
  `
  : ''
}
