
//import _acctype from "src/hooks/_acctype";
//var todday = () => Math.floor(Date.now() / 1000);
var todday = () => new Date().toLocaleDateString();//.split("T")[0];

//{'profileMeta':'client','profile':'client','saleit':'client'}
const _acctype ={
  profile: {
    type: String,
    vtype: "String",
     default: "",
     enum: ["admin","creator",""],
   },
   questionaries: {
    type: String,
    vtype: "String",
     default: "",
     enum: ["creator","admin",""],
   },

   feedbacks: {
    type: String,
    vtype: "String",
     default: "",
     enum: ["creator","admin",""],
   },

   polls: {
    type: String,
    vtype: "String",
     default: "",
     enum: ["creator","admin",""],
   },

   //------
   audiences: {
    type: String,
    vtype: "String",
     default: "",
     enum: ["creator","admin",""],
   }


}

//-------------USER profileSchema_Variables..
//--profileSchema shema

const profileSchema = {

  profile: { type: String,vtype:'file',default: "/profile/profilejpeg.jpeg" },
  cover: {
    type:String,
    vtype:'file',
    default:'/cover/itService.jpg',
    contentType: "String",
  },

  userName: {
    type: String,Vtype:"String",

       default: "",
       $ifNull: "",
       //required: true,
       //index: { unique: true, dropDups: true },
     },

  userID: {
    type: String,Vtype:"String",

      default: "xyxyx",
      $ifNull: "",
      //required: true,
      //index: { unique: true, dropDups: true },
    },

    name: {
      type: String,Vtype:"String",

       default: "",
       $ifNull: "",
       //required: true,
       //index: { unique: true, dropDups: true },
       //---
       validRuleset:"[ val => val && val.length > 0 || 'Please type something']"
     },
     
   lastName: {
    type: String,Vtype:"String",

       default: "",
       $ifNull: "",
       //required: true,
       //index: { unique: true, dropDups: true },
 
     },
//--------------------------------
acctype: _acctype,
//---------------------------------
//profileCompute,
  
  }
  
const audienceSchema = {
  
    phone: {
        type: String,Vtype:"String",
  
        default: "xyxyx",
        $ifNull: "",
        //required: true,
        //index: { unique: true, dropDups: true },
      },  
      participations: { //it hold list of received id by the phone#
        type: Array,
        Vtype:"Array",  
         default:[],
         $ifNull: [],
       },
    
    }

  
  export { profileSchema,audienceSchema,_acctype}



