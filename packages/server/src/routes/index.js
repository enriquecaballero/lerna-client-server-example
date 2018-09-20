import { Router } from "express";
import system from "./system";

const router = Router();

router.use("/", system);

export default router;
