<template>
  <div class="container">
    <Login/>
  </div>
</template>

<script>
import Login from '../components/Login/Login'
import Main from '../components/Main'
export default {
  components:{
        Login,
        Main
  },
  head(){
    return{
      title:'WELCOME TO V-TALK',
      meta : [],
    }
  },
  data (){
    return{
      isLogin:false

    }
  }
}
</script>

<style scoped>
.body-bg{
  background: blue;
}
</style>

