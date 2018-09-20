import { Router } from "express";
import SystemController from "../controllers/system";

const router = Router();

router.get("/", SystemController.getSystemInfo);

export default router;
