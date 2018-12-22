<template lang="pug">
  .pricing-plan
    .pricing-plan__icon(v-if="img")
      img(v-bind:src="getImgUrl(img)")
    .pricing-plan__title {{title}}
    .pricing-plan__price 
      span.curency $
      |{{price}}
      span /month
    .pricing-plan__descr(v-html="descr") 
    .pricing-plan__btn
      .button(@click="openModal(id)") select plan
</template>

<script >
  import { EventBus } from '../event-bus.js';
  export default{
    name: "PricingPlan",
    props: ['img','title', 'price', 'descr', 'id'],
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
        var data = {
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
        EventBus.$emit('modalOpen', data)
      }
    }
  }
</script>

<style scoped lang="sass">
  .curency
    vertical-align: top
  .button
    padding: 20px 50px
    text-transform: uppercase
    box-shadow: 0 0 20px 0 rgba(0,0,0, .1)
    display: inline-block
    border-radius: 30px
    font-size: 12px
    font-weight: bold
    color: #c2c9db
    cursor: pointer
  .pricing-plan
    border-radius: 30px
    border: 1px solid #d5d5dd
    padding: 50px
    background: #fff
    text-align: center
    display: flex
    flex-direction: column
    min-height: 100%
    &:hover
      box-shadow: 0 0 45px 0 rgba(0,0,0, .2)
      .button
        background: #6e45e2
        box-shadow: none
        color: #fff
    &__icon
      margin-bottom: 35px
    &__title
      font-size: 14px
      color: #9fa4af
      font-weight: bold
      margin-bottom: 20px
    &__price
      font-weight: bold
      margin-bottom: 30px
      color: #4f4f6f
      font-size: 60px
      span
        font-size: 18px
    &__descr
      font-size: 16px
      color: #9fa4af
      line-height: 2
      margin-bottom: 20px
    &__btn
      margin-top: auto
</style>