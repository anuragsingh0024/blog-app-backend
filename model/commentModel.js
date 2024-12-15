import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
       post: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Post"
       },
       user: {
         type: String,
         require: true
       },
       body: {
            type: String,
            require: true
       }
})

export default mongoose.model("Comment", commentSchema)