<template>
  <div class="weapons">
    <h1>Porównywarka <span class="secondary-color">broni</span></h1>
    <WeaponCalc />
  </div>
</template>

<script>
// @ is an alias to /src
import WeaponCalc from '@/components/WeaponCalc.vue'

export default {
  name: 'Weapons',
  components: {
    WeaponCalc
  }
}
</script>

<style lang="scss"></style>
