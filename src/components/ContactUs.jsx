// import { useState } from "react";

// function ContactUs() {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted", formData);
//   };

//   return (
//     <section id="contact" className="w-full min-h-screen flex items-center justify-center p-6">
//       <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
//         {/* Contact Form */}
//         <div className="p-8">
//           <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in <span className="text-pink-500">Touch</span></h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input type="text" name="name" placeholder="Name" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
//             <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
//             <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
//             <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 border rounded-lg" onChange={handleChange} required></textarea>
//             <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-all">Send</button>
//           </form>
//           {/* Contact Info */}
//           <div className="mt-6 flex space-x-6 text-gray-600">
//             <div className="flex items-center space-x-2"><span>📞</span> <span>080 4607 7727</span></div>
//             <div className="flex items-center space-x-2"><span>📠</span> <span>080 4897 0127</span></div>
//             <div className="flex items-center space-x-2"><span>📧</span> <a href="mailto:info@example.com" className="text-pink-500">info@example.com</a></div>
//           </div>
//         </div>
//         {/* Map Section */}
//         <div className="relative">
//           <iframe
//             title="Google Map"
//             className="w-full h-full"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.201117812538!2d76.94885867482094!3d11.023532054587655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f6caf598633d%3A0xc1623b5c8db1ce3a!2sDURO%20Kitchen%20Automates%20-%20Durai%20Engineering%20Products%20DURO%20Overseas%20Trading%20House!5e0!3m2!1sen!2sin!4v1740778006488!5m2!1sen!2sin"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactUs;

// import { useState } from "react";
// import { motion } from "framer-motion";

// function ContactUs() {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted", formData);
//   };

//   return (
//     <section id="contact" className="w-full min-h-screen flex items-center justify-center p-6">
//       <motion.div
//         className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
//         initial={{ x: 100, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         {/* Contact Form */}
//         <div className="p-8">
//           <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in <span className="text-pink-500">Touch</span></h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input type="text" name="name" placeholder="Name" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
//             <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
//             <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
//             <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 border rounded-lg" onChange={handleChange} required></textarea>
//             <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-all">Send</button>
//           </form>
//           {/* Contact Info */}
//           <div className="mt-6 flex space-x-6 text-gray-600">
//             <div className="flex items-center space-x-2"><span>📞</span> <span>080 4607 7727</span></div>
//             <div className="flex items-center space-x-2"><span>📠</span> <span>080 4897 0127</span></div>
//             <div className="flex items-center space-x-2"><span>📧</span> <a href="mailto:info@example.com" className="text-pink-500">info@example.com</a></div>
//           </div>
//         </div>
//         {/* Map Section */}
//         <div className="relative">
//           <iframe
//             title="Google Map"
//             className="w-full h-full"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.201117812538!2d76.94885867482094!3d11.023532054587655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f6caf598633d%3A0xc1623b5c8db1ce3a!2sDURO%20Kitchen%20Automates%20-%20Durai%20Engineering%20Products%20DURO%20Overseas%20Trading%20House!5e0!3m2!1sen!2sin!4v1740778006488!5m2!1sen!2sin"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default ContactUs;

// import { useState } from "react";
// import { motion } from "framer-motion";

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     access_key: "e916f672-25f1-4fac-a0bb-d766cb98e8a0", // Replace with your Web3Forms Access Key
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     // Validation Logic
//     if (!formData.name.trim()) {
//       setError("Name is required.");
//       return;
//     }
//     if (!formData.email.trim() && !formData.phone.trim()) {
//       setError("Either Email or Phone number is required.");
//       return;
//     }
//     if (!formData.message.trim()) {
//       setError("Message cannot be empty.");
//       return;
//     }

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setSuccess("Message sent successfully!");
//         setFormData({ name: "", email: "", phone: "", message: "", access_key: "e916f672-25f1-4fac-a0bb-d766cb98e8a0" });
//       } else {
//         setError("Failed to send message. Try again.");
//       }
//     } catch {
//       setError("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <section id="contact" className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100">
//       <motion.div
//         className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
//         initial={{ opacity: 0, x: -100 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         {/* Contact Form */}
//         <div className="p-8">
//           <h2 className="text-3xl font-bold mb-6 text-gray-800">
//             Get in <span className="text-pink-500">Touch</span>
//           </h2>
//           {error && <p className="text-red-500">{error}</p>}
//           {success && <p className="text-green-500">{success}</p>}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="w-full p-3 border rounded-lg"
//               onChange={handleChange}
//               value={formData.name}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email (optional)"
//               className="w-full p-3 border rounded-lg"
//               onChange={handleChange}
//               value={formData.email}
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number (optional)"
//               className="w-full p-3 border rounded-lg"
//               onChange={handleChange}
//               value={formData.phone}
//             />
//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Your Message"
//               className="w-full p-3 border rounded-lg"
//               onChange={handleChange}
//               value={formData.message}
//               required
//             ></textarea>
//             <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-all">
//               Send
//             </button>
//           </form>
//         </div>

//         {/* Map Section */}
//         <div className="relative">
//           <iframe
//             title="Google Map"
//             className="w-full h-full"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.201117812538!2d76.94885867482094!3d11.023532054587655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f6caf598633d%3A0xc1623b5c8db1ce3a!2sDURO%20Kitchen%20Automates%20-%20Durai%20Engineering%20Products%20DURO%20Overseas%20Trading%20House!5e0!3m2!1sen!2sin!4v1740778006488!5m2!1sen!2sin"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default ContactUs;

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    access_key: "e916f672-25f1-4fac-a0bb-d766cb98e8a0", // Use ENV for security
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    setFormData((prev) => {
      if (!prev.name.trim()) {
        setError("Name is required.");
        return prev;
      }
      if (!prev.email.trim() && !prev.phone.trim()) {
        setError("Either Email or Phone number is required.");
        return prev;
      }
      if (!prev.message.trim()) {
        setError("Message cannot be empty.");
        return prev;
      }
      return prev;
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "", access_key: "e916f672-25f1-4fac-a0bb-d766cb98e8a0" });
      } else {
        setError("Failed to send message. Try again.");
      }
    } catch {
      setError("Something went wrong. Please try again later.");
    }
  }, []);

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <motion.div
        className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Contact Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Get in <span className="text-pink-500">Touch</span>
          </h2>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
              value={formData.phone}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
            <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-all">
              Send
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="relative h-[250px] sm:h-[300px] md:h-full">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.201117812538!2d76.94885867482094!3d11.023532054587655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f6caf598633d%3A0xc1623b5c8db1ce3a!2sDURO%20Kitchen%20Automates%20-%20Durai%20Engineering%20Products%20DURO%20Overseas%20Trading%20House!5e0!3m2!1sen!2sin!4v1740778006488!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
