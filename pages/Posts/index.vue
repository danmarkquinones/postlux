<template>
    <div>
        <PostLists :posts="posts" :isLoading="isLoading"/>
    </div>
</template>

<script>
import axios from 'axios'
import PostLists from '../../components/Posts/PostsLists'
export default {
    components:{
        PostLists
    },
    head(){
        return {
            title :'Posts'
        }
    },
    data () {
        return {
            posts:[],
            users:[],
            isLoading:false
        }
    },
    // on mount hooks
    // updated(){
    //     if(this.posts.length <= 0){
    //         console.log(this.posts , this.$store.state.userStores.isLoading)
    //         this.$store.commit('userStores/fetching')
    //     } else{
    //         console.log(this.posts , this.$store.state.userStores.isLoading)
    //         this.$store.commit('userStores/fetched')
    //     }      
    // },
    async created() {
        this.isLoading=true
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if(response){
                axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then((res) => {
                    this.users = res.data
                    response.data.forEach(post => {
                        this.users.filter(user=>{
                            if(user.id===post.userId){
                                post.user = user.name
                            }
                        })
                    });
                    this.posts = response.data 
                    this.isLoading=false
                }).catch((error) =>{
                    console.log(error);
                });
            }
        }) 
        .catch((error) =>{
            console.log(error);
        });
    }
}
</script>