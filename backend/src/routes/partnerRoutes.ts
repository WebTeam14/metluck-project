import express from "express";
import { createPartner } from "../controllers/partnerController";

const router = express.Router();

router.post("/", createPartner);

export default router;