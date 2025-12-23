import express from "express";
import chats from "./routes/chats.route.js";
const app = express();
app.get("/", function(req, res){
    return res.send("Hello World!");
})
app.use("/chats",chats);
export default app;
