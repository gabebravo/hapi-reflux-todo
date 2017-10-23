const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TodoSchema = new Schema({
  task: {
    type: String,
    required: true, 
    unique: true
  },

  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Todo', TodoSchema);