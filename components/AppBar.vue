<template>
    <!-- <header> -->
        <ul>
            <!-- <li>
                <nuxt-link to='/'>Home</nuxt-link>
            </li> -->
            <li>
                <nuxt-link to='/posts'>Posts</nuxt-link>
            </li>
            <li>
                <nuxt-link to='/users'>Users</nuxt-link>
            </li>
            <li>
                <!-- {{$store.state.userStores.darkMode}} -->
                <a-switch @change="darkmode" checked-children="🌙" un-checked-children="☀️"  />
            </li>
            <li>
                <!-- <a-icon class='logout-icon' type="logout" /> -->
                <a-icon class='logout-icon' type="setting" @click="logout"/>
            </li>
            
        </ul>
    <!-- </header> -->
</template>

<script>
export default {
    name : 'AppBar',
    methods:{
        darkmode(checked){
            if(checked){
                this.$store.commit('userStores/darkModeOn')
            }else{
                this.$store.commit('userStores/darkModeOff')
            }
        },
        logout(){
            this.$store.commit('userStores/logout')
        }
    }
}
</script>
<style scoped>
    ul {
        display: inline;
    }
    ul li {
        display: inline;
        padding: 20px;
        
    }
    ul li a, .logout-icon{
        text-decoration: none;
        color: #fff;
        transition: .5s;
    }
    ul li a:hover , .logout-icon:hover{
        color: #1890ff;
        transition: .5s;
    }
    
</style>