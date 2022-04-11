const { Router } = require("express");
const { Greet, Welcome, protected } = require("../controllers/index.controller");
const { authRequire } = require("../middleware/auth.middleware")

indexRouter = Router();

indexRouter.use("/", (req, res, next) => {
  console.log("Index Route");
  next();
});

indexRouter.get("/", Welcome);
indexRouter.get("/greet", Greet);
indexRouter.post("/protected", protected);

module.exports = indexRouter;
