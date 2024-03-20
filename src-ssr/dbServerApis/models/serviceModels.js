import { mongoose } from "mongoose";
import { saleitDBs } from "../dbConns";
import { saleitSchema } from "../schemas/serviceSchema";
import { saleitMetaSchema } from "../schemas/serviceSchema";
//import { accComputing } from "../../services/accessComputing"
// initialize the connections on boots...
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

mongoose.set("strictQuery", true);

//-------
var todday = () => new Date().toLocaleDateString();

//------------------------------empy Schema

let _saleit = new Schema(
  saleitSchema,
  { timestamps: todday }
);

_saleit.method("toJSON",  function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;

  object.updatedAt= object.updatedAt.toLocaleString()

  //is_user // root,regAdmin,[status_controller]
  //object.accprivileges = await accComputing();
  //enum datatype require exactselections options..but other Number/String could handle null,undefined values
  //but takecare enum values and numbers(which has to be used in computing_equations( w/c shouldn't be null/undefined))
  //object.department.role= nul.includes(object.department.role) ? "" : object.department.role
  // object.department.role= nul.includes(object.department.mainRole) ? "" : object.department.mainRole
  //---------------

  return object;
});

//------------------------------Attendance Schema
let _saleitMeta = new Schema(
  saleitMetaSchema,
  { timestamps: todday }
);
_saleitMeta.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;

  object.updatedAt=object.updatedAt.toLocaleDateString()
  object.date=object.date.toLocaleDateString()

  return object;
});

//------------------------------comment Schema

//----------------------modeling Schemass  // it would check if model/Document exists or create new Docs.
var saleitModel;
//console.log('is empyModel Exist',Object.keys(procDBs.model.empy))
if (saleitDBs.model.saleitModel) {
  console.log("sale it Collections already existed on saleit content");
} else {
  saleitModel = saleitDBs.model("saleit _Content", _saleit);
}
//-----
var saleitMetaModel;
//console.log('is empyModel Exist',Object.keys(procDBs.model.empy))
if (saleitDBs.model.reportModel) {
  console.log("sale it Collections already existed on saleit content");
} else {
  reportModel = saleitDBs.model("saleit _Meta", _saleitMeta);
}

//-------------------- exporting schemas

export {
  saleitModel,
  saleitMetaModel,
}; //,rawModel,supplierModel };
