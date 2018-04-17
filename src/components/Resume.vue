<template>
  <div class="animated bounceInLeft" >
    <h1 class="title">Resume</h1>
    <h4>click image to download</h4>
    <a href="https://drive.google.com/file/d/1pWMFnS4ZZhwdWjMNC5ohzdWO9kI4RIES/view?usp=sharing" target="_blank">
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
    border-radius: 10px;
    box-shadow: 0 0 2px black, 0 0 5px black, 0 0 5px black;
    transition: box-shadow 0.3s;

  }
  img:hover {
    box-shadow: 0 0 0.5px black, 0 0 15px blue, 0 0 5px black;
    border-radius: 10px;
    transition: box-shadow 0.5s;
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
    border-radius: 10px;
    max-height: 100%;
    margin-bottom: 100px;
    margin-top: 10px;
    box-shadow: 0 0 2px black, 0 0 5px black, 0 0 5px black;
    transition: box-shadow 0.5s;
  }
  img:hover {
    box-shadow: 0 0 0.5px black, 0 0 15px blue, 0 0 5px black;
    border-radius: 10px;
    transition: box-shadow 0.5s;
  }
  h4 {
    font-size: 20px;
    color: #6778AA;
  }
}

</style>
