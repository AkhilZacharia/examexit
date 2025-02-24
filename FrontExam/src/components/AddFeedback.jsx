import React, { useState } from 'react'
import { Button, TextField} from '@mui/material';
import axios from "axios";
import { useLocation } from 'react-router-dom';
const AddFeedback = () => {
    const [form, setForm] = useState({
        courseName: '',
        courseDuration:'',
        feedbackComments:'',
        feedbackRating:0,
      });

    const submitfeed = ()=>{
        axios.post('http://localhost:3000/addfeedback',form)
        .then((res) => {
          alert(res.data.message);
        })
    }

    const location = useLocation();
    const [booking, setBooking] = useState(location.state); 

  return (
    <div>AddFeedback:  Add Feedback form must be displayed with following fields.(Course Name, Feedback comments, Feedback rating)

        <div className="container text-center">
        <div className="row align-items-start">
           <h1>Add Feedback</h1>
        </div>&nbsp;
        <div className="row">
            <div className="col">
            <TextField
                label="Course Name"
                name="courseName"
                type="text"
                required
                fullWidth
                onChange={(e) => setForm({ ...form, courseName: e.target.value })}
                className="formfield"
              />
            </div>
            <div className="col">
            <TextField
                label="Course Duration"
                name="courseDuration"
                type="text"
                required
                fullWidth
                onChange={(e) => setForm({ ...form, courseDuration: e.target.value })}
                className="formfield"
              />
            </div>
            <div className="col">
                <TextField label="Rating" name="feedbackRating" type="number" onChange={(e) => setForm({ ...form, feedbackRating: e.target.value })} required/>
            </div>
        </div>&nbsp;
        <div className="row">
        <TextField label="Feedback comments" multiline rows={4} name="feedbackComments" onChange={(e) => setForm({ ...form, feedbackComments: e.target.value })} required/>
        </div>&nbsp;
        <div className="row">
        <Button variant="contained" color="primary" fullWidth onClick={() => submitfeed()} >
              Add Feedback
        </Button>
        </div>
        </div>
    </div>
  )
}

export default AddFeedback