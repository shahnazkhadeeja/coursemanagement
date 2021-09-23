const mongoose=require('mongoose');
const config=require('../config/database')


const Schema=mongoose.Schema;
const studentslogin=new Schema({
    name:String,
    email:String,
    password:String,
    
});



var studentlogin=mongoose.model('studentslogin',studentslogin);

module.exports=studentlogin;