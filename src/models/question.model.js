const { default: mongoose } = require("mongoose");

/* The code is defining a schema for a question in a JavaScript application. The schema includes the
following fields: */
const questionSchema = new mongoose.Schema({
    question: String,
    img_url: String,
    options: [String],
  });
  
  const Question = mongoose.model('Question', questionSchema);
  module.exports= Question