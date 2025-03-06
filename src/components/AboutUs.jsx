// import { motion } from "framer-motion";
// import banner from "../assets/images/banner.webp";

// function AboutUs() {
//   return (
//     <section id="about" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
//       {/* Container */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        
//         {/* Left Side - Image */}
//         <motion.div
//           className="md:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src={banner} // Change to your image in public/images
//             alt="About Us"
//             className="w-full rounded-lg shadow-lg"
//           />
//         </motion.div>

//         {/* Right Side - Content */}
//         <motion.div
//           className="md:w-1/2 md:pl-10 mt-8 md:mt-0"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About <span className="text-[#fa4d9e]">Duro</span></h2>
//           <p className="text-gray-600 mt-4 text-lg">
//           We “Duro Overseas Trading House,” are a reputed organization offering unmatched quality range of Kitchen Machineries & Food processing machines. Our excellent services have enabled us in achieving the trust and reliance of our clients and earn desired market credibility for the range of products offered.
//           </p>
//           <p className="text-gray-600 mt-4 text-lg">
//           Established in the year 1956, we have gained leading position in the food industry. Our well established base in Coimbatore (Tamil Nadu) helps us in catering to our domestic clients. Moreover, our globe-spanning network aids in meeting the demands of our foreign clients in a befitting manner.
//           </p>
//           <button className="mt-6 bg-[#4241a1] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#fa4d9e] transition-all">
//             Learn More
//           </button>
//         </motion.div>
        
//       </div>
//     </section>
//   );
// }

// export default AboutUs;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function AboutUs() {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section id="about" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      
//       {/* Left Side: Text Content */}
//       <motion.div 
//         className="md:w-1/2 max-w-xl text-left"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl font-bold text-black">
//           Welcome to <span className="text-orange-500">Duro</span>
//         </h2>
//         <p className="text-gray-600 mt-4 leading-relaxed">
//         We “Duro Overseas Trading House,” are a reputed organization offering unmatched quality range of Kitchen Machineries & Food processing machines. 
//         Our excellent services have enabled us in achieving the trust and reliance of our clients and earn desired market credibility for the range of products offered.
//         </p>

//         {/* Expandable Content */}
//         <AnimatePresence>
//           {showMore && (
//             <motion.p 
//               className="text-gray-600 mt-2 leading-relaxed"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               Established in the year 1956, we have gained leading position in the food industry. Our well established base in Coimbatore (Tamil Nadu) helps us in catering to our domestic clients. Moreover, our globe-spanning network aids in meeting the demands of our foreign clients in a befitting manner.
//             </motion.p>
//           )}
//         </AnimatePresence>

//         {/* Read More / Show Less Button */}
//         <motion.button 
//           className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
//           whileHover={{ scale: 1.05 }}
//           onClick={() => setShowMore(!showMore)}
//         >
//           {showMore ? "Show Less" : "Read More"}
//         </motion.button>
//       </motion.div>

//       {/* Right Side: Image */}
//       <motion.div 
//         className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="relative">
//           <img 
//             src="/images/banner.webp" 
//             alt="Welding Work"
//             className="w-80 md:w-96 h-auto rounded-lg border-4 border-orange-500 object-cover"
//             style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }} // Custom Shape
//           />
//         </div>
//       </motion.div>

//     </section>
//   );
// }

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function AboutUs() {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section id="about" className="bg-white py-16">
//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10">
        
//         {/* Left Side: Text Content */}
//         <motion.div 
//           className="md:w-1/2 text-left"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-black">
//             Welcome to <span className="text-orange-500">Duro</span>
//           </h2>
//           <p className="text-gray-600 mt-4 leading-relaxed">
//             We “Duro Overseas Trading House,” are a reputed organization offering unmatched quality range of Kitchen Machineries & Food processing machines.
//             Our excellent services have enabled us in achieving the trust and reliance of our clients and earn desired market credibility for the range of products offered.
//           </p>

//           {/* Expandable Content */}
//           <AnimatePresence>
//             {showMore && (
//               <motion.p 
//                 className="text-gray-600 mt-2 leading-relaxed"
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Established in the year 1956, we have gained a leading position in the food industry. Our well-established base in Coimbatore (Tamil Nadu) helps us in catering to our domestic clients. Moreover, our globe-spanning network aids in meeting the demands of our foreign clients in a befitting manner.
//               </motion.p>
//             )}
//           </AnimatePresence>

//           {/* Read More / Show Less Button */}
//           <motion.button 
//             className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
//             whileHover={{ scale: 1.05 }}
//             onClick={() => setShowMore(!showMore)}
//           >
//             {showMore ? "Show Less" : "Read More"}
//           </motion.button>
//         </motion.div>

//         {/* Right Side: Image */}
//         <motion.div 
//           className="md:w-1/2 flex justify-center"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="relative">
//           <img 
//       src="/images/banner.webp" 
//       alt="About Us"
//       className="w-80 md:w-96 h-auto object-cover custom-clip-image border-4 border-orange-500 p-1"
//     />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImage from "../assets/images/banner.webp";

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-10">
        {/* Left Side: Image with Stylish Shape */}
        <motion.div 
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 md:w-96">
            <div className="absolute -top-2 -left-2 w-full h-full bg-orange-200 rounded-[40%_60%_70%_30%/50%_30%_70%_50%] opacity-10"></div>
            <img 
              src={aboutImage} 
              alt="About Us" 
              className="w-full h-auto border-4 border-orange-500 object-cover rounded-[40%_60%_70%_30%/50%_30%_70%_50%] shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#4241a1] border-l-4 border-orange-500 pl-4">
            Who We Are?
          </h2>
          <p className="text-gray-700 mt-4 text-lg font-semibold">
            Delivering Excellence in Food Processing Machinery Since 1956.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed">
            We "Duro Overseas Trading House" are a reputed organization offering unmatched quality range of Kitchen Machineries & Food Processing Machines.
          </p>

          {/* Expandable Content */}
          <AnimatePresence>
            {showMore && (
              <motion.p 
                className="text-gray-600 mt-2 leading-relaxed"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                Established in 1956, we have gained a leading position in the food industry. Our well-established base in Coimbatore (Tamil Nadu) helps us cater to domestic and global clients with efficiency.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Read More / Show Less Button */}
          <motion.button 
            className="mt-6 bg-[#fa4d9e] text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

