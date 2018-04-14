<template>
  <div class="animated bounceInLeft">
    <h1 class="title">Projects</h1>
    <section id="column">
      <div id="card">
        <div id="nard" class="card mb-3">
          <h6 class="card-header">
            <a href="https://github.com/SethCaparelli/fridge-vision">
              <img class="githubLink" src="../../static/github.png" height="35px">
            </a>
          </h6>
          <div class="card-body">
            <h2 class="card-title">Fridge Vision</h2>
            <p class="card-text">Take a picture of your fridge and let Fridge-Vision tell you what recipes you can make with what's inside.</p>
            <img src="../../static/FridgeVision.gif">
          </div>
        </div>
      </div>
      <div id="card">
        <div id="nard" class="card mb-3">
          <h6 class="card-header">
            <a href="">
              <img class="githubLink" src="../../static/github.png" height="35px">
            </a>
          </h6>
          <div class="card-body">
            <h2 class="card-title">Recipe now!</h2>
            <p class="card-text">A web app that allows the user to compile a shopping list based on what meals they want to make.</p>
          </div>
        </div>
      </div>
    </section>
</div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
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
  #nard {
    border-color: #6778AA;
    border-width: medium;
    background-size: 50vh;
    background-blend-mode: lighten;
    opacity: 1;
    max-width: 85vw;
    min-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    padding-top: 20px;
    color: #E6E6E6;
    font-family: 'Bungee Inline';
  }
  #card {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    min-height: 300px;
    height: 500px;
  }
  h6 {
    height: 50px;
    background-color: transparent;
  }
  img {
    border-radius: 25px;
    opacity: 1;
  }
  .githubLink:hover {
    -webkit-filter: invert(1);
     filter: invert(1);
     transition: filter 1s;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 10px;
  }
}
/* desktop */
@media screen and (min-width: 741px) {
  #nard {
    border-color: #6778AA;
    border-width: medium;
    background-size: 50vh;
    background-blend-mode: lighten;
    opacity: 0.7;
    max-width: 50vh;
    min-height: 400px;
    transition: opacity 1.5s, border-color 1.5s;
    overflow-y: auto;
    overflow-x: hidden;
  }
  #nard:hover {
    opacity: 1;
    border-color: #C19640;
    transition: opacity 1s, border-color 1s;
  }
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    padding-top: 20px;
    color: #E6E6E6;
    font-family: 'Bungee Inline';
    font-size: 50px;

  }
  #card {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    min-height: 300px;
    height: 500px;
  }
  h6 {
    height: 50px;
    background-color: transparent;
  }
  img {
    border-radius: 25px;
    opacity: 1;
  }
  .githubLink:hover {
    -webkit-filter: invert(1);
     filter: invert(1);
     transition: filter 1s;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 10px;
    margin-bottom: 30px;
  }
}

</style>
