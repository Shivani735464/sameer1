import express from "express";
import Contact from "../models/Contact.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, mobile, message } = req.body;

    // Determine role based on number
    const role = mobile === process.env.SUPERADMIN_NUMBER ? "superadmin" : "user";

    const newContact = new Contact({
      firstName,
      lastName,
      mobile,
      message,
      role,
    });

    const savedContact = await newContact.save();

    res.status(201).json({
      success: true,
      message: role === "superadmin" ? "superadmin_redirect" : "user_saved",
      data: savedContact,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


// Get all users with role "user"
router.get("/users", async (req, res) => {
  try {
    const users = await Contact.find({ role: "user" }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;