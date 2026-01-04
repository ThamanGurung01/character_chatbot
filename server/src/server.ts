import app from "./app.js";
import env from './configs/env.js';
app.listen(env.PORT, () => {
    console.log("Server started on port "+ env.PORT);
});