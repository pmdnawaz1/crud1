import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
});

export default mongoose.model("Channel", channelSchema);