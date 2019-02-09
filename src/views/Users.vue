<template lang="pug">
  <div class="users">
    <h2>Users</h2>
    .m-b-35(v-for="item in users")
      user(v-bind:id="item._id" v-bind:nickName="item.nickName" v-bind:role="item.role" v-bind:avatar="item.avatar")
  </div>
</template>
<script>
// @ is an alias to /src
import { EventBus } from '../event-bus.js';
import User from '../components/User'
export default {
  name: 'users',
  created : function(){
    EventBus.$emit('setHeading', {title: this.title, caption: this.caption, intro: this.intro});
    this.$http.get('http://localhost:3000/users')
      .then(responce => {
        console.log(responce.body)
        this.users = responce.body
      })
  },
  components: {
    'user': User
  },
  data: ()=>{
    return {
      users : [],
      title: 'Users',
      caption : 'misocial',
      intro : 'list of users'
    }
  }
}
</script>