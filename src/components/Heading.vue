<template lang="pug">
  h1.heading(v-if="tag")
    .heading__caption {{title}}
    .heading__title {{caption}}
    .heading__intro {{intro}}
  h2.heading(v-else)
    .heading__caption {{title}}
    .heading__title {{caption}}
    .heading__intro {{intro}}
</template>

<script>
  export default{
    name: 'Heading',
    props: ['title', 'caption', 'intro', 'tag']
  }
</script>
<style>
  .heading{
    margin: auto;
  }
</style>