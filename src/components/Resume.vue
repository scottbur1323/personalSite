<template>
  <div class="animated bounceInLeft">
    <h1 class="title">Resume</h1>
    <h4>click image to download</h4>
    <a href="https://drive.google.com/file/d/1NUYDiIMqOjFBF42aZ_W_A8BDPgX5Z2o1/view?usp=sharing">
      <img src="../../static/Resume.jpg">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 740px) {
  h1 {
    font-family: 'Bungee Inline';
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
  }
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    padding-top: 20px;
    color: #E6E6E6;
  }
  img {
    position: relative;
    max-width: 80vw;
    max-height: 100%;
    margin-bottom: 30px;
  }
  h4 {
    font-size: 10px;
    color: #6778AA;
  }

}
/* desktop */
@media screen and (min-width: 741px) {
  h1 {
    font-family: 'Bungee Inline';
  }
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    padding-top: 20px;
    color: #E6E6E6;
    font-size: 50px;
  }
  img {
    position: relative;
    max-width: 50vw;
    max-height: 100%;
    padding-bottom: 40px;
    padding-top: 15px;
  }
  img:hover {
    box-shadow: 0 0 0.5px black, 0 0 1px black, 0 0 0 black;
    border-radius: 10px;
  }
  h4 {
    font-size: 20px;
    color: #6778AA;
  }
}

</style>
