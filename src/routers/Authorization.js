const express = require("express");
const routerV1 = new express.Router();
const userAuth = require("../controllers/Authorization");



//user auth
routerV1.get("/user",userAuth.userDetails);
routerV1.patch("/user",userAuth.updateUser);
routerV1.delete("/user",userAuth.deleteUser);

module.exports = routerV1;