<template>
    <div class="cont">
        <h4>People you may know</h4>
        <hr>
        <div v-if="isLoading">
            <div v-for="(l,i) in loader" :key="i">
                <a-skeleton/>
            </div>
        </div>
        <div v-else>
            <div class="user" v-for="(user,index) in users" :key="user.id" v-show="index <= 3" >
                    <a-row   type="flex" justify="center" align="top">
                        <a-col :span="4">
                            <div class="user-img">
                                <a-avatar :src="user.userImg"></a-avatar>
                                <!-- <a-avatar src="/imgs/user-1.jpg"></a-avatar> -->
                            </div>
                        </a-col>
                        <a-col class="user-det" :span="15">
                            <div style="padding: 2px;">
                                <nuxt-link :to="'/users/'+user.id" class="u-name">{{user.name}}</nuxt-link>
                                <p class="u-email">{{user.email}}</p>
                            </div>
                        </a-col>
                        <a-col :span="4">
                            <div style="padding: 2px; margin-top:5px;">
                                <a-button class="add-btn" size="small" @click="add(user,index)"><a-icon type="user-add" /></a-button>
                            </div>
                        </a-col>
                    </a-row>
                <!-- <hr> -->
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            users:[],
            loader:Array[4],
            isLoading:false
        }
    },
    async created () {
        this.isLoading = true
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
        .then((response) => {
            if(response){
                response.data.forEach((user,i) => {
                    user.userImg = `/imgs/user-${user.id}.jpg`
                    user.show = i<=3?true:false
                });
                this.users = response.data
                this.isLoading=false
            }
        })
        .catch((error) =>{
            console.log(error);
        })
    },
    methods:{
        add(user,index){
            this.users.splice(index,1)
        },
        getPic(id) {
            if(id){
                return '../../assets/user-' + id + '.jpg';
            }
            
        }
    }
}
</script>
<style scoped>
.cont{
    padding: 10px;
}
.user{
    margin: 5px 0px;
    padding: 5px;
}
.user-img{
    margin-top:5px;
}
.user:hover{
    background:#f2f2f2;
    cursor: pointer;
}
.user-det p{
    margin: 0;
    font-size: 10px;
}
.u-name{
    font-weight: 500;
    font-size: 10px;
    color:#000;
}
.u-name:hover{
    color: #1890ff;
    text-decoration: underline;
}
.u-email{
    color:#1890ff
}

</style>