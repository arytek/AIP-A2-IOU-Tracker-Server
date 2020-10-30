const mongoose = require('mongoose');

const favour = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  favourStatus: {
    type: String,
    enum: ['FULFILLED', 'UNFULFILLED'],
    required: true,
  },
  photoProofURL: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
  favourType: {
    type: String,
    enum: ['OWED_TO_OTHERS', 'OWED_TO_ME'],
    required: true,
  },
  favoursOwed: {
    type: [
      {
        reward: { type: mongoose.Schema.Types.ObjectId, ref: 'favourRewards' },
      },
    ],
    required: true,
  },
});

module.exports = favourModel = mongoose.model('favour', favour);
