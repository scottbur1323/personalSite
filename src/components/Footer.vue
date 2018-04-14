<template>
  <div>
    <h6>{{ msg }}</h6>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Copyright 2018 Chance Scott-Burke'
    }
  }
}
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 740px) {
  h6 {
    padding-top: 3px;
    padding-left: 10px;
    color:#E6E6E6;
    font-size: 8px;
    opacity: .8;
  }
}
/* desktop */
@media screen and (min-width: 741px) {
  h6 {
    position: absolute;
    padding-top: 5px;
    padding-left: 10px;
    color:#E6E6E6;
  }
}
</style>
