<template>
<div class="page-wrapper chiller-theme">
    <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">

            <div class="sidebar-header">
                <div class="user-pic">
                   <img :src="`http://uni-api.app.ruk-com.cloud/profiles/${admin_data.pic}`" alt="">
              
                </div>
                <div class="user-info">
                  <span class="user-name">
                    {{admin_data.fname}} 
                  </span>
                    <span class="user-role">ผู้ดูแลระบบ</span>
                    <span class="user-status">
                <i class="fa fa-circle" style="padding-right: 10px;color: #68bd29;"></i>
                <span>ออนไลน์</span>
            </span>
                </div>
            </div>

            <div class="sidebar-menu">
                <ul>
                   
                    <li class="header-menu">
                            <span>เมนูหลัก</span>
                    </li>
                    <li > 
                        <router-link to="/console/dashboard">
                          <i class="fa fa-tachometer-alt"></i>
                          <span>แดชบอร์ด</span>    
                       </router-link>
                    </li>
                    <li class="sidebar-dropdown">
                        <router-link to="#">
                            <i class="fab fa-app-store-ios"></i>
                            <span>แอปพลิเคชัน</span>

                        </router-link>
                        <div class="sidebar-submenu">
                            <ul>
                                
                                <li>
                                    <router-link to="/console/app/view_app">แอปพลิเคชันทั้งหมด</router-link>
                                </li>
                                <li>
                                    <router-link to="/console/app/add_app">เพิ่มแอปพลิเคชัน</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="sidebar-dropdown">
                        <router-link to="#">
                            <i class="fas fa-user"></i>
                            <span>ผู้ใช้</span>
                        </router-link>
                        <div class="sidebar-submenu">
                            <ul>
                                <li>
                                    <router-link to="/console/user/view_user">ผู้ใช้ทั้งหมด</router-link>
                                </li>
                                <li>
                                    <router-link to="/console/user/add_user">เพิ่มผู้ใช้</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li >
                        <router-link to="/console/download">
                          <i class="fas fa-download"></i>
                          <span>จำนวนดาวน์โหลด</span>
                        </router-link>
                    </li>
                    <li>
                      <router-link to="/console/editme">
                      <i class="fas fa-user-cog"></i>
                        <span>แก้ไขข้อมูลส่วนตัว</span>
                      </router-link>
                    </li>
                </ul>
            </div>
            <!-- sidebar-menu  -->
        </div>
        <div class="sidebar-footer">
            <div class="w-100 d-flex justify-content-center p-2" style="cursor:pointer;" @click="Logout">
                <i class="fa fa-power-off"></i>
            </div>
        </div>
    </nav>
    <main class="page-content" style="padding-left:260px">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    แก้ไขข้อมูลผู้ใช้
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="formSubmit" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-12 mb-3 d-flex justify-content-center">
                                      <img id="preview" :src="'http://uni-api.app.ruk-com.cloud/profiles/' + member.pic" alt="" style="width:150px">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label" for="app_name">ชื่อจริง</label>
                                        <input type="text" class="form-control" v-model="member.fname">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label" for="des">นามสกุล</label>
                                        <input type="text" class="form-control" v-model="member.lname">
                                        
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label" for="category">ชื่อผู้ใช้</label>
                                        <input type="text" class="form-control" v-model="member.username">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label" for="dev">รหัสผ่าน</label>
                                        <input type="password" v-model="member.password" class="form-control">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label" for="dev">แก้ไขสถานะ</label>
                                        <select v-model="member.isAdmin" class="form-select">   
                                            <option :value="false">ผู้ใช้ทั่วไป</option>
                                            <option :value="true">ผู้ดูแลระบบ</option>
                                        </select>
                                    </div>
                                    <div class="col-12 mb-3">
                                      <label for="form-label" class="form-label">แก้ไขรูปภาพ</label>
                                      <input type="file" @change="preview()" name="file" id="file" ref="file" class="form-control">
                                    </div>
                                    
                                    <div class="col-md-12 d-flex justify-content-end mb-5">
                                        <button class="btn btn-success">บันทึกข้อมูล</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    
                  </div>
                </div>
            </div>
          </div>
        </div>
    </main>
</div>    
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body{
  font-family: 'Kanit', sans-serif!important;
}
input#app_pre {
    opacity: 0;
}
#preview_app_list {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
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
  .sidebar-wrapper ul li a i,
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
    padding: 20px;
        margin-top: 105px;

    overflow: hidden;
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
  
  .sidebar-wrapper .sidebar-header .user-info .user-status i {
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
  
  .sidebar-wrapper .sidebar-menu ul li a i {
    margin-right: 10px;
    font-size: 12px;
    width: 25px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
  }
  
  .sidebar-wrapper .sidebar-menu ul li a:hover > i::before {
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
      background:white;
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
  
  .chiller-theme .sidebar-wrapper ul li:hover a i,
  .chiller-theme .sidebar-wrapper .sidebar-dropdown .sidebar-submenu li a:hover:before,
  .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu:focus+span,
  .chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active a i {
      color: #16c7ff;
      text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);
  }
  
  .chiller-theme .sidebar-wrapper .sidebar-menu ul li a i,
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

import $ from 'jquery'
import axios from 'axios';

export default {
    data(){
        return {
            admin_data : JSON.parse(localStorage.getItem('logged')),
            member:{},
            upload:''
        }
    },
    created(){
        let session = localStorage.getItem('logged')
        if(session == ""){
            this.$router.push('/console');
        }

        const apiURL = `http://uni-api.app.ruk-com.cloud/api/edit-member/${this.$route.params.id}`;
        axios.get(apiURL).then(res=>{
            this.member = res.data
           
        })
       
    },
    mounted(){
        $(".sidebar-dropdown > a").click(function() {
            $(".sidebar-submenu").slideUp(200);
            if (
            $(this)
                .parent()
                .hasClass("active")
            ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
            } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
            }
        });
    
        $("#close-sidebar").click(function() {
            $(".page-wrapper").removeClass("toggled");
        });
        $("#show-sidebar").click(function() {
            $(".page-wrapper").addClass("toggled");
        });
    },
    methods:{
      preview(){
        this.member.pic = this.$refs.file.files[0].name
        this.upload = this.$refs.file.files[0];
        let reader = new FileReader();
        reader.onload = (e)=>{
            $('#preview').attr('src',e.target.result);
        }
        reader.readAsDataURL(this.$refs.file.files[0]);
        console.log(this.regis.pic);
        },

        formSubmit(){
            const updateAPI = `http://uni-api.app.ruk-com.cloud/api/update-member/${this.member._id}`;
            const formData = new FormData();
            formData.append('file',this.upload)

            axios.post(`http://uni-api.app.ruk-com.cloud/upload_mem`,formData).then(()=>{
              axios.put(updateAPI,this.member).then((res)=>{
                if(res.data != null){
                    this.$swal("บันทึกข้อมูลสำเร็จ","คลิก OK เพื่อดำเนินการต่อ","success").then(()=>{
                        if(res.data.isAdmin){
                           localStorage.setItem('logged',this.res.data);

                        }
                        location.reload();
                    })
                } else {
                    this.$swal("ดำเนินการไม่สำเร็จ","เกิดข้อผิดพลาด ","error");
                }
              })
            })
        },
        Logout(){
            localStorage.removeItem('logged')
            if(localStorage.getItem('logged') == null){
              this.$swal("ออกจากระบบสำเร็จ",'คลิกปุ่ม OK เพื่อดำเนินการต่อ','success').then(()=>{
                  this.$router.push('/console')
              })
            }
        }
    }
}

</script>
