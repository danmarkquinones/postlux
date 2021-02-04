<template>
  <div >
    <div v-if="$store.state.userStores.isLoggedIn">
      <Main/>
    </div>
    
    <div v-else>
      <Login/>
    </div>
  </div>
  
</template>

<script>
import Main from '../components/Main'
import Login from '../components/Login/Login'
export default {
  components:{
        Login,
        Main
  },
  data (){
    return{
      isLogin:false
    }
  } 
}
</script>

