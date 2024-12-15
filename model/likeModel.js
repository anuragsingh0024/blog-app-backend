import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
       post: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Post"
       },
       user: {
         type: String,
         require: true
       }
})

export default mongoose.model("Like", likeSchema)