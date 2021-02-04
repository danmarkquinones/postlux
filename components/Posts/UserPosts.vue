<template>
    <div class="user_post_cont">
        <div class="user_post" v-for="post in userPosts" :key="post.id">
            <div>
                <a-row>
                    <a-col style="margin-top:5px" :span="3">
                        <a-avatar :src="`/imgs/user-${post.userId}.jpg`"></a-avatar>
                    </a-col>
                    <a-col :span="20">
                        <p style="margin:0;font-weight:bold;">{{user}}</p>
                        <p style="margin:0">{{dynamicHours(post.id)}} ago</p>
                    </a-col>
                    <a-col :span="1">
                        <a-icon type="ellipsis" />
                    </a-col>
                </a-row>
                
                <p class="post_title">{{post.title}}</p>
                <hr>
                <p>{{post.body}}</p>
                <div>
                    <a-row>
                        <a-col :span="3">
                            <span class="post-action">
                                <a-icon type="like" /> Like
                            </span>
                        </a-col>
                        <a-col :span="5">
                            <span class="post-action">
                                <a-icon type="message"/> Comment
                            </span> 
                        </a-col>
                        <a-col :span="6">
                            <span class="post-action">
                                <a-icon type="share-alt" /> Share
                            </span> 
                        </a-col>
                    </a-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name : 'UserPosts',
    props:['id','user'],
    data () {
        return {
            userPosts:[],
            isLoading:true
        }
    },
    async created () {
        // console.log('PROPS',this.$props.id)
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.$props.id}`)
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
        dynamicHours(num){
            if(num === 1){
                return num + " minute"
            }else if(num>1 && num <=59){
                return num + " minutes"
            }else if(num>=60){
                let n = Math.floor(num/60)
                if(n===1){
                    return n + " hour"
                }else{
                    return n + " hours"
                }
            }
        },
    }
}
</script>

<style scoped>
.user_post{
    padding:20px;
    border: 2px dotted gray;
    margin : 10px;
}
.post_title{
    font-weight: bold;
}
.post-action{
    transition:.5s
}
.post-action:hover{
    cursor: pointer;
    color:#1890ff;
    transition:.5s
}
</style>