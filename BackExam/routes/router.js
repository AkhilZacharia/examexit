const express = require('express');
const router = express.Router(); 
router.use(express.json());
const courseModel = require('../model/courseData');
const feedbackModel = require('../model/feedbackData');



router.get('/courses',async (req,res)=>{ 
  try{

  const courses = await courseModel.find();
//   const UserUn = await userModel.find({approved:false});
   console.log(courses);
  
  res.status(200).send(courses);
  } catch (error){
    res.send({message:'courses not found'});
  }
});

router.get('/feedbacks',async (req,res)=>{ 
    try{
  
    const feedbacks = await feedbackModel.find();
  //   const UserUn = await userModel.find({approved:false});
     console.log(feedbacks);
    
    res.status(200).send(feedbacks);
    } catch (error){
      res.send({message:'courses not found'});
    }
  });

router.post('/addfeedback',async (req,res)=>{ 
     console.log(req.body);
        try{
        const item = req.body;
        const data = new courseModel(data);
                await counterdata.save();
        res.status(200).send({message:'Added'});
        } catch (error) {
        res.status(404).send({message:'Add Unsuccessful'});
        }
  });

// router.put('/select-course/:id',async (req,res)=>{ 
//   try{
    
//   const Event = await userModel.findByIdAndUpdate(req.params.id,{approved:true});
//   console.log(Event);
  
//   res.status(200).send({message:'Success'});
//   } catch (error){
//     res.send({message:' not found'});
//   }
// });

router.put('/edit/:id', async (req, res) => {
    try {
      const eventdata = await courseModel.findByIdAndUpdate(req.params.id, req.body);
      res.send({message:'updated'});
    } catch (error) {
      res.send('Course not found');
    }
  });

router.delete('/delete/:id',async (req, res) => {
  try {
    const eventdata = await courseModel.findByIdAndDelete(req.params.id);
    res.send({message:'Deleted'})
  } catch (error) {
    res.status(404).send({message:'Delete Unsuccessful'});
  }
});

module.exports = router;