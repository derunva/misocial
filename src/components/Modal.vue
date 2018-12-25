<template lang="pug">
  .modal-component(v-if="open")
    .modal-component__inner.wrapper
      .modal-component__content
        .modal-component__title(v-html="content")
        pricingmodal(v-bind:info="data")
      button(@click="modalClose") close
</template>
<script >
  import { EventBus } from '../event-bus.js';
  import PricingModal from './PricingModal';
  export default{
    name: "modal",
    props: ['test'],
    components: {
      pricingmodal : PricingModal
    },
    mounted: function(){
      console.log(this)
    },
    created: function(){
      var _this = this;
      EventBus.$on('modalOpen', function(data){
        _this.data = data;
        _this.open = true
      });
      
    },
    data: ()=>{
      return {
        open : false,
        content : '<h2>im modal</h2>',
        data : {
          title: 'test',
          options : [
            {
              title : "Some good stuff",
              descr : "lorem ipsum sit amen dolor lorem ipsum sit amen dolor lorem ipsum sit amen dolor "
            },
            {
              title : "Some good stuff",
              descr : "lorem ipsum sit amen dolor lorem ipsum sit amen dolor lorem ipsum sit amen dolor "
            }
          ]
        }
      }
    },
    methods: {
      modalClose(){
        console.log(this.open)
        this.open = false
        EventBus.$emit('closeModal')
      }
    }
  }
</script>
<style scoped lang="sass">
  .modal-component
    position: fixed
    display: flex
    flex-direction: column
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: rgba(255,255,255,.8)
    z-index: 9999
    overflow-y: scroll
    &__inner
      background: #333
      color: #fff
      margin: auto
      width: 100%
      padding-top: 20px
      padding-bottom: 20px
      & > button
        position: absolute
        right: 10px
        top: 10px
</style>