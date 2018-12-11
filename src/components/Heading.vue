<template lang="pug">
  .heading
    .heading__caption {{title}}
    .heading__title {{caption}}
    .heading__intro {{intro}}
</template>

<script>
  export default{
    name: 'Heading',
    props: ['title', 'caption', 'intro']
  }
</script>