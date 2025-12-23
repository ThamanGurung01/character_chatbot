import type { Request, Response } from "express";

export const sendMessage=async (req:Request,res:Response)=>{
    const id=req.params.id;
    const data=req.body;
    return res.json({successs:true,message:"Message sent",data:data,id:id});
}