const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  courseName: { type: String, required: true },
  courseDuration: { type: String, required: true },
  feedbackRating: { type: Number},
  feedbackComments: { type: String, required: true },
});

const courseData = mongoose.model('course', courseSchema);
module.exports = courseData;
