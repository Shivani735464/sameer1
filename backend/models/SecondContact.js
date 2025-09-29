import mongoose from "mongoose";

const SecondContactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },

  // plan details
  planName: { type: String },
  planPrice: { type: String },
  planDescription: { type: String },
  planFeatures: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  buttonStatus: { type: String, enum: ["off", "on"], default: "off" },
});

export default mongoose.model("SecondContact", SecondContactSchema);