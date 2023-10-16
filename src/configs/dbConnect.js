const mongoose = require('mongoose');
//connects to the database:(mongodb)
/**
 * The function `dbConnect` connects to a MongoDB database using the provided URI.
 */
// Define a function to establish the database connection
async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error(`Error connecting to the database: ${error}`);
  }
}

// Listen for database connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection is open');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose default connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});

// Listen for Node process termination and disconnect from the database
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination');
    process.exit(0);
  });
});

// Export the connectToDatabase function
module.exports = dbConnect;
