import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import CraeteMember from "@/components/api_test/CreateMember.vue";
import ViewMember from "@/components/api_test/ViewMember.vue";
import ViewApp from "@/components/ViewApp.vue"
import ViewCat from "@/components/ViewCat.vue"
import Account from "@/components/Account.vue";
import Search from "@/components/Search.vue";

/** Admin Route */
import AdminLogin from "@/components/admin/Login.vue";
import Dashboard from "@/components/admin/Dashboard.vue";
import AddApp from "@/components/admin/AddApp.vue";
import AllApp from "@/components/admin/AllApp.vue";
import EditApp from "@/components/admin/EditApp.vue";
import ViewUser from "@/components/admin/ViewUser.vue";
import AddUser from "@/components/admin/AddUser.vue";
import EditUser from "@/components/admin/EditUser.vue";
import Download from "@/components/admin/Download.vue"
import EditAdmin from "@/components/admin/EditAdmin.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
  ,
  {
    path:"/account/:id",
    name:"Account",
    component:Account
  }
  ,
  {
    path:"/search/:app_name",
    name:"Search",
    component:Search
  },

  {
    path:"/app/view/:id",
    name:"ViewApp",
    component:ViewApp
  },
  {
    path:"/api/create",
    name:"createmember",
    component:CraeteMember,
  },
  {
    path:"/view",
    name:"viewmember",
    component:ViewMember,
  },
  {
    path:"/console",
    name:"AdminLogin",
    component:AdminLogin
  },
  {
    path:"/console/dashboard",
    name:"Dashboard",
    component:Dashboard
  }
  ,
  {
    path:"/app/cat/:category",
    name:"ViewCat",
    component:ViewCat
  }
  ,
  {
    path:"/console/app/view_app",
    name:"AllApp",
    component:AllApp
  }
  ,
  {
    path:"/console/app/add_app",
    name:"AddApp",
    component:AddApp
  }
  ,
  {
    path:"/console/app/edit_app/:id",
    name:"EditApp",
    component:EditApp
  }
  ,{
    path:"/console/user/add_user",
    name:"AddUser",
    component:AddUser
  },{
    path:"/console/user/view_user",
    name:"ViewUser",
    component:ViewUser
  },{
    path:"/console/user/edit_user/:id",
    name:"EditUser",
    component:EditUser
  }
  ,
  {
    path:"/console/download",
    name:"Download",
    component:Download
  }
  ,{
    path:"/console/editme",
    name:"EditAdmin",
    component:EditAdmin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;