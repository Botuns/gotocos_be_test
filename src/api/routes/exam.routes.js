const express = require('express');
const router = express.Router();
const examController = require('../controllers/exam.controller');


router.post('/create', examController.createExam);
router.get('/', examController.getExams);
router.get('/titles', examController.getAllExamTitles);
router.get('/:title', examController.getExamTitle);

module.exports = router;
