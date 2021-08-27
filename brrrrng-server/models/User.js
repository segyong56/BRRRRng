const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
  },
  address: [
    {
      type: String,
    },
  ],
  carid: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
