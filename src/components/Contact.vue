<template>
  <div id="column" class="animated bounceInLeft">
    <h1 class="title">Contact</h1>
    <section>
      <div class="topImages">
        <a href="mailto:me@chancescottburke.com"><img src="../../static/email.png"></a>
        <a href="https://talent.galvanize.com/students/2222" target="_blank"><img src="../../static/galvanize.png"></a>
      </div>
    </section>
    <section>
      <div class="bottomImages">
        <a href="https://www.linkedin.com/in/chanceburke/" target="_blank"><img src="../../static/linkedin.png"></a>
        <a href="https://github.com/scottbur1323" target="_blank"><img src="../../static/github.png"></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 740px) {
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    padding-top: 20px;
    color: #E6E6E6;
    font-family: 'Bungee Inline';
  }
  img {
    width: 30vw;
    /* height: 20vw; */
    margin-left: 15px;
    margin-right: 15px;
  }
  section {
    padding-top: 20px;
  }
}
/* desktop */
@media screen and (min-width: 741px) {
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    padding-top: 20px;
    color: #E6E6E6;
    font-family: 'Bungee Inline';
    font-size: 50px;
  }
  img {
    width: 175px;
    height: 175px;
  }
  section {
    padding-top: 20px;
  }
  #column {

  }
}
</style>
