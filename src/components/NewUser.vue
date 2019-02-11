<template lang="pug">
  form(ref="form" @submit="submit")
    .form-row
      input(name="email", placeholder="email")
    .form-row
      input(name="password", placeholder="password")
    .form-row
      input(name="nickName", placeholder="nickName")
    .form-row
      label(ref="fileLabel")
        input(name="avatar" @change="imgPreview" type="file" ref="fileInput" )
    button save
</template>
<script>

  export default{
    name: "NewUser",
    data: ()=>{
      return {
        
      }
    },
    methods: {
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
      redirectToUser(id){
        console.log(this.$router, id)
        this.$router.push({ path: `/users/${id}`})
      },
      submit(e){
        e.preventDefault();
        var data = new FormData(this.$refs.form);
        console.log(data)
        this.$http.post('http://localhost:3000/users/', data).then((response) => {
          console.log(response)
          this.redirectToUser(response.body._id)
          
        }, (response) => {
            // error callback
            console.log(response)
        });
      }
    }
  }
</script>
<style scoped lang="sass">
  label
    display: block
    height: 200px
    width: 200px
    position: relative
    background-size: cover
    border: 3px dashed gray
    input
      position: absolute
      left: -1000px
</style>