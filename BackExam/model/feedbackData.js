const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  courseName: { type: String, required: true },
  courseDuration: { type: String, required: true },
  feedbackComments: { type: String, required: true },
  feedbackRating: { type: Number},
});

const feedbackData = mongoose.model('feedback', feedbackSchema);
module.exports = feedbackData;