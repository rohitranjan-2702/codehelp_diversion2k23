const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  verifyPaymentDetails,
  performPayment,
} = require("../controllers/paymentController");

const router = express.Router();

router.post("/verification", protect, verifyPaymentDetails);
router.post("/razorpay", protect, performPayment);

module.exports = router;
