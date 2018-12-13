<template lang="pug">
  .menu
    router-link(tag="div" to="/" class="logo")
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
.logo{
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  img{
    margin-right: 20px;
  }
}
.menu{
  padding: 45px 50px;
  display: flex;
  justify-content: space-between; 
}
</style>