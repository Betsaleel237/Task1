import express from "express";
import appRouter from "./routes/index.js";
import "./db/index.js";
import cors from 'cors'
import { connectToDatabase } from "./db/index.js";

//import {config} from "dotenv";

 
const app= express();

const corsOptions = {
    origin: '*', // Allow all origins
    methods: 'GET,POST,PUT,DELETE', // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

app.use(cors(corsOptions));
app.use(express.json())

app.get('/test', (req,res)=>{
    res.json({message:'hello world'})
})



app.use("/api/v1/products",appRouter);

const PORT=process.env.PORT || 5000;

connectToDatabase().then( ()=> {
    app.listen(PORT,()=>console.log("Server Open at port",PORT));
}).catch((err)=>{
    console.log("Error Occured with mysql connection. Error=",err);
    process.exit(0);
});

