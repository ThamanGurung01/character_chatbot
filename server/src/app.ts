import express from "express";
import env from "./configs/env.js";
import cors from "cors";
import chats from "./routes/chats.route.js";
const app = express();
app.use(cors(
    {
        origin:env.FRONTEND_URL,
        credentials:true
    }
));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/", function(req, res){
    return res.send("Hello World!");
})
app.use("/chats",chats);
export default app;
