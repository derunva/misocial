<template lang="pug">
  <div id="app" v-on:myevent="setHeading(data)">  
    .main-screen
      menu-app
      heading(v-bind:title="title" v-bind:caption="caption" v-bind:intro="intro" tag="true")
    .wrapper
      <router-view/>
  </div>
</template>


<script >
  import MenuApp from './components/Menu';
  import Heading from './components/Heading';
  import { EventBus } from './event-bus.js';
  var _this;
  const clickHandler = function(data) { 
      _this.title = data.title
  }
  export default{

    components: {
      'menu-app': MenuApp,
      'heading' : Heading
    },
    data: ()=>{
      return {
        title : 'Select a Plan',
        caption: 'MIsocial',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.'
      }
    },
    created: function(){
      _this = this;
      EventBus.$on('setHeading', clickHandler);
    },
    methods : {
      setHeading : (data) => {
        console.log(data)
      }
    }
  }
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  font-family: Ubuntu, sans-serif;
}
.wrapper{
  max-width: 1470px;
  padding: 0 25px;
  position: relative;
  z-index: 2;
  margin: 0 auto;
}
</style>
<style scoped lang="scss">
.main-screen{
  background-image: url('./assets/bg.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>