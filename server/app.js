import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router =express.Router();

config({path:"./config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(router);

router.post('/send/mail',async (req,resp)=>{

    const {name,email,message} =req.body;

    if(!name||!email||!message){
        return next(resp.status(400).json({
            success:false,
            message:"Please Provide All The Details"
        }))
    }

        try {
            await sendEmail ({
                email:"sanskarotwal@gmail.com",
                subject:"GYM Website Contact",
                message,
                userEmail:email,

            })

            resp.status(200).json({
                success:true,
                message:"Message sent succesfully"
            })
        } catch (error) {
                resp.status(500).json({
                    success:false,
                    message:"internal server error"
                })
        }
    
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
    
})