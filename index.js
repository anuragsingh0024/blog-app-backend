import express from 'express'
import connectDb from './config/db.js';
import router from './routes/blogRoute.js';

const app = express();
app.use(express.json())
connectDb()

app.use('/api/v1', router)

const PORT  = process.env.PORT || 4000;
app.listen(PORT, ()=> {
     console.log(`server started on port ${PORT}`)
})