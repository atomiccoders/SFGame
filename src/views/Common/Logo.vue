<template>
  <div class="logo">
    <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/background-chains.png"
      style="border:0px; width:550px; height:350px; position:absolute; top:0px; left:0px;" />
    <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/base-sign-2.png"
      style="border:0px; width:550px; height:350px; position:absolute; top:0px; left:0px;" />
    <img alt="sflogo" src="@/assets/sflogo-small.png"
      style="border:0px; width:120px; height:120px; position:absolute; top:30px; left:116px;" />
    <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/symbol-3.png"
      style="border:0px; width:400px; height:250px; position:absolute; top:50px; left:40px;" />

    <div id="CustomWords" style="width:200px;position:absolute;left:42px;top:90px;" >
      <!-- <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-t.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-a.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-w.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-e.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-r.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-n.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-a.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-space.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-p.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-o.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-d.png" />
      <br />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-p.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-i.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-w.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-n.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-y.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-m.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-space.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-d.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-z.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-b.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-a.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-n.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-e.png" />
      <img src="http://apps.pathstoadventure.com/Tavern-Sign-Crafter/letter-m.png" /> -->
      &Tfr;&afr;&wfr;&efr;&rfr;&nfr;&afr; &pfr;&ofr;&dfr;<br/>
      &Pfr;&ifr;&wfr;&nfr;&yfr;&mfr; &Dfr;&zfr;&bfr;&afr;&nfr;&efr;&mfr;
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
  top: -10px;
  left: -20px;
}
img {
  transform: scale(0.55);
  transform-origin: 0 0;
  margin: -5px -8px;
  filter: drop-shadow(2px 4px 6px black);
}
#CustomWords {
  color: #ffc21a;
  font-size: 1.1rem;
  line-height: 1.3;
  text-shadow: 1px 1px 5px #000;
  img {
    height: 35px !important;
    width: 28px;
  }
}
</style>
