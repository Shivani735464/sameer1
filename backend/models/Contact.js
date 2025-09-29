import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  message: { type: String, required: true },
  role: { type: String, enum: ["user", "superadmin"], default: "user" },
  buttonStatus: { type: String, enum: ["off", "on"], default: "off" },
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);