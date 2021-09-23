const mongoose=require('mongoose');
const confiq=require('../config/database')
// mongoose.connect(confiq.database);

const Schema=mongoose.Schema;
const Professorschema=new Schema({
    name:String,
    email:String,
    password:String,
    qualification:String,
    experience:String
});



var Professordata=mongoose.model('professordata',Professorschema);

module.exports=Professordata;