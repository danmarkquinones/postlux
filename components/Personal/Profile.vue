<template>
    <div class="cont">
        <div class="dp-cover-body">
            <div class="cover-photo">
                <img src="~assets/sample-cover.jpg" alt="">
            </div>
            <div class="display-photo">
                <img src="~assets/sample-dp.jpg" alt="">
            </div>
        </div>
        <div class="profile-details">
            <p class="name">Danmark P. Quinones</p>
            <p class="u-name">Midorenji</p>
            <p class="qoute">POGI AKO</p>
            <p class="email">danmarkquinones@gmail.com</p>
            <hr>
            <a-row>
                <a-col :span="8">
                    <p class="stats">Post</p>
                    <p class="stats-cnt">100</p>
                </a-col>
                <a-col :span="8">
                    <p class="stats">Followers</p>
                    <p class="stats-cnt">100,000</p>
                </a-col>
                <a-col :span="8">
                    <p class="stats">Following</p>
                    <p class="stats-cnt">100</p>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .dp-cover-body{
        height: 150px;
        background: #fff;
        position: relative;
    }
    .cover-photo{
        height: 100px;
        overflow: hidden;
        width: 100%;
        border-radius: 0%;
    }
    .cover-photo img{
        height: 100px;
    }
    .display-photo{
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 3px solid #fff;
        overflow: hidden;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .display-photo img{
        height: 100px;
        width: 100px;
    }
    .profile-details{
        text-align: center;
        margin-bottom: 10px;
    }
    .profile-details p {
        margin : 0;
    }
    .stats {
        /* color: #000; */
        font-weight: 500;
        
    }
    .stats-cnt{
        color:#1890ff;
        font-weight: 500;
        font-size: 18px;
    }
    .name{
        font-weight: bold;
        font-size: 20px;
    }
    .email {
        color: #1890ff;
    }
</style>