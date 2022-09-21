import mongoose from "mongoose";

const postScheme = new mongoose.Schema({
    title: String,
    message: String,
    creator: {
        type: String,
        required: true
    },
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const model = mongoose.model('Post', postScheme, 'Posts');

export default model;