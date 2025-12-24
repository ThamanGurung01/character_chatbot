import type { Request, Response } from "express";

export const sendMessage=async (req:Request,res:Response)=>{
    const id=req.params.id;
    const data=req.body;
    if((data.text).toLowerCase()=="hello"){
        return res.json({successs:true,message:"Message sent",reply:{text:"Hello! How can I help you?"},id:id});
    }else if((data.text).toLowerCase()=="hi"){
        return res.json({successs:true,message:"Message sent",reply:{text:"Hi! How can I help you?"},id:id});
    }else if((data.text).toLowerCase()=="hi naruto"&&id!=="1"){
        return res.json({successs:true,message:"Message sent",reply:{text:"Hi! But I am not naruto"},id:id});
    }else if((data.text).toLowerCase()=="hi naruto"&&id==="1"){
        return res.json({successs:true,message:"Message sent",reply:{text:"Yes I am naruto"},id:id});
    }else if(data.text.toLowerCase()=="hi luffy"&&id==="2"){
        return res.json({successs:true,message:"Message sent",reply:{text:"Yes I am luffy"},id:id});
    }else if(data.text.toLowerCase()=="hi luffy"&&id!=="2"){
        return res.json({successs:true,message:"Message sent",reply:{text:"Hi! But I am not luffy"},id:id});
    }
    return res.json({successs:true,message:"Message sent",reply:data,id:id});
}