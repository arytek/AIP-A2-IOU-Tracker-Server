const mongoose = require('mongoose');

const userStat = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  requestsFulfilled: {
    type: Number,
    required: true,
  },
});

module.exports = userStatModel = mongoose.model('userStats', userStat);
