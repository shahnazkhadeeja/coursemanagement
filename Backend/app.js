const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const confiq=require('./config/database')
const nodemailer=require('nodemailer')

mongoose.connect(confiq.database);

mongoose.connection.on('connected', ()=>{
    console.log('connected to database'+confiq.database)
})

mongoose.connection.on('error', (err)=>{
    console.log(' database error'+err)
})


var app=new express();
const port=3000;

const users=require('./routes/studentsprofile');
const student=require('./routes/students');
const course=require('./routes/course')
const professor=require('./routes/professorprofile')


app.use(cors());
app.use(bodyparser.json());


app.use('/users',users)
app.use('/students',student);
app.use('/course',course);
app.use('/professor',professor)

app.get('/', (req,res)=>{
    res.send('invalid output')
})

app.listen(port,function(){
    console.log('server listen on port '+port);
})