const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.route("/api/usuarios").get(UserController.listarUsuarios);


module.exports = router;