<template>
  <div id="wholeHeader">
    <section class="navBar animated fadeIn">
      <nav>
        <router-link :to="{ name: 'Splash' }">
          <h5 id="homeTab" class="button">Home</h5>
        </router-link>
      </nav>
      <nav>
        <router-link :to="{ name: 'About' }">
          <h5 id="aboutTab" class="button">About</h5>
        </router-link>
      </nav>
      <nav>
        <router-link :to="{ name: 'Projects' }">
          <h5 id="projectsTab" class="button">Projects</h5>
        </router-link>
      </nav>
      <nav>
        <router-link :to="{ name: 'Resume' }">
          <h5 id="resumeTab" class="button">Resume</h5>
        </router-link>
      </nav>
      <nav>
        <router-link :to="{ name: 'Contact' }">
          <h5 id="contactTab" class="button">Contact</h5>
        </router-link>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 740px) {
  .navBar {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    transition: color 5s;
    color: transparent;
    padding-top: 20px;
  }
  .button {
    height: inherit;
    width: auto;
    background-color: transparent;
    opacity: .7;
    transition: color 1s, opacity 1s, text-decoration 1s;
    text-decoration: underline overline;
    text-decoration-color: transparent;
    color: white;
    margin-left: 1vh;
    margin-right: 1vh;
    border-bottom: 3px;
    font-size: 15px;
  }
  .button:hover {
    text-decoration-color: #8B521B;
    transition: text-decoration-color 1s, opacity 1s, text-decoration 1s;
    text-decoration: underline overline;
    opacity: 1;
  }
  .button2 {
    height: inherit;
    width: auto;
    background-color: transparent;
    opacity: 1;
    transition: color 3s, opacity 3s, text-decoration 3s;
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    color: white;
    margin: 0px;
    padding-left: 5vh;
    padding-right: 5vh;
  }
  #wholeHeader {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }
}
/* desktop */
@media screen and (min-width: 741px) {
  .navBar {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    transition: color 5s;
    color: transparent;
    padding-top: 30px;
  }
  .button {
    height: inherit;
    width: auto;
    background-color: transparent;
    opacity: .7;
    transition: color 3s, opacity 3s, text-decoration 1s;
    text-decoration: underline overline;
    text-decoration-color: transparent;
    color: white;
    margin-left: 2vh;
    margin-right: 2vh;
    border-bottom: 3px;
    font-size: 30px;
  }

  .button:hover {
    height: inherit;
    width: auto;
    opacity: 1;
    transition: opacity 1s, text-decoration 1s;
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
  }
  .button2 {
    height: inherit;
    width: auto;
    background-color: transparent;
    opacity: 1;
    transition: color 3s, opacity 3s, text-decoration 3s;
    text-decoration: underline overline;
    text-decoration-color: #8B521B;
    color: white;
    margin: 0px;
    padding-left: 5vh;
    padding-right: 5vh;
  }
  #wholeHeader {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }
}
</style>
