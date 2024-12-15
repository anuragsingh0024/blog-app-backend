import Comment from "../model/commentModel.js";
import Post from '../model/postModel.js'

const createComment = async (req, res) => {
          try{
                //fetch the data from request body
                const {post, user, body} = req.body;

                //Create a comment 
                const comment = new Comment({post , user, body})
                //Save the comment object into the db
                const savedComment = await comment.save();

                //find the post by id and update the comment array ;
                const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
                .populate("comments").exec()
                


                res.json({
                    post: updatedPost,
                })

          }
          catch(err){
                res.status(500).json({
                     error: err.message
                })
          }
}

export default createComment