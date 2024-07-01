const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url)
};

//const db = mongoose.connect(process.env.MONGO_URI, {
//  useUnifiedTopology: true,
//  useNewUrlParser: true,
//});

module.exports = connectDB;
