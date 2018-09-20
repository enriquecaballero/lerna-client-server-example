import { Router } from "express";
import ExampleController from "../controllers/example";

const router = Router();

router.get("/", ExampleController.getHelloWorld);

export default router;
