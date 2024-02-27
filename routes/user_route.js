//------required Library--------//
const express = require("express");
const router = express.Router();

// ---------- Importing user_controller ---------- //
const userController = require('../controllers/user_controller');

// ---------- Importing protectRoute Middleware ---------- //
const protectRoute = require("../middleware/protectRoute");


router.get('/', protectRoute, userController.getUsers);
router.get('/:id', protectRoute, userController.getUserById);
router.put('/:id', protectRoute, userController.updateUser);
router.delete('/:id', protectRoute, userController.deleteUser);

module.exports = router;