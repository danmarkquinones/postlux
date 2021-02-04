<template>
    <div class="container" >
        <div class="user_details">
            <div class="dp-cover-body">
                <div class="cover-photo">
                    <img :src="getImgC()" alt="">
                    <!-- <img :src="`../../assets/imgs/users/cover-${user.id}.jpg`" alt="">
                    <img src="../../assets/imgs/users/cover-2.jpg" alt=""> -->
                </div>
                <div class="display-photo">
                    <img :src="getImgP()" alt="">
                    <!-- <img :src="`../../assets/imgs/users/user-${user.id}.jpg`" alt=""> -->
                    <!-- <img :src="`/_nuxt/assets/imgs/users/user-${user.id}.jpg`" alt=""> -->
                </div>

                <div class="user-detail">
                    <h1 class="det-p">{{user.name}} ({{user.username}})</h1>
                    <a-row>
                        <a-col :span="24">
                            <p class="det-p"><a-icon type="mail" /> {{user.email}}</p>
                        </a-col>
                        <a-col :span="12">
                            <p class="det-p"><a-icon type="mobile" /> {{getPhone(user.phone)}}</p>
                        </a-col>
                        <a-col :span="12">
                            <a :href="user.website"><a-icon type="global" /> {{user.website}}</a>
                        </a-col>
                    </a-row>
                </div>
            </div>
            <div>
                <a-row type="flex" justify="center" align="top">
                    <a-col class="user-stat" :span="8">
                        <p class="det-p">POST</p>
                        <p class="det-cnt">{{userPosts.length}}</p>
                    </a-col>
                    <a-col class="user-stat" :span="8">
                        <p class="det-p">FOLLOWERS</p>
                        <p class="det-cnt">{{generateNum()}}</p>
                    </a-col>
                    <a-col class="user-stat" :span="8">
                        <p class="det-p">FOLLOWING</p>
                        <p class="det-cnt">{{generateNum()}}</p>
                    </a-col>
                </a-row>
            </div>
            <div class="user-posts">
                <UserPosts :id="this.$route.params.id" :user="user.name"/>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import UserPosts from '../Posts/UserPosts'

export default {
    components:{
        UserPosts,
    },
    head(){
        return {
            title :'Profile'
        }
    },
    data () {
        return {
            user:{},
            userPosts:[],
            isUserLoading:false
        }
    },
    // on mount hooks
    async created () {
        this.isUserLoading = true
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
        .then((response) => {
            if(response){
                this.isUserLoading = false
                this.user = response.data
            }
        })
        .catch((error) =>{
            console.log(error);
        });
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`)
        .then((response) => {
            if(response){
                return this.userPosts = response.data
            }
        })
        .catch((error) =>{
            console.log(error);
        });
    },
    methods:{
        getPhone(num){
            if(num){
                return num.substr(0,14)
            }
        },
        generateNum(){
            let n = Math.random()
            let x = parseInt(n*1000)
            return x.toLocaleString()
        },
        getImgC(){
            return `/imgs/cover-${this.$route.params.id}.jpg`
        },
        getImgP(){
            return `/imgs/user-${this.$route.params.id}.jpg`
        }
    }
}
</script>

<style scoped>
.user_icon{
    height: 50px;
    width: 50px;
}
.user_cont{
    position: relative;
}
.user_details{
    background: #fff;
}
.user-detail{
    text-align: left;;
    background: #fff;
    width: 350px;
    padding: 10px 30px;
    border-radius: 5px;
    position: absolute;
    top: 84%;
    left: 63%;
    transform: translate(-50%,-50%);
}
.user-posts{
    padding: 20px;
}
.user-stat{
    text-align: center;
}
.user-stat .det-p ,.det-cnt{
    font-weight: bold;
    font-size: 20px;
}
.det-cnt{
    color: #1890ff;
    
}
.det-p{
    margin: 0;
}
.dp-cover-body{
        height: 270px;
        background: #fff;
        position: relative;
}
    .cover-photo{
        height: 200px;
        overflow: hidden;
        width: 100%;
        border-radius: 0%;
    }
    .cover-photo img{
        height: 200px;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
    .display-photo{
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: 5px solid #fff;
        overflow: hidden;
        position: absolute;
        top: 70%;
        left: 20%;
        transform: translate(-50%,-50%);
        z-index: 10;
    }
    .display-photo img{
        height: 150px;
        width: 150px;
        object-fit: cover;
        object-position: top;
    }
</style>
