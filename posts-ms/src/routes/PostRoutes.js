import { Router } from "express";
import { verifyJwt } from "../middleware/authMiddleware.js";
import { PostController } from "../controller/PostController.js";

const router = Router();

router.get("/posts", verifyJwt, PostController.findAll);
router.get("/posts/user/:id", verifyJwt, PostController.findByUserId);
router.post("/posts", verifyJwt, PostController.save);

export default router;