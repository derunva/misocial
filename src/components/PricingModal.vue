<template lang="pug">
  .pricing-modal
    table
      thead
        tr
          td Option
          td Descrition
      tbody
        tr(v-for="item in options")
          td {{item.title}}
          td {{item.descr}}
    .pricing-form
      h2 {{pricingPlanName}}
      form
        input(type="hidden" :value="pricingPlanName")
        input(type="hidden" :value="pricingId")
        input(type="text" placeholder="Name")
        input(type="text" placeholder="Phone")
        button order
</template>
<script >
  export default{
    name: "modal-pricing",
    props : ['data'],
    mounted: function(){
      this.$nextTick(function(){
        console.log(this.props)
      })
      
    },
    data: ()=>{
      return {
        options : [
          {
            title : "Some good stuff",
            descr : "lorem ipsum sit amen dolor lorem ipsum sit amen dolor lorem ipsum sit amen dolor "
          },
          {
            title : "Some good stuff",
            descr : "lorem ipsum sit amen dolor lorem ipsum sit amen dolor lorem ipsum sit amen dolor "
          }
        ],
        pricingPlanName : 'test name',
        pricingId : 0
      }
    }
  }
</script>