import express from "express"
import { createNewUser, getUserByEmail } from "../../src/controllers/userController.js"
import {validateParametersUser } from "../../middlewares/validateParamsUser.js"
import { isLogin } from "../../middlewares/isLogin.js"

const router = express.Router()

router.post("/usuarios", validateParametersUser, createNewUser)
router.get("/usuarios", isLogin, getUserByEmail)

export default router