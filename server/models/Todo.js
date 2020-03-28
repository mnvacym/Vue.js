const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  }
});

module.exports = Todo = mongoose.model('todo', UserSchema);