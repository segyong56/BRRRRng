const { Router } = require("express");
const { signup, login, logout } = require("../controllers/authController");
const { auth } = require("../middleware/auth");
const { authstate } = require("../middleware/authstate");

const authRouter = Router();

authRouter.post("/signup", signup);

authRouter.post("/login", login);

authRouter.get("/logout", auth, logout);

authRouter.get("/", authstate);

module.exports = authRouter;
