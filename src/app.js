const express = require('express');
const cors = require('cors');
const { errorHandler, notFound } = require('./middlewares/errorHandler');
const dbConnect = require('./configs/dbConnect');
const examRoutes = require('./api/routes/exam.routes')
const { configDotenv } = require('dotenv');
configDotenv()
const app = express();

dbConnect()
// Middleware for CORS
app.use(cors());

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sample route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});
app.use('/exam',examRoutes)

// Error handling middleware
app.use(errorHandler)
app.use(notFound)

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
