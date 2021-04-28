<template>
    <div class="page-wrapper chiller-theme">
    <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
              <div class="sidebar-header">
                <div class="search-container">
                  <div class="row">
                    <div class="col-md-2">
                      <img src="../assets/ionic-ios-search.svg" alt="">
                    </div>
                    <div class="col-md-10">
                      <input  @keyup.enter="Search" v-model="search" type="text" class="search-btn" placeholder="ค้นหา">
                    </div>
                  </div>
                </div>
              </div>
            <div class="sidebar-menu" style="padding:10px;">
                 <ul>
                    <li class="mb-1"> 
                        <router-link to="/">
                          <img src="../assets/ionic-ios-star-outline.svg" alt="">
                          <span>ค้นพบสิ่งใหม่ ๆ</span>    
                       </router-link>
                    </li>
                    <li class="mb-1">
                        <router-link :to="{name:'ViewCat',params:{category:'เกม'}}">
                            <img src="../assets/awesome-gamepad.svg">
                            <span>เกม</span>
                        </router-link> 
                    </li>
                    <li class="mb-1">
                        <router-link :to="{name:'ViewCat',params:{category:'การถ่ายภาพ'}}">
                            <img src="../assets/awesome-camera.svg">
                            <span>การถ่ายภาพ</span>
                        </router-link> 
                    </li>
                    <li class="mb-1">
                        <router-link :to="{name:'ViewCat',params:{category:'การศึกษา'}}" >
                            <img src="../assets/awesome-graduation-cap.svg">
                            <span>การศึกษา</span>
                        </router-link> 
                    </li>
                    <li class="mb-1">
                        <router-link :to="{name:'ViewCat',params:{category:'การสื่อสาร'}}">
                            <img src="../assets/ionic-ios-videocam.svg">
                            <span>การสื่อสาร</span>
                        </router-link> 
                    </li>
                    <li class="mb-1">
                        <router-link :to="{name:'ViewCat',params:{category:'กีฬา'}}" >
                            <img src="../assets/ionic-ios-american-football.svg">
                            <span>กีฬา</span>
                        </router-link> 
                    </li>
                    <li class="mb-1" >
                        <router-link :to="{name:'ViewCat',params:{category:'ช็อปปิ้ง'}}">
                            <img src="../assets/ionic-ios-cart.svg">
                            <span>ช็อปปิ้ง</span>
                        </router-link> 
                    </li>
                   
                </ul>
            </div>
            <!-- sidebar-menu  -->
        </div>
        <div class="sidebar-footer">

            <div class="account" v-show="isLogin" style="position:relative">
              <router-link :to="{name:'Account',params:{id:login._id}}" style="display: block;width: 100%;text-align: center;">
                  <img v-if="!isLogin" src="../assets/ionic-ios-contact-gray.svg" alt=""> 
                  <img v-else :src="'http://uni-api.app.ruk-com.cloud/profiles/' + login.pic" alt="" style="width: 40px;border-radius: 50%;height:40px">
                  <span style="color : #707070 ; padding-left:10px"> {{login.fname + ' ' + login.lname}}</span>
              </router-link>
                
                <div class="logout" @click="Logout">
                  ออกจากระบบ
                </div>
            </div>
        </div>
    </nav>
    <main class="page-content" style="padding-left:260px">
        <div class="container ">
        <div class="row">
          <div class="col-md-12">
            <div class="card b-b">
              <div class="card-header d-flex w-100 ">
                  <div class="left d-flex justify-content-start w-100">
                    บัญชีของฉัน
                  </div>
                  <div class="right d-flex justify-content-end w-100 align-items-center">
                    <button style="background:none;border:none" class="home-link" @click="close">
                        <img :src="'http://uni-api.app.ruk-com.cloud/profiles/'+login.pic" width="40" height="40" style="margin-right:10px;border-radius:50%" alt="" >    แก้ไขข้อมูล
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row b-t">
            <h5 class="p-4">แอปพลิเคชันของฉัน</h5>
          <div v-for="app in download" :key="app._id" class="col-md-3 mb-2 mt-2">
              <div class="container-fluid p-0">
                <div class="row" style="height:80px">
                  <div class="col-md-3 d-flex align-items-center">
                    <img :src="'http://uni-api.app.ruk-com.cloud/icon/'+app.icon" alt="" class="img-fluid">
                  </div>
                  <div class="col-md-5 mt-2 p-0">
                    <div class="app-name">
                      <router-link style="text-decoration:none"  :to="{name:'ViewApp',params:{id:app._id}}">
                        {{app.app_name}}
                      </router-link>
                    </div>
                    <div class="app-dev">
                      {{app.dev_name}}
                    </div>
                  </div>
                  <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <a class="app_download w-100" @click="Download(app._id,app.link,app.app_name)" style="cursor:pointer">
                      รับ
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="hr"></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Edit Section -->
    <div class="edit-container">
        <div class="edit-form">
            <form @submit.prevent="EditUser" style="width:50%;position:relative">
                <router-link class="close-sec btn btn-close" to='#' style="z-index:1000" @click="close"></router-link>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="card" style="padding: 20px;box-shadow: 0 3px 20px rgb(0 0 0 / 16%);">
                                <div class="card-header ">
                                    แก้ไขบัญชีของคุณ
                                </div>
                                <div class="card-body b-t">
                                   <div class="row">
                                       <div class="col-12 mb-5">
                                            <div class="img-profile">
                                                <div class="img-edit">
                                                    <img id="preview" :src="'http://uni-api.app.ruk-com.cloud/profiles/'+regis.pic"  alt="">
                                                    <label class="img-edit-input" for="file">แก้ไข</label>
                                                    <input style="display:none" type="file" name="file" v-on:change="onFilePicked()" id="file" ref="file">
                                                </div>
                                            </div>
                                       </div>
                                       <div class="col-6 mb-3">
                                          <label for="fname">ชื่อจริง</label>
                                           <input v-model="regis.fname" type="text" class="form-control" placeholder="ชื่อจริง">
                                       </div>
                                       <div class="col-6 mb-3">
                                          <label for="lname">นามสกุล</label>
                                           <input v-model="regis.lname" type="text" class="form-control" placeholder="นามสกุล">
                                       </div>
                                       <div class="col-6 mb-3">
                                          <label for="fname">ชื่อผู้ใช้</label>

                                           <input v-model="regis.username" type="text" class="form-control" placeholder="ชื่อผู้ใช้">
                                       </div>
                                       <div class="col-6 mb-3">
                                          <label for="fname">รหัสผ่าน</label>

                                           <input v-model="regis.password" type="password" class="form-control" placeholder="นามสกุล">
                                       </div>
                                       <div class="col-6 offset-6 mb-5">
                                           <button class="btn d-block btn-coral w-100" style="">บันทึกข้อมูล</button>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>  
</template>
<style scoped>
.edit-container {
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100vh;
    top: 0;
    background: rgba(0,0,0,0.45);
    display: none;
    justify-content: center;
    align-items: center;
}
.edit-form {
    width: 100%;
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-profile {
    display: flex;
    justify-content: center;
    padding: 20px;
}
label.img-edit-input {
    position: absolute;
    display: flex;
    bottom: -100px;
    cursor:pointer;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background: linear-gradient(
0deg
, black 40%, transparent );
    width: 140px;
    text-align: center;
    height: 140px;
    justify-content: center;
    align-items: center;
}
.img-edit img {
    width: 100%;
}
.img-edit {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    width: 140px;
    height: 140px;
}

</style>
<style scoped>
.card-header {
    border-bottom: 0px;
    border-top: 1px solid #e6e6e6;
    border-radius: 0;
}
.account:hover .logout {
    display: block;
    top:-40px;
}
.logout {
    display: none;
    position: absolute;
    top: -10px;
    text-align: center;
    width:100%;
    padding: 8px 30px;
    color: #EF6060;
    background: rgba(221, 221, 221, 0.9);
    animation:fadein 1s 1 ease-in-out;
    opacity: 1;
    transition: 400ms  ease-in;
}


.hr {
    width: 15rem;
    margin: 0 auto;
    border-bottom: 1px solid #D8D8D8;
}
a.app_download {
    display: block;
    color: #EF6060;
    text-decoration: none;
    background: #EFEFEF;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 14px;
    width: 100%;
    text-align: center;
}
.app-name , .app-name a{
  direction: ltr;
     text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    text-decoration: none;
    color: black;
    max-height: 47px;
}
.app-dev {
    font-size: 11px;
    color: #747474;
}
.home-link{
  text-decoration: none;
  font-size: 20px;
  color:#EF6060;
}
.b-t{
  border-top:1px solid  #D8D8D8;
}
.hide{
  display:none!important;
}
.card-text{
  color:#747474;
}
.card-content {
    display: flex;
    width: 100%;
    gap: 10px;
}
.round-5{
  border-radius: 5px;
}
.card-body {
    background: #EFEFEF;
}
.main-header-text span {
    font-size: 34px;
}

.main-header-text {
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.main-header {
    margin-top: -20px;
    padding: 20px;
    background: url('../assets/header.svg');
    height: 400px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
a.router-link-active.router-link-exact-active.close-sec.btn.btn-close {
    position: absolute;
    right: 1.5rem;
    top: 10px;
}
button.close-sec {
    position: absolute;
    right: 1rem;
    top: 1rem;
}
.login_form , .regis_form{
  width:100%;
  height: 100vh;
  position: relative;
}
.login_section , .regis_section {
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.form-container{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background:white;
    padding:25px 50px;
    border-radius: 10px;
    width:500px;
    box-shadow: 0 3px 20px rgba(0,0,0,.17);
}
h3 ,.or , label{
    color:#747474;
}
.btn-coral{
    background:#EF6060;
    color: white;
}
.btn-register{
    background:#EFEFEF;
    color:#747474;
}
.account {
    background: #CCCCCC;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px;
    gap: 20px;
    align-items: center;
    cursor:pointer;
}
.login_con  {
    color: #707070;
    display: flex;
    width: 100%;
    padding: 15px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}
.search-container {
    background: #D8D8D8;
    padding: 10px;
    display: flex;
    border-radius: 5px;
    margin: 0 auto;
}
</style>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body{
  font-family: 'Kanit', sans-serif!important;
}
input#app_pre {
    opacity: 0;
}
.side-active{
  background: #CCCCCC;
}
#preview_app_list {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
label.app_pre_upload {
    width: 150px;
    height: 150px;
    font-size: 24px;
    background: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
:root{
  --wraper-bg : #EFEFEF ;
  --body-card :#EFEFEF;
  --warper-sidebar:#EFEFEF;
  --card-icon:#98a4c7;
  --black:black;
  --white:#fff;
  --input-text-color:#212529;
  --border-color:#ced4da;
  --card-title-color:rgba(61,68,101,.8);
  --table-hover-bg:rgba(0, 0, 0, 0.075);
  --input-group-text: #eeeeee;
  --sidebar-footer: #eeeeee;
}

@keyframes swing {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(10deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(5deg);
    }
    70% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  
  @keyframes sonar {
    0% {
      transform: scale(0.9);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  body {
    font-size: 0.9rem;
  }
  .page-wrapper .sidebar-wrapper,
  .sidebar-wrapper .sidebar-brand > a,
  .sidebar-wrapper .sidebar-dropdown > a:after,
  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,
  .sidebar-wrapper ul li a img,
  .page-wrapper .page-content,
  .sidebar-wrapper .sidebar-search input.search-menu,
  .sidebar-wrapper .sidebar-search .input-group-text,
  .sidebar-wrapper .sidebar-menu ul li a,
  #show-sidebar,
  #close-sidebar {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  
  /*----------------page-wrapper----------------*/



  .page-wrapper {
    height: 100vh;
  }
  
  
  .page-wrapper .theme {
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 4px;
    margin: 2px;
  }
  .input-group-text{
    display: block!important;
  }
  .page-wrapper .theme.chiller-theme {
    background: #ffffff;
  }
  
  /*----------------toggeled sidebar----------------*/
  
  .page-wrapper.toggled .sidebar-wrapper {
    left: 0px;
  }
  
  @media screen and (min-width: 768px) {
    .page-wrapper.toggled .page-content {
      padding-left: 260px;
    }
  }
  /*----------------show sidebar button----------------*/
  #show-sidebar {
    position: fixed;
    left: 0;
    top: 10px;
    z-index: 999;
    border-radius: 0 4px 4px 0px;
    width: 35px;
    transition-delay: 0.3s;
    padding:10px;
  }

  /*----------------sidebar-wrapper----------------*/
  
  .sidebar-wrapper {
    width: 260px;
    height: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  
  .sidebar-wrapper ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar-wrapper a {
    text-decoration: none;
  }
  
  /*----------------sidebar-content----------------*/
  
  .sidebar-content {
    max-height: calc(100% - 30px);
    height: calc(100% - 30px);
    overflow-y: auto;
    position: relative;
  }
  
  .sidebar-content.desktop {
    overflow-y: hidden;
  }
  
  /*--------------------sidebar-brand----------------------*/
  
  .sidebar-wrapper .sidebar-brand {
    padding: 10px 20px;
    display: flex;
    align-items: center;
  }
  
  .sidebar-wrapper .sidebar-brand > a {
    text-transform: uppercase;
    font-weight: bold;
    flex-grow: 1;
  }
  
  .sidebar-wrapper .sidebar-brand #close-sidebar {
    cursor: pointer;
    font-size: 20px;
  }
  /*--------------------sidebar-header----------------------*/
  
  .sidebar-wrapper .sidebar-header {
    padding:10px;
    margin-top: 20px;
    overflow: hidden;
  }
  .search-container input {
    background: none;
    outline: none;
    border: none;
}
  
  .sidebar-wrapper .sidebar-header .user-pic {
    float: left;
    width: 60px;
    padding: 2px;
    border-radius: 12px;
    margin-right: 15px;
    overflow: hidden;
  }
  
  .sidebar-wrapper .sidebar-header .user-pic img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  
  .sidebar-wrapper .sidebar-header .user-info {
    float: left;
  }
  
  .sidebar-wrapper .sidebar-header .user-info > span {
    display: block;
  }
  
  .sidebar-wrapper .sidebar-header .user-info .user-role {
    font-size: 12px;
  }
  
  .sidebar-wrapper .sidebar-header .user-info .user-status {
    font-size: 11px;
    margin-top: 4px;
  }
  
  .sidebar-wrapper .sidebar-header .user-info .user-status img {
    font-size: 8px;
    margin-right: 4px;
    color: #5cb85c;
  }
  
  /*-----------------------sidebar-search------------------------*/
  
  .sidebar-wrapper .sidebar-search > section {
    padding: 10px 20px;
  }
  
  /*----------------------sidebar-menu-------------------------*/
  
  .sidebar-wrapper .sidebar-menu {
    padding-bottom: 10px;
  }
  
  .sidebar-wrapper .sidebar-menu .header-menu span {
    font-weight: bold;
    font-size: 14px;
    padding: 15px 20px 5px 20px;
    display: inline-block;
  }
  
  .sidebar-wrapper .sidebar-menu ul li a {
    display: inline-block;
    width: 100%;
    color: #707070;
    text-decoration: none;
    position: relative;
    padding: 8px 30px 8px 20px;
  }
  
  .sidebar-wrapper .sidebar-menu ul li a img {
    margin-right: 10px;
    font-size: 12px;
    width: 25px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
  }
  
  .sidebar-wrapper .sidebar-menu ul li a:hover > img::before {
    display: inline-block;
    animation: swing ease-in-out 0.5s 1 alternate;
  }
  
  .sidebar-wrapper .sidebar-menu .sidebar-dropdown > a:after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f105";
    font-style: normal;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: 0 0;
    position: absolute;
    right: 15px;
    top: 14px;
  }
  
  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {
    padding: 5px 0;
  }
  
  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {
    padding-left: 25px;
    font-size: 13px;
  }
  
  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {
    content: "\f111";
    font-family: "Font Awesome 5 Free";
    font-weight: 400;
    font-style: normal;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 10px;
    font-size: 8px;
  }
  
  .sidebar-wrapper .sidebar-menu ul li a span.label,
  .sidebar-wrapper .sidebar-menu ul li a span.badge {
    float: right;
    margin-top: 8px;
    margin-left: 5px;
  }
  
  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,
  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {
    float: right;
    margin-top: 0px;
  }
  
  .sidebar-wrapper .sidebar-menu .sidebar-submenu {
    display: none;
  }
  
  .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a:after {
    transform: rotate(90deg);
    right: 17px;
  }
  
  /*--------------------------side-footer------------------------------*/
  
  .sidebar-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
  }
  
  .sidebar-footer > a {
    flex-grow: 1;
    text-align: center;
    height: 30px;
    line-height: 30px;
    position: relative;
  }
  
  .sidebar-footer > a .notification {
    position: absolute;
    top: 0;
  }
  
  .badge-sonar {
    display: inline-block;
    background: #980303;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    position: absolute;
    top: 0;
  }
  
  .badge-sonar:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid #980303;
    opacity: 0;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    animation: sonar 1.5s infinite;
  }
  
  /*--------------------------page-content-----------------------------*/
  
  .page-wrapper .page-content {
    background: var(--wraper-bg);
    display: inline-block;
    width: 100%;
    height: 100vh;
    padding-left: 0px;
    padding-top: 20px;
    background-attachment: fixed;
}
  /*
  .page-wrapper .page-content > div {
    padding: 20px 40px;
  }*/
  
  .page-wrapper .page-content {
    overflow-x: hidden;
  }
  
  /*------scroll bar---------------------*/
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 7px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #525965;
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #525965;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #525965;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: transparent;
  }
  ::-webkit-scrollbar-track:active {
    background: transparent;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

/** CARD CSS */
.card{
  border: none !important;;
}
.card-header{
  background:none;
  font-size: 24px;
  color:#747474;
  border: none;
}
.card .card-icon i {
    color:#8160EF;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 50%;
      font-size: 3rem;
}
.ml-auto, .mx-auto {
  margin-left: auto!important;
  }
  .card-text .text-right{
    color: var(--black);
  }
  .card .card-title {
  color: var(--card-title-color);
  border-bottom: 1px solid var(--border-color);
  }
  /*-----------------------------chiller-theme-------------------------------------------------*/
  
  .chiller-theme .sidebar-wrapper {
      background:#EFEFEF;
  }
  /*
  .chiller-theme .sidebar-wrapper .sidebar-header,
  .chiller-theme .sidebar-wrapper .sidebar-search,
  .chiller-theme .sidebar-wrapper .sidebar-menu {
      border-top: 1px solid #3a3f48;
  }
  */
  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
  .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {
      border-color: transparent;
      box-shadow: none;
  }
  
  .chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-role,
  .chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-status,
  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
  .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text,
  .chiller-theme .sidebar-wrapper .sidebar-brand>a
  .chiller-theme .sidebar-wrapper .sidebar-menu ul li a,
  .chiller-theme .sidebar-footer>a {
      color: #818896;
  }
  
  .chiller-theme .sidebar-wrapper .sidebar-menu ul li:hover>a,
  .chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active>a,
  .chiller-theme .sidebar-wrapper .sidebar-header .user-info,
  .chiller-theme .sidebar-wrapper .sidebar-brand>a:hover,
  .chiller-theme .sidebar-footer>a:hover i {
      color: #404040;
  }
  
  .page-wrapper.chiller-theme.toggled #close-sidebar {
      color: #bdbdbd;
  }
  
  .page-wrapper.chiller-theme.toggled #close-sidebar:hover {
      color: #ffffff;
  }
  
  .chiller-theme .sidebar-wrapper ul li:hover a img,
  .chiller-theme .sidebar-wrapper .sidebar-dropdown .sidebar-submenu li a:hover:before,
  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu:focus+span,
  .chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active a img {
      color: #16c7ff;
      text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);
  }
  
  .chiller-theme .sidebar-wrapper .sidebar-menu ul li a img,
  .chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown div,
  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
  .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {
      background:var(--input-group-text);
  }
  
  .chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {
      color: #6c7b88;
  }
  
  .chiller-theme .sidebar-footer {
      background: var(--sidebar-footer);
      /*
      box-shadow: 0px -1px 5px #282c33;
      border-top: 1px solid #464a52;
      */
  }
  
  .chiller-theme .sidebar-footer>a:first-child {
      border-left: none;
  }
  
  .chiller-theme .sidebar-footer>a:last-child {
      border-right: none;
  }

#input_search{
  background-color:var(--white)!important;
  border: 1px solid var(--border-color) !important;
  color: var(--input-text-color) !important;
}


.table{
    color:var(--black);
    --bs-table-hover-bg:var(--table-hover-bg)
  }
  span.readed {
    background: #86eac5;
    color:black;
    padding: 7px 10px;
    display: block;
    border-radius: 20px;
  }
  span.un-read {
      background: #ff8787;
      padding: 7px 10px;
      color:black;
      display: block;
      border-radius: 20px;
  }
  span.un-send {
      background: #ffe9ad;
      padding: 7px 10px;
      color:black;
      border-radius: 20px;
      display: block;
  }
  .form-label{
    color: var(--black) !important;
  }
  section.form-check{
    color: var(--black);
  }
  h4.card-text.text-right{
    color: var(--black) ;
  }
  .movie_name_text , .booking_text,.dd-text,h5,.text-x{
    color: var(--black)!important;
  }
  
  div#mini_search {
    z-index: 9999;
    left: 0;
    background: var(--warper-sidebar);
    animation: slidedown .3s 1 ease-in-out;
}

div#mini_search a {
  padding: 15px;
  display: block;
}
div#mini_search .search-span {
  color: var(--black);
  font-size: 10px;
  padding-left: 20px;
  margin-left: 20px;
  border-left: 1px solid gray;
}
a#t1-close {
  color: var(--black);
  text-decoration: none;
  position: absolute;
  right: 20px;
}

@keyframes slidedown{
  from{
      margin-top: -20px;
      opacity: 0;
  }
  to{
      margin-top: 0;
      opacity: 1;
  }
}
</style>

<script>
import $_ from 'jquery'
import axios from 'axios'
export default {
  data(){
      return {
          member:{
            username:'',
            password:''
          },
          login:{
            fname:"f"
          },
          isLogin:localStorage.getItem('isLogin'),
          apps:[],
          apps_data : [],
          regis:{
            fname:'',
            lname:'',
            username:'',
            password:'',
            pic:'',
          },
          download:[],
          search: ''
      }
  },
  created(){
    if(localStorage.getItem('mem_log') == null){
        this.$router.push('/');
      this.login = {
        fname : 'f'
      }
    } else {
      this.login = JSON.parse(localStorage.getItem('mem_log'));
    }
   const downloadAPI = `http://uni-api.app.ruk-com.cloud/api/down/show/${this.$route.params.id}`;
   const AppAPI = `http://uni-api.app.ruk-com.cloud/api/app/`

   axios.get(downloadAPI).then((res)=>{
      this.apps = res.data
      axios.get(AppAPI).then((res)=>{
        this.apps_data = res.data
        for (let i = 0; i < this.apps.length; i++) {
            for (let j = 0; j < this.apps_data.length; j++) {
                if(this.apps[i].app_id == this.apps_data[j]._id){
                  this.download.push(this.apps_data[j])
                }
            }
        }
        
      })
   })
   

    // GET MY PROFILE
    const memberAPI = `http://uni-api.app.ruk-com.cloud/api/edit-member/${this.$route.params.id}`
    axios.get(memberAPI,this.regis).then((res)=>{
        if(res.data != null){
            this.regis = res.data;
        } else{
            this.$swal.fire("ผิดพลาด","ไม่สามารถดึงข้อมูลจาก server ได้" , "error");
        }
    })

  }
  ,
  methods:{
    Download(id,link,name){
        if(this.isLogin == null){
          this.$swal.fire({
            title:"เข้าสู่ระบบ",
            icon:"warning",
            text:"กรุณาเข้าสู่ระบบเพื่อดาวน์โหลดแอปพลิเคชัน",
            confirmButtonText:"เข้าสู่ระบบ",
            cancelButtonText:"ยกเลิก",
            showCancelButton:true
          }).then((res)=>{
              if(res.isConfirmed === true){
                $_('.login_section').toggleClass("show",1000); 
              }
          })
        } else {
            // เช็คว่าเคยดาวน์โหลดแล้วหรือยัง
            const checkAPI = `http://uni-api.app.ruk-com.cloud/api/down/check_down/${this.login._id}/${id}`;
            axios.get(checkAPI).then((data)=>{
              console.log(data.data);
              if(data.data == ""){
                axios.post(`http://uni-api.app.ruk-com.cloud/api/down/download`,{app_id:id,app_name:name,mem_id:this.login._id}).then(()=>{
                  window.open(link);
                })
              } else {
                window.open(link);
              }
            })
        }
    },
    Logout(){
      localStorage.removeItem('mem_log')
      localStorage.removeItem('isLogin')
      if(localStorage.getItem('mem_log') == null && localStorage.getItem('isLogin') == null){
        this.$swal.fire('ออกจากระบบสำเร็จ','คลิกปุ่ม OK เพื่อดำเนินการต่อ','success').then(()=>{
          location.reload();
        })
      }
    },
    close(){
        $_('.edit-container').fadeToggle('show');
    },
    onFilePicked(){
            this.regis.pic = this.$refs.file.files[0].name
            this.upload = this.$refs.file.files[0];
            let reader = new FileReader();
            reader.onload = (e)=>{
                $_('#preview').attr('src',e.target.result);
            }
            reader.readAsDataURL(this.$refs.file.files[0]);
            console.log(this.regis.pic);
        },
       EditUser(){
        const formData = new FormData();
        formData.append('file',this.upload)
        axios.post('http://uni-api.app.ruk-com.cloud/upload_mem',formData).then(()=>{
            const updateAPI = `http://uni-api.app.ruk-com.cloud/api/update-member/${this.$route.params.id}`;
            axios.put(updateAPI,this.regis).then((res)=>{
                if(res.data != null){
                  axios.get(`http://uni-api.app.ruk-com.cloud/api/edit-member/${this.login._id}`).then((update)=>{
                    this.$swal.fire("บันทึกข้อมูลสำเร็จ","คลิก OK เพื่อดำเนินการต่อ","success").then(()=>{
                        localStorage.removeItem('mem_log');
                        localStorage.setItem('mem_log',JSON.stringify(update.data))
                        location.reload();
                    })
                  })
                    
                } else {
                    this.$swal.fire("ดำเนินการไม่สำเร็จ","เกิดข้อผิดพลาด ","error");
                }
            })
        })
    },
    Search(){
      this.$router.push({name:'Search',params:{app_name:this.search}});
    }
  }
}
</script>