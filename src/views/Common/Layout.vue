<template>
  <div id="wrapper">
    <Header />

    <router-view id="content" />

    <Footer />
  </div>
</template>

<script>
import Header from '@/views/Common/Header'
import Footer from '@/views/Common/Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>
