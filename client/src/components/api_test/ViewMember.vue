<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1>Show Member Data</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr align=center>
                                <th>ชื่อจริง</th>
                                <th>นามสกุล</th>
                                <th>ชื่อผู้ใช้</th>
                                <th>สร้างเมื่อวันที่</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="member in Members" :key="member._id">
                                <td>{{member.fname}}</td>
                                <td>{{member.lname}}</td>
                                <td>{{member.username}}</td>
                                <td>{{member.createon}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            Members : []
        }
    },
    created(){
        let apiURL ="http://uni-api.app.ruk-com.cloud/api";
        axios.get(apiURL).then(res=>{
            this.Members = res.data
        }).catch(error=>{
            console.log(error);
        })
    },
    methos:{
        delMember(id){
            let apiURL =`http://uni-api.app.ruk-com.cloud/api/del-member/${id}`;
            let indexOfArrayItem = this.Members.findIndex(i=>i._id === id);
            
            if(window.confirm("ต้องการลบข้อมูลใช่หรือไม่")){
                axios.delete(apiURL).then(()=>{
                    this.Members.splice(indexOfArrayItem,1)
                }).catch(error=>{
                    console.log(error);
                })
            }
        }
    }
}
</script>