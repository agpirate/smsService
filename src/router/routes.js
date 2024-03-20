
import accetype from "src/composables/profileSchemas"

//employee-attendance-quesPage-rawmaterial-goods-supplier-customer-monpay-mispay-statment
//Data Tunneling Methods(b/n client and cient_app ..as of two way communications)
//1] query
//2] params
//3] url

//--------------- holding wall_Data of each routes (permissions and required queries and parametsr or other data)
//meta .......holds all rules and required_datas
const nul = [null, undefined, false, "", [], {}];

const routes = [
  {
    //Dashboard Pages....  //the routes params/meta key:value pair should be matching with income(to.meta.(key:values))
    path: "/service",
    component: () => import("layouts/serviceLayout.vue"),
    
    children: [
      //----------------------
      { 
      path: "quesPage", component: () => import("pages/authenticated/quesPagePage.vue"),
      meta: {
          _isauthenticated: true,
          _accetype:accetype['quesPage'],
      },
      name:"quesPage",
     },
    ],
  },
    //HomePage.....Admin(root),RegisterEmployee & Blog_Page
  {
    path: "/user",
    component: () => import("layouts/dashboardLayout.vue"),
    children: [
      { path: "root", 
      component: () => import("pages/authenticated/adminPage.vue"),
      meta: {
        _isauthenticated: true,
        _accetype:accetype['root'],
    } 
  },
    ],
  },
      //Login_page -Below
  {
    path: "/",
    component: () => import("layouts/signLayout.vue"),
    children: [
      { path: "", name:"login",component: () => import("pages/signinPage.vue"),
      meta: {
        _isauthenticated: false,
    } },

    ],
  },

  {
    path: "/:catchAll(.*)*",
    //name:'errorPage',
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;


