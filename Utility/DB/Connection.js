const mongoose = require('mongoose');

const URI =
  'mongodb+srv://dbUser:dbUser@favour-tracker-cluster.cdghf.mongodb.net/mainDB?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('Connected to database...');
};

module.exports = connectDB;
