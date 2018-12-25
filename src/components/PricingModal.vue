<template lang="pug">
  .pricing-modal
    table
      thead
        tr
          td Option
          td Descrition
      tbody
        tr(v-for="item in info.options")
          td {{item.title}}
          td {{item.descr}}
    .pricing-form
      h2 {{info.pricingPlanName}}
      form
        input(type="hidden" :value="info.pricingPlanName")
        input(type="hidden" :value="info.pricingId")
        input(type="text" placeholder="Name")
        input(type="text" placeholder="Phone")
        button order
</template>
<script >
  export default{
    name: "modal-pricing",
    props : ['info']
  }
</script>