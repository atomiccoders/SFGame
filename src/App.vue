<template>
  <div id="app">
    <!-- <Menu />
    <img alt="Vue logo" src="./assets/sflogo.png" />
    <router-view /> -->
    <Layout />
  </div>
</template>

<script>
import Layout from '@/views/Common/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Kalam&display=swap');
@import url('https://fonts.googleapis.com/css?family=Changa:800&display=swap');

@font-face {
  font-family: 'tobi_blackregular';
  src: url('./assets/fonts/tobi_black-webfont.eot');
  src: url('./assets/fonts/tobi_black-webfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/tobi_black-webfont.woff2') format('woff2'),
    url('./assets/fonts/tobi_black-webfont.woff') format('woff'),
    url('./assets/fonts/tobi_black-webfont.ttf') format('truetype'),
    url('./assets/fonts/tobi_black-webfont.svg#tobi_blackregular') format('svg');
  font-weight: normal;
  font-style: normal;
}

/**
 * Fix fonts that render as bold in Firefox
 *
 * Put this near the top of your style.css
 * Before any overriding styles
 */

html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  font-weight: 400;
}

/**
 * Firefox specific rule
 */

@-moz-document url-prefix() {
  body {
    font-weight: lighter !important;
  }
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: radial-gradient(ellipse at center, #00374b 0%, #002533 100%);
  overflow-x: hidden;
}
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: 'tobi_blackregular', 'Changa', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  // color: #f0c042;
  color: #fff;
  position: relative;
  overflow-x: hidden;
  .secondary-color {
    color: #ffc21a;
  }
}
#nav {
  list-style-type: none;
  padding: 30px;
  li {
    display: inline-block;
    margin-right: 15px;
    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      color: #795f1f;
      &.router-link-exact-active {
        // color: #f0c042;
        color: #ffc21a;
      }
    }
  }
}
input[type='text'] {
  border: 1px rgba(240, 192, 66, 0.5) solid;
  height: 25px;
  width: 150px;
  padding: 5px 5px;
  color: #f0c042;
  text-align: center;
  font-size: 16px;
  // font-family: 'Kalam', Arial, sans-serif;
  background: #151515;
  box-shadow: #151515 0px 0px 1px 3px;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: rgba(240, 192, 66, 1);
    outline: none;
  }
}
input[type='submit'],
input[type='reset'] {
  background: #00202c;
  border: 1px rgba(240, 192, 66, 0.5) solid;
  padding: 5px 15px;
  color: #f0c042;
  font-size: 16px;
  // font-family: 'Kalam', Arial, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: #00202c 0px 0px 1px 5px;
  transition: border-color 0.2s ease;
  &:focus,
  &:hover {
    border-color: rgba(240, 192, 66, 1);
    outline: none;
  }
}
</style>
