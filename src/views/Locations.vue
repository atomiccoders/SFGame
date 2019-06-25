<template>
  <div class="container about">
    <div class="row">
      <div class="col text-center">
        <h1>Krainy naszego <span class="secondary-color">Świata</span></h1>
        <br />
      </div>
    </div>
    <div class="row justify-center">
      <ul class="col-6 text-left">
        <li><Checkbox id="1" name="Czarnolas" /></li>
        <li><Checkbox id="2" name="Dziewiczy Kanion" /></li>
        <li><Checkbox id="3" name="Gnuśnogród" /></li>
        <li><Checkbox id="4" name="Góry Koronkowe" /></li>
        <li><Checkbox id="5" name="Kraina Erogenii" /></li>
        <li><Checkbox id="6" name="Kraina Oz'Kurr" /></li>
        <li><Checkbox id="7" name="Maerwyn" /></li>
        <li><Checkbox id="8" name="Magmakaron" /></li>
        <li><Checkbox id="9" name="Miasto Propolis" /></li>
        <li><Checkbox id="10" name="Miasto Teges" /></li>
        <li><Checkbox id="11" name="Moczary Mary" /></li>
      </ul>
      <ul class="col-6 text-left">
        <li><Checkbox id="12" name="Mroczne Bory" /></li>
        <li><Checkbox id="13" name="Nigdylandia" /></li>
        <li><Checkbox id="14" name="Pogórze Cienistej Skały" /></li>
        <li><Checkbox id="15" name="Pustynia Przesłoneczna" /></li>
        <li><Checkbox id="16" name="Puszcza Zaroślańska" /></li>
        <li><Checkbox id="17" name="Step Strapionych" /></li>
        <li><Checkbox id="18" name="Trakt Trędowatych" /></li>
        <li><Checkbox id="19" name="Ugór Orków" /></li>
        <li><Checkbox id="20" name="Wyspa Trupiego Łba" /></li>
        <li><Checkbox id="21" name="Zmurszały Las" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Locations'
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
