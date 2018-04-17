<template>
  <div>
    <h2>©<small>2018 Chance Scott-Burke</small></h2>
    <!-- <h6>2018 Chance Scott-Burke</h6> -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: '© 2018 Chance Scott-Burke'
    }
  }
}
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 740px) {
  h2 {
    padding-top: 0px;
    padding-left: 6px;
    color:#E6E6E6;
    font-size: 10px;
    opacity: .8;
  }
}
/* desktop */
@media screen and (min-width: 741px) {
  h2 {
    padding-top: 12px;
    padding-left: 10px;
    color:#E6E6E6;
    font-size: 12px;
    opacity: .8;
  }
}
</style>
