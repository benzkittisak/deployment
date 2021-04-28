<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h1>สร้างผู้ใช้</h1>
        </div> 
        <form @submit.prevent="submitForm">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="fname">First Name</label>
                        <input type="text" v-model="member.name" required class="form-control">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="fname">Last Name</label>
                        <input type="text" v-model="member.lname" required class="form-control">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="username">username</label>
                        <input type="text" v-model="member.username" required class="form-control">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input type="Password" v-model="member.password" required class="form-control">
                    </div>
                </div>
                <div class="col-md-12">
                    <button class="btn btn-primary">บันทึกข้อมูล</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
        member:{
            fname:'',
            lname:'',
            username:'',
            password:''
        
        }
    }
  },

  methods:{
    
    submitForm(){
        let apiURL = 'http://uni-api.app.ruk-com.cloud/api/create-member';

        axios.post(apiURL,this.member).then(()=>{
            this.$router.push('/view');
            this.member = {
                fname:'',
                lname:'',
                username:'',
                password:''
            }
        }).catch(err=>{
            console.log(err);
        })
    }
  }
}
</script>