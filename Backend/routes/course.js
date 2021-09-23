const express=require('express');
const router = express.Router();
const courseschema=require('../models/course')

router.get('/',(req,res)=>{
 courseschema.find()
 .then(function(data)
 {
     res.send(data);
 })
})

router.post('/add',(req,res)=>{
    var course = {       
        title:req.body.course.title,
        description:req.body.course.description,
        venue:req.body.course.venue,
        duration:req.body.course.duration,
        startdate:req.body.course.startdate,
        enddate:req.body.course.enddate
   }       
   var data = new courseschema(course);
   data.save();
   console.log('saved')
})

// router.get('/update',(req,res)=>{
//     res.send('update the course details')
// })

// router.get('/delete',(req,res)=>{
//     res.send('delete the course details')
// })

module.exports=router;