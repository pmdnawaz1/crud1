import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    role: {
        type: String,
        default: "user",
    },

});

export default mongoose.model("User", userSchema);