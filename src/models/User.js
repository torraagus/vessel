const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      validate: {
        validator: function(v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
        },
        message: props => `${props.value} is not a valid email address.`
      },
    },
    password: {
      type: String,
      minlength: [8, 'Password is too short'],
    },
    businessName: {
      type: String,
      required: [true, 'The business name is required.'],
      trim: true,
      set: (str) => str.replace(/\s\s+/g, " "),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
