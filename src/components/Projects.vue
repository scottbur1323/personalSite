<template>
  <div class="animated bounceInLeft">
    <h1 class="title">Projects</h1>
    <section id="column">
      <div id="card">
        <div id="nard" class="card">
          <h6 class="card-header">
            <p class="githubText">GITHUB</p>
            <a href="https://github.com/SethCaparelli/fridge-vision">
              <img class="githubLink" src="../../static/github.png" height="35px">
            </a>
          </h6>
          <div class="card-body">
            <h2 class="card-title">Fridge Vision</h2>
            <p class="card-text">Take a picture of your fridge and let Fridge-Vision tell you what recipes you can make with what's inside.</p>
            <img class="projectGif" src="../../static/FridgeVision.gif">
          </div>
        </div>
      </div>
      <div id="card">
        <div id="nard" class="card">
          <h6 class="card-header">
            <p class="githubText">GITHUB</p>
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
  name: 'Projects'
}
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 740px) {
  .githubText {
    position: static;
    font-family: 'Bungee Inline';
    margin-bottom: 0px;
  }
  .githubLink {
    position: relative;
  }
  .card-body {
    background-color: transparent
  }
  .card-title {
    font-size: 28px;
    font-weight: bold;
    color: #6778AA;
    text-shadow: 1px 1px 2px black, 0 0 30px black, 0 0px 0px black;
    margin-top: 55px;
  }
  #nard {
    border-color: #6778AA;
    border-width: thick;
    width: 80vw;
    min-width: 285px;
    min-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 3%;
    background-color: #0F274D;
    padding-bottom: 10px;

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
    padding-top: 10px;
    height: 520px;
  }
  .card-header {
    height: 50px;
    background-color: transparent;
    align-self: center;
    width: 80vw;
    position: absolute;
    min-height: 55px;
    padding-bottom: 55px;
  }
  .githubLink {
    opacity: 1;
    -webkit-filter: none;
    filter: none;
    transition: filter 1s;
  }
  .projectGif {
    border-radius: 25px;
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
  .githubText {
    position: static;
    font-family: 'Bungee Inline';
    margin-bottom: 0px;
  }
  .githubLink {
    position: relative;
  }
  .card-title {
    font-size: 28px;
    font-weight: bold;
    color: #6778AA;
    text-shadow: 1px 1px 2px black, 0 0 30px black, 0 0px 0px black;
    margin-top: 55px;
  }
  #nard {
    border-color: #6778AA;
    border-width: medium;
    background-size: 50vh;
    background-blend-mode: lighten;
    opacity: 0.7;
    max-width: 40vw;
    min-height: 400px;
    transition: opacity 1.1s, border-color 1.1s;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #1E3A67;
  }
  #nard:hover {
    opacity: 1;
    border-color: #C19640;
    transition: opacity 1s, border-color 1s;
  }
  #card {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    height: 520px;

  }
  .title {
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    padding-top: 20px;
    color: #E6E6E6;
    font-family: 'Bungee Inline';
    font-size: 50px;

  }
  .card-header {
    height: 50px;
    background-color: transparent;
    align-self: center;
    width: 80vw;
    position: absolute;
    min-height: 55px;
    padding-bottom: 55px;
  }
  .githubLink {
    opacity: 1;
    -webkit-filter: none;
    filter: none;
    transition: filter 1s;
  }
  .projectGif {
    border-radius: 25px;
  }
  .githubLink:hover {
    -webkit-filter: invert(2);
     filter: invert(2);
     transition: filter 2s;
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
