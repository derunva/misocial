<template lang="pug">
  #pricing
    heading( v-bind:title="title" v-bind:caption="caption" v-bind:intro="intro")
    pricing-plan(v-for="item in pricings" v-bind:title="item.title" v-bind:price="item.price" v-bind:descr="item.descr")
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
        pricings : [
          {
            title: 'personal',
            price: 0,
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.'
          },
          {
            title: 'personal',
            price: 29,
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.'
          },
          {
            title: 'personal',
            price: 49,
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.'
          }
        ]
      }
    }
  }
</script>