const { Schema, model } = require("mongoose");

const loginSchema = new Schema(
  {
    email: {
      type: String,
      validate: {
        validator: function (v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            v
          );
        },
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    password: {
      type: String,
      minlength: [8, "Password is too short"],
    },
  },
  { _id: false }
);

module.exports = model("Login", loginSchema);
