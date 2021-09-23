const express=require('express');
const router=express.Router();
const formdata=require('../models/studentform')
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer')

router.post('/register',(req,res)=>{
    var studentform = {       
        name:req.body.form.name,
       lastname :req.body.form.lastname,
        dob:req.body.form.dob,
        address:req.body.form.address,
        qulification:req.body.form.qulification,
        course:req.body.form.course,
        email:req.body.form.email,
        status:null
    }       
   var data = new formdata(studentform);
   data.save();
   console.log('saved')
   
   
})

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')     }
    req.userId = payload.subject
    next()}

router.put('/reject',verifyToken,(req,res)=>{
    id=req.body._id,
  
    formdata.findByIdAndUpdate({"_id":id},
                                 {$set:{"status" : "rejected",
                                 }})
    .then(function(){
        
        res.send();
    })
    

})

function checklimit(req,res,next){
    const course=req.body.course;
    formdata.count({"course":course,"status":"accepted"})
    .then(data=>{
       
        if(data<=40){
            
            res.send();
            next();
        }else{
            res.status(401).send('sorry..over the limit')
        }
      
    })
    
}

router.put('/update',verifyToken,checklimit,(req,res)=>{
    // console.log(req.body)
    id=req.body._id,
  
   formdata.findByIdAndUpdate({"_id":id},
                                {$set:{"status" : "accepted",
                                }})
   .then(function(){
       
       res.send();
   })
   
})

router.get('/',(req,res)=>{
   formdata.find({"status":null})
   .then(data=>{
       res.send(data)
   })

})

router.get('/acceptedlist',(req,res)=>{
    const accept="accepted"
    formdata.find({status: accept})
    .then(data=>{
        
        res.send(data)
    //    console.log('data send')
    })
})


router.post('/sendmail',(req,res)=>{
    
    const course=req.body.course;
    
    const accept="accepted"
    formdata.find({course:course,status:accept}, function(err, allUsers){
        if(err){
            console.log(err);
        }
        var mailList = [];
        allUsers.forEach(function(users){
            mailList.push(users.email);
            return mailList;
        });
        var smtpTransport = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                user: 'mailfromResumeBuilder@gmail.com',
                pass: "xeknaduiwqpnudgm"
                //password
            }
        });
        var mailOptions = {
                to: [],
                bcc: mailList,
                from: 'CourseManager2309@gmail.com',
                subject: 'Form Accepted',
                html: '<h1>Congratulations..! </h1> \n<h4> This mail is sent from the course management system. Your application has been Accepted.We’d love to invite you to our Orientation. Dates and times will send you in another email shortly. It’s a great opportunity to meet our instructors and other students. You can learn more about what this program will be like and ask any questions you have.</h4>'
            };
            smtpTransport.sendMail(mailOptions, function(err) {
                if(err){
                    // console.log(err);
                    res.status(401).send( "We seem to be experiencing issues. Please try again later.");
                    // res.redirect("/");
                }else{
                    res.send()
                console.log('mail sent to ' + mailList);
                }
            });
    });
})

module.exports=router;