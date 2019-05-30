<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/sflogo.png" />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
img {
  max-width: 75%;
}
</style>
