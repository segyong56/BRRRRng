const { Router } = require("express")
const { home } = require("../controllers/userController");

const userRouter = Router();

userRouter.get('/', home)

//userRouter.get("/logout", logout);

module.exports = userRouter ;
