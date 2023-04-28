const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth_controllers");
const { get_data_user } = require("../controllers/message_controllers");

router.post("/register", register);
router.post("/login", login);
router.post("/alert", get_data_user);

module.exports = router;
