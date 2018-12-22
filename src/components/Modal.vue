<template lang="pug">
  .modal-component
</template>
<script >
  export default{
    name: "modal",
    props: ['test'],
    mounted: function(){
      this.$nextTick(function(){
        console.log(this.props)
      })
      
    },
    data: function(){
      return {
        hello: 'sunburn300.png'
      }
    },
    methods: {
      getImgUrl(pic) {
        return require('../../public/img/'+pic)
      },
      openModal(id){
        console.log(id)
      }
    }
  }
</script>