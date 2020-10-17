const mongoose = require('mongoose');

const favourReward = new mongoose.Schema({
  rewardName: {
    type: String,
    required: true,
  },
});

module.exports = favourRewardModel = mongoose.model(
  'favourReward',
  favourReward
);
