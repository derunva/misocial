<template lang="pug">
  h1.heading(v-if="tag")
    .heading__inner
      .heading__caption(v-if="caption") {{caption}}
      .heading__title(v-if="title") {{title}}
      .heading__intro(v-if="intro" v-html="intro") 
  h2.heading(v-else)
    .heading__inner
      .heading__caption(v-if="caption") {{caption}}
      .heading__title(v-if="title") {{title}}
      .heading__intro(v-if="intro" v-html="intro") 
</template>

<script>
  export default{
    name: 'Heading',
    props: ['title', 'caption', 'intro', 'tag']
  }
</script>
<style scoped lang="scss">
  .heading{
    margin: auto;
    text-align: center;
    &__inner{
      display: inline-block;
      max-width: 600px;
      padding: 0 20px;
    }
    &__caption{
      display: inline-block;
      font-size: 14px;
      text-transform: uppercase;
      margin-bottom: 20px;
      position: relative;
      &:before,&:after{
        content: '';
        width: 24px;
        height: 1px;
        background: #000;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &:before{
        left: 100%;
        margin-left: 15px;
      }
      &:after{
        right: 100%;
        margin-right: 15px;
      }
    }
    &__title{
      font-size: 40px;
      margin-bottom: 10px;
      @media (min-width: 1000px){
        font-size: 86px;
      }
    }
    &__intro{
      font-weight: normal;
      font-size :16px;
      line-height: 1.75;
    }
  }
  h1{
    color: #fff;
    .heading{
      &__caption{
        &:before,&:after{
          background: #fff;
        }
      }
    }
  }
</style>