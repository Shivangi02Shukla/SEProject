const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type:String,
            length:100,
        },
        password: {
            type:String,
            length:20,
        },
    })

module.exports = mongoose.model("User", UserSchema);