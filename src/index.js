import express from "express"
import env from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import  postsRouter  from "./routers/posts.router.js"
import userRouter from "./routers/user.router.js"


env.config();
const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const app = express();

app.use(express.json({limit: "30mb"}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//routes
app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/user', userRouter);

mongoose.connect(URI)
    .then(() => app.listen(PORT, () => console.log(`Server started on: ${PORT} \nServer connected to mongoDB`)))
    .catch((error) => console.log(error.message));
