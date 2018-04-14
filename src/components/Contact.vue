<template>
  <div class="animated bounceInLeft">
    <h1 class="title">Contact</h1>
    <section>
      <div>
        <img src="../../static/github.png">
        <img src="../../static/galvanize.png">
      </div>
    </section>
    <section>
      <div>
        <img src="../../static/linkedin.png">
        <img src="../../static/email.png">
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
@media screen and (max-width: 740px) {
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    padding-top: 20px;
    color: #E6E6E6;
    font-family: 'Bungee Inline';
  }
  img {
    width: 175px;
    height: 175px;
  }
  section {
    padding-top: 20px;
  }
}
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
}
</style>
