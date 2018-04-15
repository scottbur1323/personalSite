<template>
  <div id="app">
    <div>
      <link rel="stylesheet" href="../../static/reset.css">
      <link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
      <link href="https://fonts.googleapis.com/css?family=Gugi|Source+Code+Pro|Black+Ops+One|Bungee+Inline|Baloo+Bhaijaan|Black+Ops+One|Bungee+Inline|Lalezar|Monofett|Montserrat+Subrayad|Akronim" rel="stylesheet">

      <img id="hero" src="../static/rendered.jpg">

      <header id="header">
        <app-header></app-header>
      </header>

      <router-view id="routed" />

      <footer id="footer">
        <app-footer text-color="white"></app-footer>
      </footer>

    </div>
  </div>
</template>


<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
/* mobile */
@media screen and (max-width: 740px) {
  #routed {
    text-align: center;
    position: relative;
    margin-bottom: 25px;
  }
  #header {
    position: relative;
    text-align: center;
  }
  #hero {
    position: absolute;
    max-width: 100%;
    min-height: 100%;
    background-color: #1A0201;
  }

  #app {
    background-color: #1A0201;
    background-size: auto;
    max-height: 100%;
    font-family: 'Source Code Pro', monospace;
  }

  #footer {
    position: fixed;
    width: 100%;
    left: 0px;
    bottom: 0px;
    height: 15px;
    background-color: #1A0201;
    opacity: 0.8;
  }
}
/* desktop */
@media screen and (min-width: 741px) {
  #routed {
    text-align: center;
    position: relative;
  }
  #header {
    position: relative;
    align-items: center;
  }
  #hero {
    position: absolute;
    max-width: 100%;
    min-height: 100%;
    background-color: #1A0201;
  }

  #app {
    background-color: #1A0201;
    max-height: 100%;
    font-family: 'Source Code Pro', monospace;
  }

  #footer {
    position: fixed;
    width: 100%;
    left: 0px;
    bottom: 0px;
    height: 35px;
    background-color: #1A0201;
    opacity: 0.8;
  }
}

</style>
