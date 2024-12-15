import Like from '../model/likeModel.js'
import Post from '../model/postModel.js'

const createLike = async (req, res) => {
        try { const {post, user} = req.body;

         const like = new Like({
            post, user
         })

         const savedLike = await like.save();
         
         //find by id and update the post;
         const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id,}}, {new: true}).populate("likes").exec();

         res.status(200).json({
             post: updatedPost
         })
        }

        catch(err) { 
            res.json({
                 error: err.message
            }
            )
        }
}

const unlikePost = async (req, res) => {
    try{
       const {post, like} = req.body;
       
       //find by id and delete the like document;
       const deletedLike = await Like.findByIdAndDelete({post: post, _id: like});

       //update the post collection;
       const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true});

       res.json({
            post: updatedPost,
       })
    }
    catch(err){
          res.status(404).json({
              error: err.message,
          })
    }

}


export  {createLike, unlikePost}
