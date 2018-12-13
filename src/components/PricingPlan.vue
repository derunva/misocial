<template lang="pug">
  .pricing-plan
    .pricing-plan__icon
    .pricing-plan__title {{title}}
    .pricing-plan__price 
      span.curency $
      |{{price}}
      span /month
    .pricing-plan__descr {{descr}}
    .pricing-plan__btn
</template>

<script >
  export default{
    name: "PricingPlan",
    props: ['title', 'price', 'descr']
  }
</script>

<style scoped lang="sass">
  .pricing-plan
    border-radius: 30px
    border: 1px solid #d5d5dd
    margin: 70px 0
</style>