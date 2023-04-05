const router = require('express').Router();
const {
    registerUser,
    // loginUser,
    // getOneUser,
    // getAllUsers
} = require('../controllers/users');

router.post("/", registerUser);
// router.post("/login", loginUser);
// router.get("/get", getOneUser);
// router.get("/all", getAllUsers);

module.exports = router;