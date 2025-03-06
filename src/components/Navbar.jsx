// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link as ScrollLink } from "react-scroll";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scroll, setScroll] = useState(false);
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScroll(window.scrollY > 40);

//       // Detect active section
//       const sections = document.querySelectorAll("section");
//       let currentSection = "";
//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100; // Adjust for navbar height
//         if (window.scrollY >= sectionTop) {
//           currentSection = section.getAttribute("id");
//         }
//       });
//       setActiveSection(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`fixed left-0 w-full z-50 transition-all duration-300 ${
//           scroll ? "top-0 bg-[#000000] shadow-md" : "top-[40px] bg-transparent"
//         }`}
//       >
//         <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-6">
//           {/* Logo */}
//             <a href="#" className="flex items-center space-x-2">
//                 <img src="/src/assets/durologo.png" alt="Company Logo" className="h-14 w-auto max-h-[60px] object-contain" />
//             </a>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-lg">
//             {["home", "about", "products", "testimonials", "certificates", "contact"].map((section) => (
//               <li key={section}>
//                 <ScrollLink
//                   to={section}
//                   smooth={true}
//                   duration={500}
//                   offset={-80} // Adjust for navbar height
//                   className={`relative cursor-pointer hover:text-[#fa4d9e] transition ${
//                     activeSection === section ? "text-[#fa4d9e] font-bold" : "text-[#f9bf10]"
//                   }`}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#fa4d9e] transition-all duration-300 ${
//                       activeSection === section ? "scale-x-100" : "scale-x-0"
//                     }`}
//                   />
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-2xl text-[#f9bf10]" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-[#4241a1] shadow-lg transform ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300`}
//         >
//           <button className="absolute top-5 right-5 text-2xl [#f9bf10]" onClick={() => setIsOpen(false)}>
//             <FiX />
//           </button>
//           <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
//             {["home", "about", "products", "testimonials", "certificates", "contact"].map((section) => (
//               <li key={section}>
//                 <ScrollLink
//                   to={section}
//                   smooth={true}
//                   duration={500}
//                   offset={-80}
//                   className="hover:text-[#fa4d9e] transition text-[#f9bf10]"
//                   onClick={() => setIsOpen(false)} // Close mobile menu on click
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


// import { useState } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl font-bold flex items-center">
//           <img src="/durologo.png" alt="Logo" className="h-8 mr-2" />
//           <span>Design Hub</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6 border border-gray-300 rounded-full px-6 py-2">
//           <Link to="home" smooth duration={500} className="cursor-pointer">Home</Link>
//           <Link to="about" smooth duration={500} className="cursor-pointer">About Us</Link>
//           <Link to="products" smooth duration={500} className="cursor-pointer">Products</Link>
//           <Link to="blogs" smooth duration={500} className="cursor-pointer">Blogs</Link>
//           <Link to="testimonials" smooth duration={500} className="cursor-pointer">Testimonials</Link>
//           <Link to="contact" smooth duration={500} className="cursor-pointer text-pink-500">Contact Us</Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md w-full px-6 py-4 space-y-4 flex flex-col items-center">
//           <Link to="home" smooth duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="about" smooth duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>About Us</Link>
//           <Link to="products" smooth duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>Products</Link>
//           <Link to="blogs" smooth duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>Blogs</Link>
//           <Link to="testimonials" smooth duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>Testimonials</Link>
//           <Link to="contact" smooth duration={500} className="cursor-pointer text-pink-500" onClick={() => setIsOpen(false)}>Contact Us</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scroll, setScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.getElementById("hero");
//       if (heroSection) {
//         const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
//         setScroll(window.scrollY > heroBottom);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`w-full fixed left-0 z-50 transition-all duration-300 ${
//         scroll ? "top-0 bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg" : "top-[40px] bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="/logo.png" alt="Logo" className="h-12" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6 border border-gray-300 rounded-full px-6 py-2 bg-white bg-opacity-10 backdrop-blur-md">
//           {["Home", "About Us", "Products", "Blogs", "Testimonials"].map((section) => (
//             <Link
//               key={section}
//               to={section.toLowerCase().replace(/ /g, "")}
//               smooth
//               className="cursor-pointer text-white hover:text-pink-500 transition relative"
//             >
//               {section}
//               <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-pink-500 transition-all scale-x-0 group-hover:scale-x-100" />
//             </Link>
//           ))}
//           <Link
//             to="contactus"
//             smooth
//             className="ml-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition shadow-md"
//           >
//             Contact Us
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-900 shadow-md w-full px-6 py-4 space-y-4 flex flex-col items-center">
//           {["Home", "About Us", "Products", "Blogs", "Testimonials", "Contact Us"].map((section) => (
//             <Link
//               key={section}
//               to={section.toLowerCase().replace(/ /g, "")}
//               smooth
//               className="cursor-pointer text-white hover:text-pink-500 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               {section}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolledPastHero, setScrolledPastHero] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const homeSection = document.getElementById("home");
//       if (homeSection) {
//         const homeBottom = homeSection.getBoundingClientRect().bottom;
//         setScrolledPastHero(homeBottom <= 0);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`w-full fixed left-0 z-50 transition-all duration-300 shadow-md ${
//         scrolledPastHero ? "top-0 bg-gradient-to-r from-blue-800 to-blue-600" : "top-[40px] bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl font-bold flex items-center">
//           <img src="/logo.png" alt="Logo" className="h-12" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden text-white md:flex items-center space-x-6 border border-gray-300 rounded-full px-6 py-2 bg-white bg-opacity-10 backdrop-blur-md">
//           {[
//             { name: "Home", to: "home" },
//             { name: "About Us", to: "about" },
//             { name: "Products", to: "products" },
//             { name: "Blogs", to: "blogs" },
//             { name: "Testimonials", to: "testimonials" },
//           ].map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               smooth
//               className="cursor-pointer hover:text-yellow-400 transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <button
//   className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all"
//   onClick={() => scrollToContact()}
// >
//   Contact Us
// </button>

//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md w-full px-6 py-4 space-y-4 flex flex-col items-center">
//           {[
//             { name: "Home", to: "home" },
//             { name: "About Us", to: "about" },
//             { name: "Products", to: "products" },
//             { name: "Blogs", to: "blogs" },
//             { name: "Testimonials", to: "testimonials" },
//           ].map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               smooth
//               className="cursor-pointer hover:text-yellow-400 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link
//             to="contact"
//             smooth
//             className="bg-white border border-black px-4 py-2 rounded-full hover:bg-gray-100 transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const homeSection = document.getElementById("home");
//       if (homeSection) {
//         const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
//         setScrolled(window.scrollY > homeSection.offsetHeight / 2);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full left-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300 max-w-[1200px] mx-auto ${scrolled ? "top-0" : "top-[50px]"}`}>
//       <div
//         className={`flex items-center space-x-6 px-6 py-3 rounded-full transition-all duration-300 ${
//           scrolled ? "bg-white shadow-lg" : "bg-white/30 backdrop-blur-md"
//         }`}
//       >
//         {/* Logo */}
//         <a href="#" className="flex items-center">
//           <img
//             src="/logo.png"
//             alt="Company Logo"
//             className="h-10 w-auto object-contain"
//           />
//         </a>

//         {/* Navigation Links */}
//         <Link
//           to="home"
//           smooth
//           className="cursor-pointer hover:text-pink-500 transition font-medium"
//         >
//           Home
//         </Link>
//         <Link
//           to="about"
//           smooth
//           className="cursor-pointer hover:text-pink-500 transition font-medium"
//         >
//           About Us
//         </Link>
//         <Link
//           to="products"
//           smooth
//           className="cursor-pointer hover:text-pink-500 transition font-medium"
//         >
//           Products
//         </Link>
//         <Link
//           to="blogs"
//           smooth
//           className="cursor-pointer hover:text-pink-500 transition font-medium"
//         >
//           Blogs
//         </Link>
//         <Link
//           to="testimonials"
//           smooth
//           className="cursor-pointer hover:text-pink-500 transition font-medium"
//         >
//           Testimonials
//         </Link>
//         <button
//   className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
//   onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
// >
//   Contact Us
// </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const homeSection = document.getElementById("home");
//       if (homeSection) {
//         setScrolled(window.scrollY > homeSection.offsetHeight / 2);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full left-0 z-50 flex justify-between items-center px-6 sm:px-10 transition-all duration-300 ${
//         scrolled ? "top-0 bg-white shadow-lg" : "top-[50px] bg-white/30 backdrop-blur-md"
//       }`}
//     >
//       {/* Logo */}
//       <a href="#" className="flex items-center">
//         <img src="/logo.png" alt="Company Logo" className="h-10 sm:h-12 w-auto object-contain" />
//       </a>

//       {/* Desktop Menu */}
//       <div className="hidden md:flex items-center space-x-6">
//         <NavLinks />
//       </div>

//       {/* Mobile Menu Button */}
//       <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {/* Mobile Menu (Dropdown) */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg font-medium transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:hidden`}
//       >
//         <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
//           <X size={32} />
//         </button>
//         <NavLinks onClick={() => setIsOpen(false)} />
//       </div>
//     </nav>
//   );
// }

// function NavLinks({ onClick }) {
//   return (
//     <>
//       {["home", "about", "products", "blogs", "testimonials"].map((item) => (
//         <Link
//           key={item}
//           to={item}
//           smooth
//           className="cursor-pointer hover:text-pink-500 transition font-medium"
//           onClick={onClick}
//         >
//           {item.charAt(0).toUpperCase() + item.slice(1)}
//         </Link>
//       ))}
//       <button
//         className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
//         onClick={() => {
//           document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
//           if (onClick) onClick();
//         }}
//       >
//         Contact Us
//       </button>
//     </>
//   );
// }

// export default Navbar;



// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const homeSection = document.getElementById("home");
//       if (homeSection) {
//         const homeBottom = homeSection.offsetTop + homeSection.offsetHeight * 0.75; // Move up earlier
//         setScrolled(window.scrollY > homeBottom);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full left-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300 ${
//         scrolled ? "top-0" : "top-[40px]" // Moves up slightly earlier
//       }`}
//     >
//       <div
//         className={`flex items-center space-x-6 px-6 py-3 rounded-full transition-all duration-300 ${
//           scrolled ? "bg-white shadow-lg" : "bg-white/30 backdrop-blur-md"
//         }`}
//       >
//         {/* Logo */}
//         <a href="#" className="flex items-center">
//           <img
//             src="/logo.png"
//             alt="Company Logo"
//             className="h-10 sm:h-12 w-auto object-contain"
//           />
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6">
//           <NavLinks />
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg font-medium transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:hidden`}
//       >
//         <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
//           <X size={32} />
//         </button>
//         <NavLinks onClick={() => setIsOpen(false)} />
//       </div>
//     </nav>
//   );
// }

// function NavLinks({ onClick }) {
//   return (
//     <>
//       {["home", "about", "products", "blogs", "testimonials"].map((item) => (
//         <Link
//           key={item}
//           to={item}
//           smooth
//           className="cursor-pointer hover:text-pink-500 transition font-medium"
//           onClick={onClick}
//         >
//           {item.charAt(0).toUpperCase() + item.slice(1)}
//         </Link>
//       ))}
//       <button
//         className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
//         onClick={() => {
//           document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
//           if (onClick) onClick();
//         }}
//       >
//         Contact Us
//       </button>
//     </>
//   );
// }

// export default Navbar;


import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");

      if (homeSection) {
        const triggerPoint = window.innerWidth <= 768 // Check if mobile
          ? homeSection.offsetTop + homeSection.offsetHeight * 0.9 // Mobile trigger (later)
          : homeSection.offsetTop + homeSection.offsetHeight * 0.6; // Desktop trigger (earlier)
        
        setScrolled(window.scrollY > triggerPoint);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300 ${
        scrolled ? "top-0" : "top-[50px]"
      }`}
    >
      <div
        className={`flex items-center space-x-6 px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/30 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg font-medium transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <NavLinks onClick={() => setIsOpen(false)} />
      </div>
    </nav>
  );
}

function NavLinks({ onClick }) {
  return (
    <>
      {["home", "products", "about", "blogs", "testimonials"].map((item) => (
        <Link
          key={item}
          to={item}
          smooth
          className="cursor-pointer hover:text-pink-500 transition font-medium"
          onClick={onClick}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
      <button
        className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
        onClick={() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          if (onClick) onClick();
        }}
      >
        Contact Us
      </button>
    </>
  );
}

export default Navbar;
