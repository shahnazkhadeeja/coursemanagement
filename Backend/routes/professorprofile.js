const express=require('express');
const router=express.Router();
const Professorsdata=require('../models/professor')
const jwt=require('jsonwebtoken')
let bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/',(req,res)=>{
    res.send('welcome user')
})

function checkemail(req,res,next){
    email = req.body.professor.email;
    Professorsdata.findOne({email:email})
    .then(data=>{
        if(data){
            res.status(401).send("email already exist")
        }else{
            next()
        }
    })
}

router.post('/signup',checkemail,(req,res)=>{
    const hash = bcrypt.hashSync(req.body.professor.password, saltRounds);
   
    var Professor = {       
        name : req.body.professor.uname,
        email : req.body.professor.email,
        qualification : req.body.professor.qualification,
        experience : req.body.professor.experience,
        password :hash
   }       
   var data = new Professorsdata(Professor);
   data.save();
   console.log('saved')
   res.send();
})

router.get('/profile/:email',(req,res)=>{
    useremail=req.params.email;
    Professorsdata.findOne({email:useremail})
    .then(data=>{
        res.send(data)
    })
})

function checkuser(req,res, next){
    useremail=req.body.email;
    userpassword=req.body.password;
    Professorsdata.findOne({email:useremail})
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
  })
}


router.post('/login',checkuser,(req,res)=>{
    useremail=req.body.email;
    userpassword=req.body.password;
    let payload = {subject: useremail+userpassword}
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({token})  
})


module.exports=router;