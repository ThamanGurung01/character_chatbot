import app from "./app.js";
import { connectDB } from './configs/db.js';
import { env } from './configs/env.js';
connectDB();
app.listen(env.PORT, () => {
    console.log("Server started on port "+ env.PORT);
});