import { Router } from "express";
import { registerUser } from "../controllers/user.controller";

const router = Router()

router.route("/register").postZ(registerUser)

export default router