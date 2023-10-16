const { default: mongoose } = require("mongoose");

/* The code is defining a Mongoose schema for an exam. The schema includes various fields such as
`teacher`, `maxQuestions`, `duration`, `enrollment`, `allowMultipleAttempts`, `showScore`,
`gradeAllocation`, and `instructions`. The `teacher` field is a reference to a `User` object using
its ObjectId. Other fields can store values of different types such as numbers, strings, and
booleans. The schema can be used to create an `Exam` model in Mongoose. */
const examSchema = new mongoose.Schema({
    title:String,
    maxQuestions: Number,
    duration: Number,
    enrollment: String,
    allowMultipleAttempts: String,
    showScore: String,
    gradeAllocation: String,
    instructions: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }], // Reference to questions
});
  
  const Exam = mongoose.model('Exam', examSchema);
  module.exports= Exam
  