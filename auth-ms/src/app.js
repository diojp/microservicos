import express from 'express';
import axios from 'axios';
import AuthRoutes from "./routes/AuthRoutes.js";

const app = express();

app.use(express.json());

app.use(AuthRoutes);

const registerService = async()=>{
    try{
        await axios.post(`${process.env.SERVICE_REGISTRY_URL}/register`, {
            name: process.env.APP_NAME,
            url: `http://localhost:${process.env.PORT}`
        });
        console.log("Service Registered Sucessfully");
    }catch(error){
        console.error(`Error - ${error.message}`);
    }
}

app.listen(process.env.PORT, ()=>{
    console.log(`App running on port: ${process.env.PORT}`);
    registerService();
});