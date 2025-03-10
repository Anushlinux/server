const { setAvatar } = require("../controllers/userController");
const { register } = require("../controllers/userController");
const { login } = require("../controllers/userController");
const { getAllUsers } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allUsers/:id", getAllUsers);

module.exports = router;
