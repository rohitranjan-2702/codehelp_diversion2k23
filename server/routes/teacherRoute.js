const express = require("express");
const protect = require("../middleware/authMiddleware");
const {registerTeacher,loginTeacher,getTeacher} = require("../controllers/tutorController");


const router = express.Router();

router.get("/signup", protect, registerTeacher);
router.post("/login", protect, loginTeacher);
router.delete("/profile", protect, getTeacher);

module.exports = router;