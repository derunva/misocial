<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js';
export default {
  name: 'home',
  created : function(){
    EventBus.$emit('setHeading', {title: this.title, caption: this.caption, intro: this.intro});
  },
  data: ()=>{
    return {
      title: 'Home',
      caption : 'misocial',
      intro : 'lorem ipsum'
    }
  }
}
</script>
