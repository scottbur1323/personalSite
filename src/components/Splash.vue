<template>
  <div class="splash">
    <h1 class="animated bounceInRight title" style="color: #E6E6E6">chance<br><small class="smallTitle">scott-burke</small></h1>
    <h3 class="animated bounceInRight subtitle">/full-stack-developer</h3>
    <img id="chanceHero" class="animated bounceInLeft chanceHero" src="../../static/FullSizeRender.jpg">
  </div>
</template>

<script>
export default {
  name: 'Splash'
}
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 740px) {
  .splash {
    padding-top: 30px;
  }
  #chanceHero {
    width: 85vw;
    margin-top: 20px;
  }
  .welcome {
    margin-top: 185px;
  }
  .title {
    font-family: 'Bungee Inline';
    text-decoration-color: #8B521B;
    font-size: 40px;
    color: #6778AA;
  }
  .subtitle {
    font-size: 20px;
    color: #8B521B;
  }
  .smallTitle {
    color:#6778AA;
    font-size: 40px;
  }
  h3 {
    color: #8B521B;
  }
}
/* desktop */
@media screen and (min-width: 741px) {
  .splash {
    padding-top: 30px;
  }
  #chanceHero {
    width: 45vw;
    margin-top: 20px;
    border-radius: 25px;
  }
  .welcome {
    margin-top: 185px;
  }
  .title {
    font-family: 'Bungee Inline';
    text-decoration-color: #8B521B;
    font-size: 55px;
    color: #6778AA;
  }
  .subtitle {
    font-size: 30px;
    color: #8B521B;
  }
  .smallTitle {
    color:#6778AA;
    font-size: 50px;
  }
  h3 {
    color: #8B521B;
  }
}
</style>
