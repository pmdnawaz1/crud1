import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    channelName: {
        type: String,
    },
    readPermission: {
        type: Boolean,
        default: false,
    },
    writePermission: {
        type: Boolean,
        default: false,
    },
    editPermission: {
        type: Boolean,
        default: false,
    },
    invitationStatus: {
        type: String,
        default: "pending",
    },
});

export default mongoose.model("Permission", permissionSchema);