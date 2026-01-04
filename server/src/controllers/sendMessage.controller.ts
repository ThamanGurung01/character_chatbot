import type { Request, Response } from "express";
import { generateContent } from "../services/gemini.js";
import promptBuilder from "../services/promptBuilder.js";

export const sendMessage=async (req:Request,res:Response)=>{
    const id=req.params.id;
    const data=req.body;
    if(data.text&&id){
        const prompt=promptBuilder(id,data.text);
        if(!prompt) return null;
        const result=await generateContent(prompt);
        return res.json({successs:true,message:"Message sent",reply:{text:result},id:id});  
    }else{
        return res.json({successs:false,message:"Message text is required",id:id});
    }
}