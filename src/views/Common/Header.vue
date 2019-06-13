<template>
  <div>
    <header>
      <Logo />
      <Menu />
    </header>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Logo from '@/views/Common/Logo'

export default {
  name: 'Header',
  components: {
    Menu,
    Logo
  }
}
</script>

<style>
header {
  height: 180px;
}
</style>
