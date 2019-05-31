module.exports = function Styles (props) {
  props = props || {}
  let image = props.image || ''

  return `
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto',-apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
}
.height-100vh {
  height: 100vh
}
.display-flex {
  display: flex;
}
.display-block {
  display: block;
}
.display-inline-block {
  display: inline-block;
}
.display-inline-flex {
  display: inline-flex;
}
.background-image {
  background-image: url(${image});
}
.background-size-cover {
  background-size: cover;
}
.background-position-center {
  background-position: center;
}
.flex-wrap-wrap {
  flex-wrap: wrap;
}
.flex-direction-column {
  flex-direction: column;
}
.flex-grow-1 {
  flex-grow: 1;
}
.flex-grow-2 {
  flex-grow: 2;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-space-between {
  justify-content: space-between;
}
.align-items-center {
  align-items: center;
}
.max-width-35 {
  max-width: 35rem;
}
.min-width-20 {
  min-width: 20rem;
}
.text-transform-uppercase {
  text-transform: uppercase;
}
.bottom-8 {
  bottom: 0.5rem;
}
.left-32 {
  left: 2rem;
}
.font-size-42 {
  font-size: 2.625rem;
}
.font-size-18 {
  font-size: 1.125rem;
}
.font-size-16 {
  font-size: 1rem;
}
.font-size-12 {
  font-size: 0.75rem;
}
.margin-top--32 {
  margin-top: -2rem;
}
.margin-bottom-42 {
  margin-bottom: 2.625rem;
}
.margin-bottom-32 {
  margin-bottom: 2rem;
}
.margin-bottom-24 {
  margin-bottom: 1.5rem;
}
.margin-bottom-16 {
  margin-bottom: 1rem;
}
.margin-bottom-14 {
  margin-bottom: 0.875rem;
}
.margin-bottom-8 {
  margin-bottom: 0.5rem;
}
.margin-right-18 {
  margin-right: 1.125rem;
}
.margin-right-12 {
  margin-right: 0.75rem;
}
.margin-right-8 {
  margin-right: 0.5rem;
}
.margin-right-auto {
  margin-right: auto;
}
.margin-left-auto {
  margin-left: auto;
}
.padding-top-16 {
  padding-top: 1rem;
}
.padding-top-8 {
  padding-top: 0.5rem;
}
.padding-right-32 {
  padding-right: 2rem;
}
.padding-right-16 {
  padding-right: 1rem;
}
.padding-right-48 {
  padding-right: 3rem;
}
.padding-left-48 {
  padding-left: 3rem;
}
.padding-left-32 {
  padding-left: 2rem;
}
.padding-left-16 {
  padding-left: 1rem;
}
.padding-bottom-16  {
  padding-bottom: 1rem;
}
.padding-bottom-8 {
  padding-bottom: 0.5rem;
}
.padding-48 {
  padding: 3rem;
}
.color-5A5C5B {
  color: #5A5C5B;
}
.color-979797 {
  color: #979797;
}
.color-2DA6FF {
  color: #2DA6FF;
}
.color-FFFFFF {
  color: #FFFFFF;
}
.color-383D3B {
  color: #383D3B;
}
.color-hover-058AEA:hover {
  color: #058AEA;
}
.background-color-979797 {
  background-color: #979797;
}
.background-color-F2F0F3 {
  background-color: #F2F0F3;
}
.background-color-overlay {
  background-color: rgba(10, 22, 37, 0.64);
}
.background-color-045C9C {
  background-color: #045C9C;
}
.background-color-hover-058AEA:hover {
  background-color: #058AEA;
}
.fill-inherit {
  fill: inherit;
}
.fill-FFFFFF {
  fill: #FFFFFF;
}
.fill-979797 {
  fill: #979797;
}
.fill-hover-FD6D6D:hover {
  fill: #FD6D6D;
}
.fill-hover-058AEA:hover {
  fill: #058AEA;
}
.opacity-64 {
  opacity: 0.64;
}
.font-weight-300 {
  font-weight: 300;
}
.font-weight-400 {
  font-weight: 400;
}
.text-decoration-none {
  text-decoration: none;
}
.border-radius-pill {
  border-radius: 99999px;
}
.height-15 {
  height: 15rem;
}
.position-absolute {
  position: absolute;
}
.position-relative {
  position: relative;
}
.height-content {
  height: calc(100% - 15rem);
}
.transition-color {
  transition: color 200ms;
}
.transition-fill {
  transition: fill 200ms;
}
.transition-background-color {
  transition: background-color 200ms;
}

@media screen and (min-width: 55rem) {
  .display-flex-large {
    display: flex;
  }
  .flex-direction-row-large {
    flex-direction: row;
  }
  .flex-grow-1-large {
    flex-grow: 1.5;
  }
  .flex-grow-2-large {
    flex-grow: 2;
  }
  .justify-content-center-large {
    justify-content: center;
  }
  .align-items-center-large {
    align-items: center;
  }
  .height-100-large {
    height: 100%;
  }
  .padding-right-48-large {
    padding-right: 3rem;
  }
  .padding-left-48-large {
    padding-left: 3rem;
  }
  .padding-80-large {
    padding: 5rem;
  }
  .font-size-16-large {
    font-size: 1rem;
  }
  .height-auto-large {
    height: auto;
  }
  .overflow-hidden-large {
    overflow: hidden;
  }
  .overflow-auto-large {
    overflow: auto;
  }
}
</style>
`
}
