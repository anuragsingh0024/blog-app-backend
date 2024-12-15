import Post from '../model/postModel.js'

const createPost = async (req, res) => {

    try{
         const {title, body} = req.body;
         const post = new Post({title, body});
         const savedPost = await post.save();

         res.json({
            "post": savedPost
         }
         )
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }

}

const getAllPost = async (req,res)=> {
       try {
         const allPosts = await Post.find().populate("comments").populate("likes").exec();
        res.json({
             posts: allPosts,
        })
       } 
       catch (error) {
        res.json({
            error: err.message
        })
       }
}

export {createPost , getAllPost}