<template>
    <div class="container" >
        <h1>USERS LIST</h1>
    </div>
</template>

<script>

export default {
    name :'UsersLists',
    props: ['posts' , 'users']
}
</script>

<style scoped>
.container{
    padding: 50px;
}
.post{
    border : 1px dotted gray;
    margin : 10px;
    padding: 20px;
}
</style>