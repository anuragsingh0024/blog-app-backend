import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
     title: {
         type: String,
         require: true
     }, 
     body:{
        type: String,
        require: true
     },
     likes: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: "Like",
     }],
     comments: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
     }]

})

export default mongoose.model("Post", postSchema)