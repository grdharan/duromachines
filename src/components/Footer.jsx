import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import react-scroll
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-pink-500">DURO</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Leading commercial food processing machine manufacturer. Quality Guaranteed.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            {[
              { name: "Home", to: "home" },
              { name: "About", to: "about" },
              { name: "Products", to: "products" },
              { name: "Testimonials", to: "testimonials" },
              { name: "Certificates", to: "certificates" },
              { name: "Contact", to: "contact" },
            ].map(({ name, to }, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, scale: 1.1 }}
                className="cursor-pointer hover:text-pink-400 transition"
              >
                <Link to={to} smooth={true} duration={800} offset={-50}>
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">📞 +91 80460 77727</p>
          <p className="text-gray-400 text-sm">📧 info@mycompany.com</p>
          <p className="text-gray-400 text-sm">📍 Coimbatore, Tamilnadu, India</p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-pink-400 transition"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4"
      >
        © 2025 DURO. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
