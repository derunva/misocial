<template lang="pug">
  <div class="users">
    <h2>User {{user.nickName}}</h2>
    form(ref="form" @submit="submit")
      input(v-model="user.nickName" name="nickName")
      h3 {{user.email}}
      input(v-model="user.email" name="email")
      br
      label(v-bind:style="{ backgroundImage: 'url(' + user.avatar + ')' }" ref="fileLabel")
        input(type="file" @change="imgPreview" ref="fileInput" name="avatar")
      button update
  </div>
</template>
<script>
// @ is an alias to /src
import { EventBus } from '../event-bus.js';

export default {
  name: 'users',
  created : function(){
    console.log(this.$route.params)
    
    this.$http.get('http://localhost:3000/users/'+this.$route.params.userId)
      .then(responce => {
        console.log(responce.body)
        this.user = responce.body
        EventBus.$emit('setHeading', {title: this.user.nickName, caption: this.user.role, intro: this.user.email});
      })
  },
  data: ()=>{
    return {
      user : {},
      title: 'User',
      caption : 'misocial',
      intro : 'list of users'
    }
  },
  methods:{
    imgPreview(){
      console.log(this.$refs.fileInput)
      this.readURL(this.$refs.fileInput)
    },
    readURL(input) {
      var __this = this
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          __this.$refs.fileLabel.style.backgroundImage = 'url('+e.target.result+')';
        }

        reader.readAsDataURL(input.files[0]);
      }
    },
    submit: function(e) {
      e.preventDefault();
      var data = new FormData(this.$refs.form);
      
      //How to write this sentence below？The value  below is the `input id="message"`'s value.
      

      this.$http.put('http://localhost:3000/users/'+this.$route.params.userId, data).then((response) => {
          // success callback
          this.$router.push({ path: `/users/`})
      }, (response) => {
          // error callback
      });

    }
  }
}
</script>
<style  lang="sass">
  label
    display: block
    height: 200px
    width: 200px
    position: relative
    background-size: cover
    input
      position: absolute
      left: -1000px
</style>