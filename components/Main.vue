<template>
    <div class="container" >
        <a-layout class="container" id="components-layout-demo-custom-trigger">
            <a-layout class="main">

                <!-- <a-affix 
                    class="nav-body"
                    :offset-top="top"> -->
                    <a-layout-header class="main-nav"  style="padding: 0px 120px ; display:'inline';">
                    <img  src="~assets/imgs/vector/default-monochrome.svg" height="30px" />
                    <AppBar/>
                    </a-layout-header>
                <!-- </a-affix> -->

                <a-layout-content 
                    class="content-container" 
                    :style="{background: 'lightgray', minHeight: '280px' }">
                    <a-row class="row-body" type="flex" justify="center" align="top">
                        <a-col :span="5" class="col-div left-side">
                            <div style="background:#fff; box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);">
                                <Profile/>
                            </div>
                            <div style="background:#fff; margin:10px 0px; box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);">
                                <p>EVENTS</p>
                            </div>
                        </a-col>
                        <a-col :span="10" class="col-div">
                            <div>
                                <Nuxt/>
                            </div>
                        </a-col >
                        <a-col :span="5" class="col-div right-side">
                            <div style="background:#fff; box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);">
                                <AddToFeed/>
                            </div>
                        </a-col>
                    </a-row> 
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import AppBar from './AppBar'
import Profile from './Personal/Profile'
import AddToFeed from './Features/AddtoFeed'

export default {
    components:{
        AppBar,
        Profile,
        AddToFeed
    },
    data() {
        return {
        collapsed: false,
        };
    },
    
}
</script>

<style >
/* .container{
  min-height: aut;
} */
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.logo-img{
    text-align: center;
    margin: 15px 0px;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.logo-collapse{
    background:#1890ff; 
    padding: 5px;   
    color: #fff;
    width: 70%;
    margin-left: 15%;
    margin-top: -5%;
    border-radius: 3px;
}
.logo-collapse span{
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 20px;
}

.nav-body .main-nav{
    background: rgb(0, 74, 102);
}
.col-div{
    padding: 10px;
    /* position: relative; */
}
.main-nav{
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 999;
}
.left-side , .right-side{
    position: sticky;
    position: -webkit-sticky;
    top: 65px;
}
.col-div div {
    border-radius: 10px;
    overflow: hidden;
}
.dark .main-nav {
    background:rgba(0, 0, 0, 0.5) !important;
    transition: .5s;
}
.light .main-nav {
    background:#fff !important;
    transition: .5s;
}
</style>
