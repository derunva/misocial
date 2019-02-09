<template lang="pug">
  .user(@click="redirectToUser(id)")

    .user__avatar(v-if="avatar")
      img(v-bind:src="avatar")
    .user__info 
      .user__role {{role}} {{id}}
      .user__name {{nickName}}
</template>
<script>

  export default{
    name: "User",
    props: ['avatar','role', 'nickName','id'],
    data: ()=>{
      return {
        // avatar : this.$props.avatar,
        // role: this.$props.role,
        // nickName: this.$props.nickName,
        // id: this.$props.id
      }
    },
    methods: {
      redirectToUser(id){
        console.log(this.$router, id)
        this.$router.push({ path: `/users/${id}`})
      }
    }
  }
</script>
<style scoped lang="sass">
  .user
    display: flex
    padding: 10px
    border: 1px solid #a3a3a3
    border-radius: 100px
    img
      max-width: 100%
    &__avatar
      max-width: 200px
      margin-right: 20px
      img
        border-radius: 50%
    &__role
      color: #a3a3a3
      margin-bottom: 20px
    &__name
      font-size: 2em
</style>