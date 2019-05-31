const LargeHeading = require('./heading-large')
const MediumHeading = require('./heading-medium')
const LocationLink = require('./link-location')
const MailLink = require('./link-mail')
const SocialMedia = require('./social-media')
const Icon = require('./icon')

module.exports = function Content (props) {
  props = props || {}
  let fullname = props.fullname || ''
  let occupation = props.occupation || ''
  let location = props.location || ''
  let bio = props.bio || ''
  let email = props.email || ''
  let twitter = props.twitter || ''
  let linkedin = props.linkedin || ''
  let instagram = props.instagram || ''
  let facebook = props.facebook || ''

  return `
<section
  class="
    display-flex
    flex-direction-column
    height-content
    height-auto-large
    overflow-auto-large
  "
>
  <div
    class="
      display-flex
      align-items-center-large
      justify-content-center-large
      flex-grow-1
      flex-grow-2-large
      max-width-35
      margin-right-auto
      margin-left-auto
      padding-48
      padding-5-large
    "
  >
    <div
      class="
        margin-right-auto
        margin-left-auto
      "
    >
      ${LargeHeading({
        children: fullname
      })}
      ${MediumHeading({
        children: occupation
      })}
      ${LocationLink({
        location
      })}
      <p
        class="
          margin-bottom-42
          font-size-16
          color-383D3B
        "
      >
        ${bio}
      </p>
      <div
        class="
          display-flex
          flex-wrap-wrap
          align-items-center
          justify-content-space-between
          margin-bottom-16
        "
      >
        ${MailLink({
          email
        })}
        ${SocialMedia({
          twitter,
          linkedin,
          instagram,
          facebook
        })}
      </div>
    </div>
  </div>
  <div
    class="
      display-flex
      align-items-center
      justify-content-space-between
      padding-top-16
      padding-right-32
      padding-left-32
      padding-right-48-large
      padding-bottom-16
      padding-left-48-large
      color-5A5C5B
      background-color-F2F0F3
    "
  >
    <span
      class="
        display-flex
        align-item-center
      "
    >
      <span
        class="
          margin-right-8
          color-979797
        "
      >
        Built with
      </span>
      <a
        class="
          fill-979797
          fill-hover-FD6D6D
          transition-fill
        "
        href="https://begin.com"
        target="_blank"
        rel="noopener"
      >
        ${Icon({
          class: 'fill-inherit',
          href: 'begin',
          style: 'width:4rem;height:1.2725rem;'
        })}
      </a>
    </span>
    <a
      class="
        display-block
        padding-top-8
        padding-right-16
        padding-bottom-8
        padding-left-16
        font-size-12
        font-weight-300
        text-decoration-none
        color-FFFFFF
        border-radius-pill
        background-color-979797
        background-color-hover-058AEA
        transition-background-color
        text-transform-uppercase
      "
      href="https://begin.com"
      rel="noopener"
      target="_blank"
    >
      Build yours
    </a>
  </div>
</section>
  `
}
