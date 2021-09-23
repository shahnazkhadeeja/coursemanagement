const mongoose=require('mongoose');
const confiq=require('../config/database')
// mongoose.connect(confiq.database);

const Schema=mongoose.Schema;
const studentform=new Schema({
    name:String,
    lastname:String,
    qulification:String,
    dob:String,
    address:String,
    course:String,
    email:String,
    status:String
});



var formdata=mongoose.model('formdata',studentform);

module.exports=formdata;