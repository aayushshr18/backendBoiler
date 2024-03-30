const express = require("express");
const authRouter = new express.Router();
const userAuth = require("../controllers/Authorization");


authRouter.post("/signup",userAuth.registration);
authRouter.post("/login",userAuth.loginUser);


module.exports = authRouter;