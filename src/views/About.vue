<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import { EventBus } from '../event-bus.js';
export default {
  name: 'about',
  created : function(){
    EventBus.$emit('setHeading', {title: this.title, caption: this.caption, intro: this.intro});
  },
  data: ()=>{
    return {
      title: 'about',
      caption : 'misocial',
      intro : 'lorem ipsum'
    }
  }
}
</script>