import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SecondContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan || null;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setMessage({ type: "error", text: "Please fill all fields." });
      return;
    }

    setLoading(true);
    setMessage(null);

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      planName: plan?.name || "N/A",
      planPrice: plan?.price || "N/A",
      planDescription: plan?.description || "",
      planFeatures: plan?.features || [],
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/second-contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage({ type: "success", text: "Done successfully!" });
      setForm({ name: "", email: "", phone: "" });
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen py-20 w-full flex items-center justify-center relative z-10 text-white"
      style={{
        background: `url('/background-dark.jpg') no-repeat center center/cover`,
      }}
    >
      {/* Overlay for transparency */}
      <div className="absolute inset-0 z-10"></div>

      {/* Single Card */}
      <div className="relative z-20 w-full max-w-6xl bg-gray-900/80 rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row gap-10">
        {/* Left: Plan Details */}
        <div className="flex-1  rounded-2xl p-6 shadow-inner flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{plan?.name || "No Plan Selected"}</h2>
          <p className="text-xl text-blue-400 font-semibold">{plan?.price}</p>
          <p className="text-gray-300 mt-2">{plan?.description}</p>
          {plan?.features && (
            <ul className="mt-4 space-y-2 text-gray-200 text-sm">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-400">✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-gray-800/90 rounded-2xl p-6 shadow-inner"
        >
          <h2 className="text-2xl font-bold mb-2">Complete your order</h2>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98XXXXXXXX"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />

          {message && (
            <p className={`text-sm ${message.type === "error" ? "text-red-400" : "text-green-400"}`}>
              {message.text}
            </p>
          )}

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold transition"
            >
              {loading ? "Sending..." : "Submit & Complete Order"}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 font-semibold transition"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SecondContact;