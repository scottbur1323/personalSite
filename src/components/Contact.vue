<template>
  <div id="column" class="animated bounceInLeft">
    <h1 class="title">Contact</h1>
    <section>
      <div>
        <a href="mailto:me@chancescottburke.com"><img class="mailImage" src="../../static/email.png"></a>
        <a href="https://talent.galvanize.com/students/2222" target="_blank"><img src="../../static/galvanize.png"></a>
        <a href="https://www.linkedin.com/in/chanceburke/" target="_blank"><img src="../../static/linkedin.png"></a>
        <a href="https://github.com/scottbur1323" target="_blank"><img src="../../static/github.png"></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact'
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
    width: 18vw;
    height: 18vw;
    /* box-shadow: 0 0 0.5px black, 0 0 1px black, 0 0 0 black;
    border-radius: 10px; */
    margin-left: 10px;
  }
  .mailImage {
    padding-left: 4px;
    padding-right: 4px;
  }
  section {
    padding-top: 40px;
  }
}
</style>
