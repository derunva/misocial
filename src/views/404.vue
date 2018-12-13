<template>
  <div class="not-found">
    <h1>Page not found</h1>
  </div>
</template>
<script>
  import { EventBus } from '../event-bus.js';
  export default{
    created : function(){
      console.log('pricing')
      EventBus.$emit('setHeading', {title: 'ERROR404 page not found!!!'});
    }
  }
</script>