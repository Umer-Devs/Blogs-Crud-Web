import express, { json } from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDb } from './database/index.js';
dotenv.config({
    path : './.env'
}) ;

const app = express();
app.use(cors())
app.use(json())

const port = process.env.PORT || 4000 ;

app.get('/',(req,res)=>{
    res.send("hello my backend is runnig after along time")
});



// singin route 
app.post('/sigin',(req,res)=>{
    console.log(req.body);
    res.status(200).send("data is received sucessfully")
    
})

//  database connected function 

connectDb()

app.listen(port,()=>{
    console.log(`my app is ruuningon this port ${port}`);
    
})