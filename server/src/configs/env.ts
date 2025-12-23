import dotenv from 'dotenv';
dotenv.config();
const env={
    PORT:process.env.PORT || 3000,
    MONGO_URI:process.env.MONGO_URI || "",
    FRONTEND_URL:process.env.FRONTEND_URL || "http://localhost:5173",
}
export default env;