<template>
    <div class="container" >
            <div v-if="isLoading">
                <div  class="post" v-for="(load,index) in loaderArr" :key="index" >
                    <a-skeleton avatar :paragraph="{ rows: 4 }" />
                </div>
            </div>
            <div v-else>
                <div  class="post" v-for="(post,index) in posts" :key="index">
                    <div>
                        <a-row>
                            <a-col :span="3">
                                <a-avatar></a-avatar>
                            </a-col>
                            <a-col :span="20">
                                <nuxt-link :to="'users/'+ post.userId" >
                                    {{post.user}}
                                </nuxt-link>
                                <p>{{dynamicHours(index+1)}} ago</p>
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
    </div>
</template>

<script>
export default {
    name :'PostLists',
    props: ['posts' , 'isLoading'],
    data(){
        return{
            loaderArr:Array(4)
        }
    },
    methods :{
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
.container{
    margin: -9px;
}
.post{
    /* border : 1px dotted gray; */
    margin : 10px;
    padding: 20px;
    background: #fff;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
}
</style>