const mongoose = require('mongoose');

const user = new mongoose.Schema({
  uuid: {
    type: String,
  },
  username: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = User = mongoose.model('user', user);
