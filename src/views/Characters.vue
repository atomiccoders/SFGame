<template>
  <div class="container about">
    <div class="row">
      <div class="col text-center">
        <h1>Rasy i <span class="secondary-color">Profesje</span></h1>
        <br />
      </div>
    </div>
    <div class="row">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            background="@/assets/glow_assa.png"
            alt="image slot"
          />
        </b-carousel-slide>

        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            background="@/assets/glow_berserk.png"
            alt="image slot"
          />
        </b-carousel-slide>

        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="100%"
            height="300px"
            background="@/assets/glow_mage.png"
            alt="image slot"
          />
        </b-carousel-slide>

        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            background="@/assets/glow_hunter.png"
            alt="image slot"
          />
        </b-carousel-slide> -->

        <b-carousel-slide background="/assets/glow_warlock.png">
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/warlock.png"
            alt="image slot"
          />
        </b-carousel-slide>

        <b-carousel-slide background="/assets/glow_warrior.png">
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/warrior.png"
            alt="image slot"
          />
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Characters'
}
</script>

<style lang="scss">
.carousel-control-prev-icon {
  background-image: url('/car_left.png');
}
.carousel-control-next-icon {
  background-image: url('/car_right.png');
}
</style>
