import express from 'express';
import { sendMessage } from '../controllers/sendMessage.controller.js';
const router = express.Router();
router.get("/:id",sendMessage);
export default router;