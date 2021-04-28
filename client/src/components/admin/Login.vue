<template>
<span v-show="isTrue">asdasd</span>
    <div id="form-login" class="d-flex justify-content-center align-items-center">
        <form @submit.prevent="Login">
            <div class="form-container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-center">
                            <div class="form-img p-3">
                                <img src="../../assets/logo/ionic-ios-contact.svg" alt="">
                            </div>
                        </div>
                        <div class="col-md-12 p-3 mb-4 text-center">
                            <h3>เข้าสู่ระบบ</h3>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div class="form-gruop">
                                <input type="text" v-model="username" placeholder="Username" required class="form-control">
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div class="form-gruop">
                                <input type="password" v-model="password" placeholder="Password" required class="form-control">
                            </div>
                        </div>
                        <div class="col-md-12 mb-4">
                            <div class="form-gruop">
                                <button type="submit" class="btn btn-violet form-control"> เข้าสู่ระบบ </button>
                            </div>
                        </div>
                        
                    </div>
             </div>  
            </div>
        </form>
    </div>
</template>
<style scoped>
#form-login{
    background:url('../../assets/admin-form-login.png');
    width: 100%;
    height:100vh;
}
.form-container{
    background:white;
    padding:25px 50px;
    border-radius: 10px;
    width:500px;
    box-shadow: 0 3px 20px rgba(0,0,0,.17);
}
h3 ,.or , label{
    color:#747474;
}
.btn-violet{
    background:#8160EF;
    color: white;
}
.btn-register{
    background:#EFEFEF;
    color:#747474;
}
</style>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            
            member:{
                username:'',
                password:''
            },
            isTrue:false
        }
    },
    methods:{
        Login(){
            const apiURL = `http://uni-api.app.ruk-com.cloud/api/login/${this.username}/${this.password}`
            axios.post(apiURL,this.member).then((res)=>{
                if(res.data != null){
                    if(res.data.isAdmin){
                        localStorage.setItem('logged',JSON.stringify(res.data));
                        if(localStorage.getItem('logged')!= null || localStorage.getItem('logged')!= undefined){
                            this.$swal("เข้าสู่ระบบสำเร็จ","ยินดีต้อนรับเข้าสู่ระบบ Admin", "success").then(()=>{
                                this.$router.push('/console/dashboard')
                        })
                    }
                    } else {
                        this.$swal("ผิดพลาด","กรุณาเข้าสู่ระบบด้วยบัญชีผู้ดูแล","error")
                    }
                } else {
                    this.$swal("ผิดพลาด","กรุณากรอกข้อมูลให้ถูกต้อง","error")
                }
            })
        }
    },
    created(){
        let session = localStorage.getItem('logged')
        if(session != null){
            this.$router.push('/console/dashboard');
        }
    }
}
</script>