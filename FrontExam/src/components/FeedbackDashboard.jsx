import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

const FeedbackDashboard = () => {
    const [courses, setCourses] = useState([]); 
    const navigate = useNavigate();
    useEffect(() => {
        fetchCourses();
      }, []);
    
      const fetchCourses = async () => {
        try {
          const response = await axios.get('http://localhost:3000/courses');
          const courses = response.data;
          console.log(courses);
          setCourses(courses); 
        } catch (error) {
          console.error('Error fetching Courses:', error);
        }
      };

      const deleteFeed = async (id) => {
        try {
          const response = await axios.delete(`http://localhost:3000/delete/${id}`);
          fetchCourses();
          alert(response.data.message)
        } catch (error) {
          console.error('Error fetching Courses:', error);
        }
      };

    const updateFeed = async (curs) => {
        try {
            navigate('/addFeedback', { state: curs });
        } catch (error) {
          console.error('Error deleting course:', error);
        }
      };

  return (
    <div>
        <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Course ID</th>
                <th scope="col">Course name</th>
                <th scope="col">Course Duration</th>
                <th scope="col">Feedback rating</th>
                <th >Actions</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                  {courses.map(course => (
                    <tr key={course._id}>
                      <td scope="col">{course._id}</td>
                      <td scope="col">{course.courseName}</td>
                      <td scope="col">{course.courseDuration}</td>
                      <td scope="col">{course.overallrating}</td>
                      <td scope="col">
                      <button type="button" className="btn btn-success" onClick={() => updateFeed(course)}>Update</button>&nbsp;
                      <button type="button" className="btn btn-info" onClick={() => deleteFeed(course._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                
            </tbody>
            </table>
        </div>

    </div>
  )
}

export default FeedbackDashboard