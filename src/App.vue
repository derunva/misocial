<template lang="pug">
  <div id="app" v-on:myevent="setHeading(data)">  
    .main-screen
      menu-app
      heading(v-bind:title="title" v-bind:caption="caption" v-bind:intro="intro" tag="true")
      .next-section
        div(v-on:click="nextSection()")
    .wrapper#next
      <router-view/>
  </div>
</template>


<script >
  import MenuApp from './components/Menu';
  import Heading from './components/Heading';
  import { EventBus } from './event-bus.js';
  var VueScrollTo = require('vue-scrollto');
  console.log(VueScrollTo)
  var _this;
  const getHeading = function(data) { 
      _this.title = data.title
      _this.caption = data.caption
      _this.intro = data.intro
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
      EventBus.$on('setHeading', getHeading);
    },
    methods : {
      nextSection : function(){
        console.log('ok')
        VueScrollTo.scrollTo('#next', 500)
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
  min-height: 100vh;
  padding-bottom: 40px;

}
.next-section{
  margin: auto 0 0;
  text-align: center;
  div{
    width: 64px;
    height: 64px;
    display: inline-block;
    background: #fff;
    cursor: pointer;
    border-radius: 50%;
    margin-top: 20px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.3);
    position: relative;
    &:before{
      content: '';
      width: 2px;
      height: 16px;
      background: #9fa4af;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
    &:after{
      content: '';
      width: 8px;
      height: 8px;
      border-left:2px solid #9fa4af;
      border-bottom:2px solid #9fa4af;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(0) translateX(-50%) rotate(-45deg);
    }
  }
}
</style>