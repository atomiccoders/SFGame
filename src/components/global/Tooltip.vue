<template>
  <div class="t-right t-sm full-width" :data-tooltip="msg">?</div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
[data-tooltip] {
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px #f0c042 solid;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-left: 15px;

  &:before,
  &:after {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all 0.15s cubic-bezier(0.5, 1, 0.25, 1);
    z-index: 1;
  }
  &:before {
    padding: 5px;
    width: 110px;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.2;
  }
  &:after {
    border: 8px solid transparent;
    width: 0;
    content: '';
    font-size: 0;
    line-height: 0;
  }
  /********** Default Behavior **********/
  &:hover:before,
  &:hover:after {
    visibility: visible;
    opacity: 1;
  }
  /********** Timeout Variant **********/
  /* @keyframes timeout {
    0% {
      opacity: 1;
      visibility: visible;
    }
    99% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
  &:hover:before, &:hover:after {
    animation: timeout 2s;
  } */
  /********** Tooltip Sizes **********/
  &.t-xl:before {
    width: 200px;
  }
  &.t-lg:before {
    width: 170px;
  }
  &.t-md:before {
    width: 140px;
  }
  &.t-sm:before {
    width: 110px;
  }
  &.t-xs:before {
    width: 80px;
  }
  /********** Top Tooltip **********/
  &.t-top {
    &:before {
      bottom: 100%;
      left: 50%;
      margin-bottom: 5px;
      transform: translateX(-50%);
    }
    &:after {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-top: 8px solid #000;
      border-bottom: none;
    }
    &:hover:before,
    &:hover:after {
      transform: translateX(-50%) translateY(-5px);
    }
  }
  /********** Right Tooltip **********/
  &.t-right {
    &:before {
      top: 50%;
      left: 100%;
      margin-left: 8px;
      transform: translateY(-50%);
    }
    &:after {
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-right: 8px solid rgb(0, 0, 0, 0.7);
      border-left: none;
    }
    &:hover:before,
    &:hover:after {
      transform: translateX(5px) translateY(-50%);
    }
  }
  /********** Bottom Tooltip **********/
  &.t-bottom {
    &:before {
      top: 100%;
      left: 50%;
      margin-top: 5px;
      transform: translateX(-50%);
    }
    &:after {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-bottom: 8px solid #000;
      border-top: none;
    }
    &:hover:before,
    &:hover:after {
      transform: translateX(-50%) translateY(5px);
    }
  }
  /********** Left Tooltip **********/
  &.t-left {
    &:before {
      top: 50%;
      right: 100%;
      margin-right: 5px;
      transform: translateY(-50%);
    }
    &:after {
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      border-left: 8px solid #000;
      border-right: none;
    }
    &:hover:before,
    &:hover:after {
      transform: translateX(-5px) translateY(-50%);
    }
  }
}
</style>
