<template>
  <div>
    <h1>Porównywarka broni</h1>
    <form class="weapon">
      <div class="main_attr">
        <label for="main_attr">Cecha główna</label>
        <input
          type="text"
          name="main_attr"
          id="main_attr"
          v-model="main_attr"
        />
        <Tooltip />
      </div>

      <div class="weapon-first">
        <label for="money_one">Złoto</label>
        <input
          type="text"
          name="money_one"
          id="money_one"
          v-model="weapons[0].money"
        />

        <label for="exp_one">Doświadczenie</label>
        <input
          type="text"
          name="exp_one"
          id="exp_one"
          v-model="weapons[0].exp"
        />

        <label for="time_one">Czas</label>
        <input
          type="text"
          name="time_one"
          id="time_one"
          v-model="weapons[0].time"
        />
      </div>

      <div class="weapon-second">
        <label for="money_two">Złoto</label>
        <input
          type="text"
          name="money_two"
          id="money_two"
          v-model="weapons[1].money"
        />

        <label for="exp_two">Doświadczenie</label>
        <input
          type="text"
          name="exp_two"
          id="exp_two"
          v-model="weapons[1].exp"
        />

        <label for="time_two">Czas</label>
        <input
          type="text"
          name="time_two"
          id="time_two"
          v-model="weapons[1].time"
        />
      </div>

      <div class="submit">
        <input type="reset" value="Wyczyść" @click="reset" />
        <input type="submit" value="Porównaj" @click.prevent="compare" />
      </div>
    </form>

    <div class="result" v-if="showResult">
      <h4>Wynik:</h4>
      <p>Wygrała opcja nr {{ winner.id }}</p>
      <p>Ratio: {{ winner.ratio.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
import Tooltip from '@/components/global/Tooltip'

export default {
  name: 'WeaponCalc',
  components: {
    Tooltip
  },
  data() {
    return {
      weapons: [
        {
          id: 1,
          money: '',
          exp: '',
          time: '',
          ratio: ''
        },
        {
          id: 2,
          money: '',
          exp: '',
          time: '',
          ratio: ''
        }
      ],
      showResult: false,
      winner: {}
    }
  },
  methods: {
    convert_time(time) {
      const str = time.split(':')
      // return (parseInt(str[0], 10)) * 60 + (parseInt(str[1], 10));
      return +str[0] * 60 + +str[1]
    },
    compare() {
      const ratio_one =
        this.weapons[0].time !== ''
          ? this.weapons[0].exp / this.convert_time(this.weapons[0].time)
          : 0
      const ratio_two =
        this.weapons[1].time !== ''
          ? this.weapons[1].exp / this.convert_time(this.weapons[1].time)
          : 0
      const ratio_three =
        this.weapons[2].time !== ''
          ? this.weapons[2].exp / this.convert_time(this.weapons[2].time)
          : 0

      console.log(ratio_one, ratio_two, ratio_three)

      if (ratio_one >= ratio_two && ratio_one >= ratio_three) {
        this.winner = this.weapons[0]
        this.weapons[0].ratio = ratio_one
      } else if (ratio_two >= ratio_three && ratio_two >= ratio_one) {
        this.winner = this.weapons[1]
        this.weapons[1].ratio = ratio_two
      } else {
        this.winner = this.weapons[2]
        this.weapons[2].ratio = ratio_three
      }
      this.showResult = true

      return this.winner
    },
    reset() {
      this.weapons.forEach(element => {
        element.money = ''
        element.exp = ''
        element.time = ''
        element.ratio = ''
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weapon {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &-first,
  &-second {
    flex: 45%;
    flex-grow: 1;
    padding: 10px 0 20px;

    label {
      display: block;
      margin: 10px 0 0;
    }
  }

  .main_attr {
    flex: 100%;
    padding: 10px 0;
    label {
      display: block;
      margin: 10px 0 0;
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
