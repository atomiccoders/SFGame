<template>
  <div class="missions">
    <h1>
      Porównywarka opłacalności <span class="secondary-color">misji</span>
    </h1>
    <MissionCalc />
  </div>
</template>

<script>
// @ is an alias to /src
import MissionCalc from '@/components/MissionCalc.vue'

export default {
  name: 'Missions',
  components: {
    MissionCalc
  }
}
</script>

<style lang="scss"></style>
