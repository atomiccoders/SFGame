<template>
  <div>
    <form class="weapon">
      <div class="main_attr">
        <label for="main_attr">Cecha główna</label>
        <input
          type="text"
          name="main_attr"
          id="main_attr"
          v-model="main_attr"
        />
        <div class="info-badge">
          <b-badge pill variant="warning" id="info">
            <span class="sign">?</span>
          </b-badge>
          <b-tooltip target="info" placement="right">
            <table class="table table-bordered table-sm text-white m-0 p-0">
              <tr>
                <td><small>Wojownik Berserk Palladyn</small></td>
                <td class="align-middle">Siła</td>
              </tr>
              <tr>
                <td><small>Mag</small></td>
                <td class="align-middle">Inteligencja</td>
              </tr>
              <tr>
                <td><small>Zwiadowca Zabójca</small></td>
                <td class="align-middle">Zręczność</td>
              </tr>
            </table>
          </b-tooltip>
        </div>
      </div>

      <div class="weapon-first">
        <label for="minDmg_one">Minimalne obrażenia</label>
        <input
          type="text"
          name="minDmg_one"
          id="minDmg_one"
          v-model="weapons[0].minDmg"
        />

        <label for="maxHit_one">Maksymalne obrażenia</label>
        <input
          type="text"
          name="maxDmg_one"
          id="maxDmg_one"
          v-model="weapons[0].maxDmg"
        />

        <label for="addAttr_one">Wartość do cechy głównej</label>
        <input
          type="text"
          name="addAttr_one"
          id="addAttr_one"
          v-model="weapons[0].addAttr"
        />
      </div>

      <div class="result" :class="{ show: showResult }">
        <h4>Wynik:</h4>
        <p>Lepsza jest broń nr {{ winner.id }}</p>
        <p>Obrażenia: {{ winner.minHit }} - {{ winner.maxHit }}</p>
        <p>Średnie obrażenia: {{ winner.avgHit }}</p>
      </div>

      <div class="weapon-second">
        <label for="minDmg_two">Minimalne obrażenia</label>
        <input
          type="text"
          name="minDmg_two"
          id="minDmg_two"
          v-model="weapons[1].minDmg"
        />

        <label for="maxHit_two">Maksymalne obrażenia</label>
        <input
          type="text"
          name="maxDmg_two"
          id="maxDmg_two"
          v-model="weapons[1].maxDmg"
        />

        <label for="addAttr_two">Wartość do cechy głównej</label>
        <input
          type="text"
          name="addAttr_two"
          id="addAttr_two"
          v-model="weapons[1].addAttr"
        />
      </div>

      <div class="submit">
        <input type="reset" value="Wyczyść" @click="reset" />
        <input type="submit" value="Porównaj" @click.prevent="compare" />
      </div>
    </form>

    <!-- <div class="result" v-if="showResult">
      <h4>Wynik:</h4>
      <p>Lepsza jest broń nr {{ winner.id }}</p>
      <p>Obrażenia: {{ winner.minHit }} - {{ winner.maxHit }}</p>
      <p>Średnie obrażenia: {{ winner.avgHit }}</p>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'WeaponCalc',
  components: {},
  data() {
    return {
      main_attr: '',
      weapons: [
        {
          id: 1,
          minDmg: '',
          maxDmg: '',
          addAttr: '',
          minHit: '',
          maxHit: '',
          avgHit: ''
        },
        {
          id: 2,
          minDmg: '',
          maxDmg: '',
          addAttr: '',
          minHit: '',
          maxHit: '',
          avgHit: ''
        }
      ],
      showResult: false,
      winner: {}
    }
  },
  methods: {
    preventEmpty() {
      if (this.main_attr === '') this.main_attr = 0
      this.weapons.forEach(element => {
        if (element.minDmg === '') element.minDmg = 0
        if (element.maxDmg === '') element.maxDmg = 0
        if (element.addAttr === '') element.addAttr = 0
      })
    },
    calculateDamage(weapon, value) {
      const strength =
        parseInt(this.main_attr, 10) + parseInt(weapon.addAttr, 10)
      return value * (1 + strength / 10)
    },
    calculateAverageHit(weapon) {
      return (parseInt(weapon.minHit, 10) + parseInt(weapon.maxHit, 10)) / 2
    },
    compare() {
      this.preventEmpty()

      this.weapons.forEach(element => {
        element.minHit = this.calculateDamage(element, element.minDmg)
        element.maxHit = this.calculateDamage(element, element.maxDmg)
        element.avgHit = this.calculateAverageHit(element)
      })

      this.weapons[0].avgHit >= this.weapons[1].avgHit
        ? (this.winner = this.weapons[0])
        : (this.winner = this.weapons[1])

      this.showResult = true

      return this.winner
    },
    reset() {
      this.weapons.forEach(element => {
        element.minDmg = ''
        element.maxDmg = ''
        element.addAttr = ''
        element.avgHit = ''
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info-badge {
  display: inline-block;
  margin: 0 10px;
  #info {
    position: relative;
    top: 8px;
    width: 25px;
    height: 25px;
    .sign {
      position: absolute;
      top: 8px;
      left: 9px;
    }
  }
}
.weapon {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &-first,
  &-second,
  .result {
    flex: 30%;
    flex-grow: 1;
    padding: 10px 0 20px;

    label {
      display: block;
      margin: 10px 0 0;
    }
  }

  .result {
    align-self: center;
    opacity: 0;
    transition: opacity 0.2s ease;
    &.show {
      opacity: 1;
    }
  }

  .main_attr {
    flex: 100%;
    padding: 10px 0;
    label {
      display: block;
      margin: 10px 0 0 -40px;
    }
  }

  .submit {
    flex: 100%;
    padding: 20px 0;
    input[type='reset'] {
      margin-right: 20px;
    }
  }
}
</style>
