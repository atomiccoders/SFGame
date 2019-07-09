<template>
  <div class="container about">
    <div class="row">
      <div class="col text-center">
        <h1>Rasy i <span class="secondary-color">Profesje</span></h1>
        <br />
      </div>
    </div>
    <div class="row ">
      <div class="col mx-auto">
        <slick ref="slick" :options="slickOptions">
          <div class="slide">
            <img src="@/assets/glow_warrior.png" class="char-bg" />
            <img src="@/assets/warrior.png" class="char" alt="" />
          </div>
          <div class="slide">
            <img src="@/assets/glow_warlock.png" class="char-bg" style="top:45px;" />
            <img src="@/assets/warlock.png" class="char" alt="" />
          </div>
          <div class="slide">
            <img src="@/assets/glow_hunter.png" class="char-bg" style="left:calc(50% - 175px);" />
            <img src="@/assets/hunter.png" class="char" alt="" />
          </div>
          <div class="slide">
            <img src="@/assets/glow_berserk.png" class="char-bg" style="top:52px;left:calc(50% - 138px);" />
            <img src="@/assets/berserk.png" class="char" alt="" />
          </div>
          <div class="slide">
            <img src="@/assets/glow_mage.png" class="char-bg" style="top:40px;"/>
            <img src="@/assets/mage.png" class="char" alt="" />
          </div>
          <div class="slide">
            <img src="@/assets/glow_warrior.png" class="char-bg" style="left:calc(50% - 140px);" />
            <img src="@/assets/assassine.png" class="char" alt="" />
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'Characters',
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        prevArrow:
          '<div class="slick-prev slick-arrow" aria-label="Previous"></div>',
        nextArrow:
          '<div class="slick-next slick-arrow" aria-label="Previous"></div>'
        // Any other options that can be got from plugin documentation
      }
    }
  }
}
</script>

<style lang="scss">
.slick {
  &-slider &-track,
  &-slider &-list {
    overflow: visible;
  }
  &-arrow {
    height: 35px;
    width: 25px;
    position: absolute;
    z-index: 10;
    top: 50%;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  &-prev {
    background: url('/car_left.png') center / contain;
    left: -25px;
  }
  &-next {
    background: url('/car_right.png') center / contain;
    right: -25px;
  }
  &-slider {
    .slide {
      position: relative;
      img {
        height: 350px;
        margin: auto;
        margin-bottom: 45px;
      }
      .char {
        position: relative;
        z-index: 5;
      }
      .char-bg {
        position: absolute;
        top: 60px;
        left: calc(50% - 125px);
        z-index: 4;
      }
    }
  }
}
</style>
