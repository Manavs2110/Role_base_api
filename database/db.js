 const mongoose = require('mongoose');
const { DB } = require('../config/index')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports= connectDB;