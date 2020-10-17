const mongoose = require('mongoose');

const request = new mongoose.Schema({
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  requestStatus: {
    type: String,
    enum: ['FULFILLED', 'UNFULFILLED'],
  },
  photoProofURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
  rewards: {
    type: [
      {
        reward: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'favourRewards',
          required: true,
        },
        rewarder: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'users',
          required: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = requestModel = mongoose.model('request', request);
