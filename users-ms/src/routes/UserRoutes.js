import { Router } from "express";
import { verifyJwt } from "../middleware/authMiddleware.js";
import { UserController } from "../controller/UserController.js";

const router = Router();

router.get("/users", verifyJwt, UserController.findAll);
router.get("/users/:username", UserController.findUserByName);
router.post("/users", verifyJwt, UserController.save);

export default router;