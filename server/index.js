import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
 

const app = express();
//updated from my laptop
//this is deprecated from express version 4.16.0 or later.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true})); 
app.use(cors());


import postRoutes from "./routes/posts.js";
app.use("/posts",postRoutes);



const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'memories';      // REPLACE WITH YOUR DB NAME
const CONNECTION_URL=`mongodb://${server}/${database}`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log("error:",error));

mongoose.set("useFindAndModify",false);
