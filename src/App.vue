<template lang="pug">
  <div @scroll="handleScroll" id="app" v-on:myevent="setHeading(data)">  
    .main-screen
      menu-app
      heading(v-bind:title="title" v-bind:caption="caption" v-bind:intro="intro" tag="true")
      .next-section
        div(v-on:click="nextSection()")
    .wrapper#next.main-section
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
      _this.srolledOnce = false
  }
  export default{

    components: {
      'menu-app': MenuApp,
      'heading' : Heading
    },
    data: ()=>{
      return {
        srolledOnce : false, 
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
      handleScroll:(el)=>{
        if(el.target.scrollTop < el.target.offsetHeight && !_this.srolledOnce){
          console.log(_this.srolledOnce)
          VueScrollTo.scrollTo('#next', 1000, {container: "#app"})
          _this.srolledOnce = true 
        }
      },
      nextSection : function(){
        _this.srolledOnce = true 
        VueScrollTo.scrollTo('#next', 500, {container: "#app"})
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
  background: #f9fafc;
}
.row{
  margin: 0 -25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
[class*="col-"]{
  padding: 0 25px;
  width: 100%;
  max-width: 100%;
}
.wrapper{
  max-width: 1470px;
  padding: 0 25px;
  position: relative;
  z-index: 2;
  margin: 0 auto;
}
.m-t-35{
  margin-top: 35px;
}
.m-b-35{
  margin-bottom:  35px;
}
.m-b-25{
  margin-bottom: 25px;
}
.m-t-25{
  margin-top: 25px;
}
.col-tablet-{
  @media (min-width: 560px){
    &1-2{
      max-width: 50%;
    }
    &1-3{
      max-width: 33.33%;
    }
  }
}
.col-laptop-{
  @media (min-width: 1100px){
    &1-2{
      max-width: 50%;
    }
    &1-3{
      max-width: 33.33%;
    }
  }
}
</style>
<style scoped lang="scss">
.main-section{
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 100vh;
}
#app{
  overflow-y: scroll;
  height: 100vh;
}
body,html{
  overflow: hidden;
}
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