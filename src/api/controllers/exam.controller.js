const examService = require('../services/exam.service');
class ExamController {
  async createExam(req, res) {
    const {examData,questionsData} = req.body;
    try {
      const exam = await examService.createExam(examData,questionsData);
      res.status(201).json(exam);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create an exam' });
    }
  }

  async getExams(req, res) {
    try {
      const exams = await examService.getExams();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve exams' });
    }
    
  }
  async getExams(req, res) {
    try {
      const exams = await examService.getExams();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve exams' });
    }
    
  }async getAllExamTitles(req, res) {
    try {
      const exams = await examService.getAllExamTitles();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve exams' });
    }
    
  }async getExamTitle(req, res) {
    try {
      const exams = await examService.getExamByTitle(title);
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve exams' });
    }
    
  }
}

module.exports = new ExamController();
