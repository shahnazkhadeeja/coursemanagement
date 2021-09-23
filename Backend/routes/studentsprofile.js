const express=require('express')
const router=express.Router();
const studentschema=require('../models/students');
const jwt=require('jsonwebtoken');
let bcrypt = require('bcrypt');

const saltRounds = 10;

 
router.get('/studentprofile/:email',(req,res)=>{
    useremail=req.params.email;
    studentschema.findOne({email:useremail})
    .then(data=>{
        res.send(data)
    })
})

function checkemail(req,res,next){
    email = req.body.student.email;
    studentschema.findOne({email:email})
    .then(data=>{
        if(data){
            res.status(401).send("email already exist")
        }else{
            next()
        }
    })
}

router.post('/signup',checkemail,(req,res)=>{
    const hash = bcrypt.hashSync(req.body.student.password, saltRounds);
      console.log(req.body);
        var Student = {       
            name:req.body.student.uname,
            email : req.body.student.email,
            password : hash
       }       
       var data = new studentschema(Student);
       data.save();
       res.json("signup success")     

    });
          
  

function checkuser(req,res, next){
    useremail=req.body.email;
    userpassword=req.body.password;
   
    studentschema.findOne({email:useremail})
  .then(function(data){
      if(data){
  result= bcrypt.compareSync(userpassword, data.password);
        if(result==true){
            console.log("true");
           next()
        }else{
            res.status(401).send("inavlid login attempt")
        }
    }else{
        res.status(401).send("inavlid login attempt")
    }
    });
    
}

router.post('/login', checkuser,(req,res)=>{
    email=req.body.email;
    password=req.body.password;
    let payload = {subject: email+password}
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({token})
})



module.exports=router;