import express from "express";
import { PORT,URL } from "./config.js";
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';
const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling CORS POLICY
//option 1: Allow all origin with default of cors(*)
app.use(cors());
//option 2:Allow custom origin
//app.use(
//    cors({
 //       origin :'http://localhost:3000',
 //       methods:['GET','POST','PUT','DELETE'],
 //       allowedHeaders:['Content - Type']
 //   })
//);

app.get("/",(req,res) => {
    console.log(req);
    return res.status(234).send('Welcome to mern stack tutorial');
})

app.use('/books',bookRoute);
mongoose.connect(URL).then(() => {
   console.log(`app connected to database`);
   app.listen(PORT,() => {
    console.log(`App is listening to port: ${PORT}`);
});
}).catch((error) =>{
     console.log(error);
});