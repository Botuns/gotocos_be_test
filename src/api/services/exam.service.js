const Exam = require('../../models/exam.model');
const Question = require('../../models/question.model');

class ExamService {
  /**
   * Create a new exam, add associated questions, and return the exam instance.
   *
   * @param {object} examData - Information about the exam.
   * @param {array} questionsData - Information about each question.
   * @returns {object} - The created exam instance.
   * @throws {Error} - Throws an error if validation fails or an error occurs during the process.
   */
  async createExam( examData, questionsData) {
    try {
      // Validate examData and questionsData
      if (!examData || !questionsData || questionsData.length === 0) {
        throw new Error('Invalid exam or questions data');
      }

      // Create a new exam instance
      const exam = new Exam(examData);

      // Create question instances and associate them with the exam
      const questions = questionsData.map((questionInfo) => {
        return new Question({
          ...questionInfo,
        });
      });

      // Save questions to the database
      const savedQuestions = await Question.insertMany(questions);

      // Set the IDs of the saved questions in the exam's questions field
      exam.questions = savedQuestions.map((question) => question._id);

      // Save the updated exam with the questions
      await exam.save();

      return exam;
    } catch (error) {
    //   console.error('Error creating exam:', error);
      throw error.message;
    }
  }

  /**
   * Retrieve all exams from the database and populate their questions.
   *
   * @returns {array} - An array of exams.
   * @throws {Error} - Throws an error if an error occurs during the process.
   */
  async getExams() {
    try {
      const exams = await Exam.find().populate('questions');
      return exams;
    } catch (error) {
    //   console.error('Error getting exams:', error);
      throw error.message;
    }
  }

  /**
   * Retrieve an exam by its title.
   *
   * @param {string} title - The title of the exam to search for.
   * @returns {object} - The exam with the specified title.
   * @throws {Error} - Throws an error if an error occurs during the process.
   */
  async getExamByTitle(title) {
    try {
      const exam = await Exam.findOne({ title }).populate('questions');
      return exam;
    } catch (error) {
      
      throw error;
    }
  }
  /**
   * Retrieve titles of all exams.
   *
   * @returns {array} - An array of exam titles.
   * @throws {Error} - Throws an error if an error occurs during the process.
   */
  async getAllExamTitles() {
    try {
      const exams = await Exam.find({}, 'title'); // Only select the 'title' field
      const titles = exams.map((exam) => exam.title);
      return titles;
    } catch (error) {
      
      throw error.message;
    }
  }
}
module.exports= new ExamService()