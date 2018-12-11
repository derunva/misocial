<template lang="pug">
  .menu
    router-link(tag="div" to="/")
      img(src="../../public/img/logo.png")
      |MISOCIAL
    ul
      router-link(tag="li" to="/")
        |Home
      router-link(tag="li" to="about")
        |Why MISOCIAL 
      router-link(tag="li" to="features")
        |Features
      router-link(tag="li" to="articles")
        |Articles
      router-link(tag="li" to="pricing")
        |Pricing
</template>

<script>
export default {
  name: 'MenuApp'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>