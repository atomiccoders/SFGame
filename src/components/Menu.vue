<template>
  <label>
    <input type="checkbox" v-model="menuOpen" />
    <span class="menu">
      <span class="hamburger"></span>
    </span>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }" @click.native="closeMenu">
          Start
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }" @click.native="closeMenu">
          O Tawernie
        </router-link>
      </li>
      <li>Wieszczka-Porównywaczka</li>
      <li>
        <router-link :to="{ name: 'missions' }" @click.native="closeMenu">
          Misje
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'weapons' }" @click.native="closeMenu">
          Bronie
        </router-link>
      </li>
      <li>Biblioteka</li>
      <li>
        <router-link :to="{ name: 'characters' }" @click.native="closeMenu">
          Profesje i Rasy
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'locations' }" @click.native="closeMenu">
          Krainy
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'experience' }" @click.native="closeMenu">
          Doświadczenie
        </router-link>
      </li>
    </ul>
  </label>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono');

label {
  font-size: 1.2em;
  line-height: 1.4;
  .menu {
    position: absolute;
    right: -100px;
    top: -100px;
    z-index: 100;
    width: 200px;
    height: 200px;
    background: #002533;
    border-radius: 50% 50% 50% 50%;
    transition: 0.5s ease-in-out;
    box-shadow: 0 0 0 0 #002533, 0 0 0 0 #002533;
    cursor: pointer;
    &:hover {
      .hamburger {
        background: #f0c042;
        &:after,
        &:before {
          background: #f0c042;
        }
      }
    }
  }
  .hamburger {
    position: absolute;
    top: 135px;
    left: 50px;
    width: 30px;
    height: 2px;
    background: #795f1f;
    display: block;
    transform-origin: center;
    transition: 0.5s ease-in-out;
    &:after,
    &:before {
      transition: 0.5s ease-in-out;
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: #795f1f;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
  input {
    display: none;
  }
  input:checked + .menu {
    box-shadow: 0 0 0 100vw #002533, 0 0 0 100vh #002533;
    border-radius: 0;
    .hamburger {
      transform: rotate(45deg);
      &:after {
        transform: rotate(90deg);
        bottom: 0;
      }
      &:before {
        transform: rotate(90deg);
        top: 0;
      }
    }
  }

  input:checked + .menu + ul {
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: opacity 0.25s ease-in-out 0.3s;
  }

  ul {
    z-index: 200;
    position: absolute;
    top: 50%;
    left: 50%;
    // transform: translate(250%, -250%);
    transform: translate(75vw, -100vh);
    opacity: 0;
    transition: opacity 0.15s ease-in-out, transform 0.25s ease-in 0.2s;
    list-style-type: none;
    li {
      color: #777;
      font-weight: bold;
    }
  }

  a {
    margin-bottom: 1em;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    color: #795f1f;
    transition: color 0.15s ease;
    &.router-link-exact-active,
    &:hover {
      color: #f0c042;
    }
  }
}
</style>
