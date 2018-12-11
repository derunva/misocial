<template lang="pug">
  <div id="app" >
    menu-app
    <router-view/>
  </div>
</template>


<script >
  import MenuApp from './components/Menu';
  export default{

    components: {
      'menu-app': MenuApp
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
