import express from 'express'
import createComment from '../controller/commentController.js';
import {createPost, getAllPost} from '../controller/postController.js';
import {createLike, unlikePost} from '../controller/likeController.js';
const router = express.Router();


router.post('/createcomment', createComment)
router.post('/createpost', createPost)
router.get('/posts', getAllPost)
router.post('/likes/like', createLike)
router.post('/likes/unlike', unlikePost)
router.get('/dummypage', (req, res)=>{
    res.send("<h1> This is your dummy page</h1>")
})

export default router