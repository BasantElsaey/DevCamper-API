const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
      });
      console.log(`Connected to MongoDB database : ${mongoose.connection.host}`.yellow.underline.bold);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
module.exports = connectToMongoDB