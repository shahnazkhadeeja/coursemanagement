const mongoose=require('mongoose');
const confiq=require('../config/database')
// mongoose.connect(confiq.database);

const Schema=mongoose.Schema;
const course=new Schema({
    title:String,
    description:String,
    venue:String,
    duration:String,
    startdate:String,
    enddate:String
});



var coursedata=mongoose.model('coursedata',course);

module.exports=coursedata;