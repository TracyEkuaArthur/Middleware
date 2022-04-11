const { Router } = require("express");
const { Login, Register } = require("../controllers/auth.controller");

authRouter = Router();

authRouter.use((req, res, next) => {
  console.log("Authetincation Middleware Called");
  next();
});

authRouter.use("/login", Login);
authRouter.use("/register", Register);

module.exports = authRouter;
