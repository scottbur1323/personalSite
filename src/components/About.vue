<template>
  <div class="animated bounceInLeft aboutTab">
    <div class="leftDiv"></div>
    <section>
      <h1 class="title">About</h1>
      <div class="about">
        <p class="CENTER">I am a Full Stack Developer with a passion for problem solving and a commitment to learning. I bring a positive mindset and thrive in a team environment. If I’m not coding or spending time with my wife and son, then you can find me writing music or enjoying the Colorado sun. </p>
      </div>
    </section>
    <div class="rightDiv"></div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 740px) {
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    color: #E6E6E6;
    font-family: 'Bungee Inline';
  }
  .aboutTab {
    padding-top: 20px;
    color: #E6E6E6;
    display: flex;
    flex-direction: row;
  }
  .about {
    max-width: 100%;
    max-height:  100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .CENTER {
    align-content: center;
  }
  .leftDiv {
    width: 20vh;
  }
  .rightDiv {
    width: 20vh;
  }
}
@media screen and (min-width: 741px) {
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    color: #E6E6E6;
    font-family: 'Bungee Inline';
    font-size: 50px;
  }
  .aboutTab {
    padding-top: 20px;
    color: #E6E6E6;
    display: flex;
    flex-direction: row;
  }
  .about {
    max-width: 100%;
    max-height:  100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .CENTER {
    align-content: center;
  }
  .leftDiv {
    width: 20vh;
  }
  .rightDiv {
    width: 20vh;
  }
}
</style>
