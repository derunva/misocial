<template lang="pug">
  #page
    .main-screen
      menu-app
      heading(v-bind:title="title" v-bind:caption="caption" v-bind:intro="intro" tag="true")
    .wrapper
      |content
    .footer
      |footer content
</template>
<script>
  import Heading from './Heading';
  import PricingPlan from './PricingPlan';
  export default{
    components: {
      'heading': Heading,
      'pricing-plan': PricingPlan
    },
    data: ()=>{
      return {
        title : 'Select a Plan',
        caption: 'MIsocial',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
      }
    }
  }
</script>