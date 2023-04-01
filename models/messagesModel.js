import mongoose from "mongoose";

const messageModel = new mongoose.Schema({
    channelName: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    isEdited: {
        type: Boolean,
        default: false,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Message", messageModel);