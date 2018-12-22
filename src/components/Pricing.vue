<template lang="pug">
  #pricing

    .wraper 
      heading( v-bind:title="section.title" v-bind:caption="section.caption" v-bind:intro="section.intro")
      .row.m-t-35.m-b-35
        .col-tablet-1-2.col-laptop-1-3.m-b-25.m-t-25(v-for="item in pricings")
          pricing-plan(v-bind:id="item.id" v-bind:title="item.title" v-bind:price="item.price" v-bind:descr="item.descr" v-bind:img="item.img")
</template>

<script>
  import Heading from './Heading';
  import PricingPlan from './PricingPlan';
  import { EventBus } from '../event-bus.js';
  export default{
    created : function(){
      console.log('pricing')
      EventBus.$emit('setHeading', {title: this.title, caption: this.caption, intro: this.intro});
    },
    components: {
      'heading': Heading,
      'pricing-plan': PricingPlan
    },
    data: ()=>{
      return {
        title : 'Pricing Table',
        caption: 'MIsocial',
        intro: 'Lorem ipsum dolor sit amet, consectetur <br>  adipisicing elit, sed do eiusmod tempor incididunt ut.',
        section: {
          title : 'Select a Plan',
          caption: 'MIsocial',
          intro: 'Lorem ipsum dolor sit amet, consectetur <br>  adipisicing elit, sed do eiusmod tempor incididunt ut. ',
        },
        pricings : [
          {
            id: 1,
            img: 'pricing1.png',
            title: 'personal',
            price: 0,
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.'
          },
          {
            id: 2,
            img: 'pricing2.png',
            title: 'personal',
            price: 60,
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut. adipisicing elit, sed do eiusmod tempor incididunt ut.'
          },
          {
            id: 4,
            img: 'pricing3.png',
            title: 'personal',
            price: 180,
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.'
          }
        ]
      }
    }
  }
</script>