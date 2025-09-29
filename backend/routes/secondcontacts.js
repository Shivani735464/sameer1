import express from "express";
import Contact from "../models/SecondContact.js";

const router = express.Router();

// POST /api/contacts
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, planName, planPrice, planDescription, planFeatures } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Name, email and phone are required." });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      planName,
      planPrice,
      planDescription,
      planFeatures,
    });

    const saved = await contact.save();
    res.status(201).json({ message: "Saved", id: saved._id });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// GET all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;