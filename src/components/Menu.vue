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
  align-items: center;
  @media(min-width: 1000px){
    
  } 
  flex-direction: column;
  @media(min-width: 1000px){
    flex-direction: row;
  }
  min-height: 140px;
}
ul{
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
}
li{
  color: #fff;
  cursor: pointer;
  padding: 15px 20px;
  position: relative;
  margin: 0 5px;
  font-weight: 600;
  &:before{
    content: '';
    position: absolute;
    left: 0;
    width: 0;
    transition: ease .5s width;
    height: 2px;
    bottom: 0;
    background: #fff; 
  }
  &:hover,&.router-link-exact-active{
    &:before{
      width: 100%;
    }
  }
}
</style>