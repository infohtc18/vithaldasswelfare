"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      toast.success("Thank you! Your message has been sent successfully.");
      e.target.reset();
    } else {
      toast.error("Failed to send your message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        required
        name="name"
        placeholder="Your Name"
        className="w-full border border-slate-300 p-2.5 rounded-md text-sm"
      />

      <input
        required
        name="email"
        type="email"
        placeholder="Email Address"
        className="w-full border border-slate-300 p-2.5 rounded-md text-sm"
      />

      <input
        required
        name="mobile"
        placeholder="Mobile Number"
        className="w-full border border-slate-300 p-2.5 rounded-md text-sm"
      />

      <textarea
        required
        name="message"
        rows="4"
        placeholder="Your Message"
        className="w-full border border-slate-300 p-2.5 rounded-md text-sm"
      />

      <button
        disabled={loading}
        className="bg-orange-950/70 hover:bg-orange-950 transition text-white text-sm font-medium px-5 py-2.5 rounded-md w-full"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
