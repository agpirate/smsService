
//import user3A from "src/hooks/user3A";
//var todday = () => Math.floor(Date.now() / 1000);
var todday = () => new Date().toLocaleString();//.split("T")[0];
var ObjectID =""
//-------------USER PROFILE_Variables..
const questionariesSchema = {
  //-------------item_staus(stage)
  //-------
  userID: { // will hold User_ID/phone as ref_value
    type: String,vtype:"String",
    default: "",
    $ifNull: "",
  },
  answere: { // will hold User_ID/phone as ref_value
    type: String,vtype:"String",
    default: "",
    $ifNull: "",
  },
  prefixCode: { // will hold User_ID/phone as ref_value
    type: String,vtype:"String",
    default: "",
    $ifNull: "",
  },  
  affixCode: { // will hold User_ID/phone as ref_value
    type: String,vtype:"String",
    default: "",
    $ifNull: "",
  },
  schedule: { // will hold User_ID/phone as ref_value
    type: Date,vtype:"Date",
    default: "",
    $ifNull: "",
  },  
    //---------------------------------
  }

const pollsSchema = {
    //-------------item_staus(stage)
    //-------
    userID: { // will hold User_ID/phone as ref_value
      type: String,vtype:"String",
      default: "",
      $ifNull: "",
    },
    contestants:{
      type:Array,
      default:[{
        paymentMethod:"cash",receiptNo:"",supplierID:""
      }],
      vdata:  {
          fullName:{
            type: String,vtype:"String",
            default: "",
            $ifNull: "",
          },
          cover:{
            type: String,vtype:"String",
            default: "",
            $ifNull: "",
          },
          age:{
            type: String,vtype:"String",
            default: "",
            $ifNull: "",
          },
          contestantID:{
            type: String,vtype:"String",
            default: "",
            $ifNull: "",
          },
          score:{
            type: String,vtype:"String",
            default: "",
            $ifNull: "",
          },
      }
    },
    prefixCode: { // will hold User_ID/phone as ref_value
      type: String,vtype:"String",
      default: "",
      $ifNull: "",
    },
    schedule: { // will hold User_ID/phone as ref_value
      type: Date,vtype:"Date",
      default: "",
      $ifNull: "",
    },    
    winnerID: { // will hold User_ID/phone as ref_value
      type: String,vtype:"String",
      default: "",
      $ifNull: "",
    },  
      //---------------------------------
    }

const feedbacksSchema = {
      //-------------item_staus(stage)
      //-------
      userID: { // will hold User_ID/phone as ref_value
        type: String,vtype:"String",
        default: "",
        $ifNull: "",
      },
      audiences:{
        type:Array,
        default:[{
          phone:"cash",content:"",date:new Date()
        }],
        vdata:  {
          phone:{
              type: String,vtype:"String",
              default: "",
              $ifNull: "",
            },
            content:{
              type: String,vtype:"String",
              default: "",
              $ifNull: "",
            },
            date:{
              type: String,vtype:"String",
              default: "",
              $ifNull: "",
            },
        }
      },
      prefixCode: { // will hold User_ID/phone as ref_value
        type: String,vtype:"String",
        default: "",
        $ifNull: "",
      },
      affixCode: { // will hold User_ID/phone as ref_value
        type: String,vtype:"String",
        default: "",
        $ifNull: "",
      },
      descriptions: { // will hold User_ID/phone as ref_value
        type: Date,vtype:"Date",
        default: "",
        $ifNull: "",
      }
        //---------------------------------
      }
  


export { questionariesSchema,pollsSchema,feedbacksSchema }