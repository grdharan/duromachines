// import { useState } from "react";
// import product1 from "../assets/images/product_img1.webp";
// import product2 from "../assets/images/product_img2.webp";
// import product3 from "../assets/images/product_img3.webp";
// import product4 from "../assets/images/product_img4.webp";
// import product5 from "../assets/images/product_img5.webp";
// import product6 from "../assets/images/product_img6.webp";

// const allProducts = [
//   {
//     id: 1,
//     name: "Salamander",
//     description:
//       "SS made, heating up controlled by a symostat, Galvanized steel gridiron and heating elements protection grill, Easy",
//     image: product1,
//     category: "Hotels and Restaurants",
//   },
//   {
//     id: 2,
//     name: "Cooking Kettle",
//     description:
//       "We are providing an array of Cooking Kettle. These kettles are completely programmable and well",
//     image: product2,
//     category: "Hotels and Restaurants",
//   },
//   {
//     id: 3,
//     name: "Combi Oven",
//     description:
//       "Combi steamers (also called combi-steamers, hot-air steamers, combination steam-convection ovens, or simply...",
//     image: product3,
//     category: "Industrial Canteens",
//   },
//   {
//     id: 4,
//     name: "Dough Mixer",
//     description: "High-efficiency dough mixer, ideal for commercial kitchens.",
//     image: product4,
//     category: "Industrial Canteens",
//   },
//   {
//     id: 5,
//     name: "Bain Marie",
//     description: "Perfect for keeping food warm in catering businesses.",
//     image: product5,
//     category: "Catering Companies",
//   },
//   {
//     id: 6,
//     name: "Food Warmer",
//     description: "Maintains food temperature for extended periods.",
//     image: product6,
//     category: "Catering Companies",
//   },
// ];


// function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("Hotels and Restaurants");

//   // Filter products based on selected category
//   const filteredProducts = allProducts.filter(
//     (product) => product.category === selectedCategory
//   );

//   return (
//     <section id="products" className="min-h-[500px] py-10">
//     <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
//       {/* Sidebar */}
//       <div className="md:w-1/4 w-full bg-gray-200 p-4 rounded-lg shadow-md">
//         <h2 className="font-bold text-lg mb-2">Browse Products</h2>
//         <ul>
//           {["Hotels and Restaurants", "Industrial Canteens", "Catering Companies"].map(
//             (category) => (
//               <li
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`cursor-pointer p-2 rounded transition duration-300 ${
//                     selectedCategory === category ? "bg-[#4241a1] text-white" : "hover:bg-gray-300"
//                   }`}
//               >
//                 {category}
//               </li>
//             )
//           )}
//         </ul>
//       </div>

//       {/* Products Grid */}
//       <div className="md:w-3/4 w-full">
//           <h2 className="text-2xl font-bold text-[#4241a1] mb-4">{selectedCategory}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg transition transform hover:scale-105">
//                   <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
//                   <h3 className="font-bold mt-2 text-lg">{product.name}</h3>
//                   <p className="text-sm text-gray-600">{product.description}</p>
//                   <button className="mt-2 text-[#fa4d9e] hover:underline">→</button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">No products available for this category.</p>
//             )}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


// export default Products;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import product1 from "../assets/images/product_img1.webp";
// import product2 from "../assets/images/product_img2.webp";
// import product3 from "../assets/images/product_img3.webp";
// import product4 from "../assets/images/product_img4.webp";
// import product5 from "../assets/images/product_img5.webp";
// import product6 from "../assets/images/product_img6.webp";

// const allProducts = [
//   {
//     id: 1,
//     name: "Salamander",
//     description:
//       "SS made, heating up controlled by a symostat, Galvanized steel gridiron and heating elements protection grill, Easy",
//     image: product1,
//     category: "Hotels and Restaurants",
//   },
//   {
//     id: 2,
//     name: "Cooking Kettle",
//     description:
//       "We are providing an array of Cooking Kettle. These kettles are completely programmable and well",
//     image: product2,
//     category: "Hotels and Restaurants",
//   },
//   {
//     id: 3,
//     name: "Combi Oven",
//     description:
//       "Combi steamers (also called combi-steamers, hot-air steamers, combination steam-convection ovens, or simply...",
//     image: product3,
//     category: "Industrial Canteens",
//   },
//   {
//     id: 4,
//     name: "Dough Mixer",
//     description: "High-efficiency dough mixer, ideal for commercial kitchens.",
//     image: product4,
//     category: "Industrial Canteens",
//   },
//   {
//     id: 5,
//     name: "Bain Marie",
//     description: "Perfect for keeping food warm in catering businesses.",
//     image: product5,
//     category: "Catering Companies",
//   },
//   {
//     id: 6,
//     name: "Food Warmer",
//     description: "Maintains food temperature for extended periods.",
//     image: product6,
//     category: "Catering Companies",
//   },
// ];

// function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("Hotels and Restaurants");
//   const filteredProducts = allProducts.filter((product) => product.category === selectedCategory);

//   return (
//     <section id="products" className="min-h-[500px] py-10 bg-gray-100">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 px-4">
//         {/* Sidebar */}
//         <div className="md:w-1/4 w-full bg-white p-4 rounded-lg shadow-lg">
//           <h2 className="font-bold text-lg mb-3 text-[#4241a1]">Browse Products</h2>
//           <ul>
//             {["Hotels and Restaurants", "Industrial Canteens", "Catering Companies"].map((category) => (
//               <li
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`cursor-pointer p-2 rounded-lg transition duration-300 font-medium text-gray-700 ${selectedCategory === category ? "bg-[#4241a1] text-white" : "hover:bg-gray-200"}`}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Products Grid */}
//         <div className="md:w-3/4 w-full">
//           <h2 className="text-2xl font-bold text-[#4241a1] mb-4 border-2 border-[#4241a1] px-4 py-2 rounded-lg inline-block shadow-md">{selectedCategory}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <motion.div
//                   key={product.id}
//                   className="bg-white shadow-lg p-4 rounded-xl transition transform hover:scale-105 hover:shadow-xl"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover rounded-lg border border-gray-200"
//                   />
//                   <h3 className="font-bold mt-3 text-lg text-gray-800">{product.name}</h3>
//                   <p className="text-sm text-gray-600 mt-1">{product.description}</p>
//                   <button className="mt-3 bg-[#fa4d9e] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#e63c86] transition">View Details</button>
//                 </motion.div>
//               ))
//             ) : (
//               <p className="text-gray-500">No products available for this category.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Products;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import product1 from "../assets/images/product_img1.webp";
// import product2 from "../assets/images/product_img2.webp";
// import product3 from "../assets/images/product_img3.webp";
// import product4 from "../assets/images/product_img4.webp";
// import product5 from "../assets/images/product_img5.webp";
// import product6 from "../assets/images/product_img6.webp";

// const allProducts = [
//   { id: 1, name: "Salamander", description: "SS made, heating up controlled by a symostat, Galvanized steel gridiron and heating elements protection grill, Easy", image: product1, category: "Hotels and Restaurants" },
//   { id: 2, name: "Cooking Kettle", description: "We are providing an array of Cooking Kettle...", image: product2, category: "Hotels and Restaurants" },
//   { id: 3, name: "Combi Oven", description: "Combi steamers, also called combi-steamers...", image: product3, category: "Industrial Canteens" },
//   { id: 4, name: "Dough Mixer", description: "High-efficiency dough mixer, ideal for commercial kitchens.", image: product4, category: "Industrial Canteens" },
//   { id: 5, name: "Bain Marie", description: "Perfect for keeping food warm in catering businesses.", image: product5, category: "Catering Companies" },
//   { id: 6, name: "Food Warmer", description: "Maintains food temperature for extended periods.", image: product6, category: "Catering Companies" },
// ];

// function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("Hotels and Restaurants");
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Filter products based on selected category
//   const filteredProducts = allProducts.filter(product => product.category === selectedCategory);

//   return (
//     <section id="products" className="min-h-[500px] py-10">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        
//         {/* Sidebar */}
//         <div className="md:w-1/4 w-full bg-gray-200 p-4 rounded-lg shadow-md">
//           <h2 className="font-bold text-lg mb-2">Browse Products</h2>
//           <ul>
//             {["Hotels and Restaurants", "Industrial Canteens", "Catering Companies"].map(category => (
//               <li
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`cursor-pointer p-2 rounded transition duration-300 ${
//                   selectedCategory === category ? "bg-[#4241a1] text-white" : "hover:bg-gray-300"
//                 }`}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Products Grid */}
//         <div className="md:w-3/4 w-full">
//           <h2 className="text-2xl font-bold text-[#4241a1] mb-4 border-2 border-[#4241a1] px-4 py-2 rounded-lg inline-block shadow-md">
//             {selectedCategory}
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map(product => (
//                 <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg transition transform hover:scale-105">
//                   <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
//                   <h3 className="font-bold mt-2 text-lg">{product.name}</h3>
//                   <p className="text-sm text-gray-600">{product.description.substring(0, 50)}...</p>
                  
//                   {/* View Button */}
//                   <button 
//                     onClick={() => setSelectedProduct(product)}
//                     className="mt-2 bg-[#fa4d9e] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#d43b80] transition"
//                   >
//                     View
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">No products available for this category yet.</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal for Product Details */}
//       {selectedProduct && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
//           onClick={() => setSelectedProduct(null)} // Close when clicking outside
//         >
//           <div 
//             className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full flex relative transform transition-all scale-100 hover:scale-[1.02]"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//           >
//             {/* Left: Product Image */}
//             <div className="w-1/2 p-2">
//               <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
//             </div>

//             {/* Right: Product Details */}
//             <div className="w-1/2 p-4 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold text-[#4241a1]">{selectedProduct.name}</h2>
//                 <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
//               </div>

//               {/* Close Button */}
//               <button 
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//                 onClick={() => setSelectedProduct(null)}
//               >
//                 ✖
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Products;


// import { useState } from "react";
// import product1 from "../assets/images/product_img1.webp";
// import product2 from "../assets/images/product_img2.webp";
// import product3 from "../assets/images/product_img3.webp";
// import product4 from "../assets/images/product_img4.webp";
// import product5 from "../assets/images/product_img5.webp";
// import product6 from "../assets/images/product_img6.webp";

// const allProducts = [
//   { id: 1, name: "Salamander", description: "SS made, heating up controlled by a symostat, Galvanized steel gridiron and heating elements protection grill.", image: product1, category: "Hotels and Restaurants" },
//   { id: 2, name: "Cooking Kettle", description: "We are providing an array of Cooking Kettle for bulk cooking needs.", image: product2, category: "Hotels and Restaurants" },
//   { id: 3, name: "Combi Oven", description: "Combi steamers, also called combi-steamers, are professional cooking appliances.", image: product3, category: "Industrial Canteens" },
//   { id: 4, name: "Dough Mixer", description: "High-efficiency dough mixer, ideal for commercial kitchens.", image: product4, category: "Industrial Canteens" },
//   { id: 5, name: "Bain Marie", description: "Perfect for keeping food warm in catering businesses.", image: product5, category: "Catering Companies" },
//   { id: 6, name: "Food Warmer", description: "Maintains food temperature for extended periods.", image: product6, category: "Catering Companies" },
//   { id: 7, name: "Salamander", description: "SS made, heating up controlled by a symostat, Galvanized steel gridiron and heating elements protection grill.", image: product6, category: "Hotels and Restaurants" },
//   { id: 8, name: "Bain Marie", description: "Perfect for keeping food warm in catering businesses.", image: product5, category: "Hotels and Restaurants" },

// ];

// function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("Hotels and Restaurants");
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const filteredProducts = allProducts.filter(product => product.category === selectedCategory);

//   return (
//     <section id="products" className="min-h-[500px] py-10">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        
//         {/* Sidebar for Categories */}
//         <aside className="md:w-1/4 w-full bg-gray-200 p-4 rounded-lg shadow-md">
//           <h2 className="font-bold text-lg mb-2">Browse Products</h2>
//           <ul>
//             {["Hotels and Restaurants", "Industrial Canteens", "Catering Companies"].map(category => (
//               <li
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`cursor-pointer p-2 rounded transition duration-300 ${
//                   selectedCategory === category ? "bg-[#4241a1] text-white" : "hover:bg-gray-300"
//                 }`}
//                 role="button"
//                 aria-label={`View products in ${category}`}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </aside>

//         {/* Products Grid */}
//         <div className="md:w-3/4 w-full">
//           <h2 className="text-2xl font-bold text-[#4241a1] mb-4 border-2 border-[#4241a1] px-4 py-2 rounded-lg inline-block shadow-md">
//             {selectedCategory}
//           </h2>
//           <div className="relative h-[500px] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 border border-gray-300 rounded-lg p-4">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     {filteredProducts.length > 0 ? (
//       filteredProducts.map(product => (
//         <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg transition transform hover:scale-105">
//           <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
//           <h3 className="font-bold mt-2 text-lg">{product.name}</h3>
//           <p className="text-sm text-gray-600">{product.description.substring(0, 50)}...</p>

//           {/* View Button */}
//           <button 
//             onClick={() => setSelectedProduct(product)}
//             className="mt-2 bg-[#fa4d9e] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#d43b80] transition"
//           >
//             View
//           </button>
//         </div>
//       ))
//     ) : (
//       <p className="text-gray-500">No products available for this category yet.</p>
//     )}
//   </div>
// </div>

//         </div>
//       </div>

//       {/* Modal for Product Details */}
//       {selectedProduct && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
//           onClick={() => setSelectedProduct(null)}
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="product-title"
//         >
//           <div 
//             className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full flex relative transform transition-all scale-100 hover:scale-[1.02]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Product Image */}
//             <div className="w-1/2 p-2">
//               <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg shadow-md" loading="lazy" />
//             </div>

//             {/* Product Details */}
//             <div className="w-1/2 p-4 flex flex-col justify-between">
//               <div>
//                 <h2 id="product-title" className="text-2xl font-bold text-[#4241a1]">{selectedProduct.name}</h2>
//                 <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
//               </div>

//               {/* Close Button */}
//               <button 
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//                 onClick={() => setSelectedProduct(null)}
//                 aria-label="Close product details"
//               >
//                 ✖
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Products;


import { useState, useEffect, useRef } from "react";
import product1 from "../assets/images/product_img1.webp";
import product2 from "../assets/images/product_img2.webp";
import product3 from "../assets/images/product_img3.webp";
import product4 from "../assets/images/product_img4.webp";
import product5 from "../assets/images/product_img5.webp";
import product6 from "../assets/images/product_img6.webp";

const allProducts = [
  { id: 1, name: "Salamander", description: "SS made, heating up controlled by a symostat, Galvanized steel gridiron and heating elements protection grill.", image: product1, category: "Hotels and Restaurants" },
  { id: 2, name: "Cooking Kettle", description: "We are providing an array of Cooking Kettle for bulk cooking needs.", image: product2, category: "Hotels and Restaurants" },
  { id: 3, name: "Combi Oven", description: "Combi steamers, also called combi-steamers, are professional cooking appliances.", image: product3, category: "Industrial Canteens" },
  { id: 4, name: "Dough Mixer", description: "High-efficiency dough mixer, ideal for commercial kitchens.", image: product4, category: "Industrial Canteens" },
  { id: 5, name: "Bain Marie", description: "Perfect for keeping food warm in catering businesses.", image: product5, category: "Catering Companies" },
  { id: 6, name: "Food Warmer", description: "Maintains food temperature for extended periods.", image: product6, category: "Catering Companies" },
  { id: 7, name: "Salamander", description: "SS made, heating up controlled by a symostat, Galvanized steel gridiron and heating elements protection grill.", image: product6, category: "Hotels and Restaurants" },
  { id: 8, name: "Bain Marie", description: "Perfect for keeping food warm in catering businesses.", image: product5, category: "Hotels and Restaurants" },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Hotels and Restaurants");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  },
   []);

   useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [selectedProduct]);
  

  const filteredProducts = allProducts.filter(product => product.category === selectedCategory);

  return (
    <section 
      id="products" 
      ref={sectionRef} 
      className={`min-h-[500px] py-10 transition-transform duration-700 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-[100px] opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* Sidebar for Categories */}
        <aside className="md:w-1/4 w-full bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="font-bold text-lg mb-2">Browse Products</h2>
          <ul>
            {["Hotels and Restaurants", "Industrial Canteens", "Catering Companies"].map(category => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer p-2 rounded transition duration-300 ${
                  selectedCategory === category ? "bg-[#4241a1] text-white" : "hover:bg-gray-300"
                }`}
                role="button"
                aria-label={`View products in ${category}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <div className="md:w-3/4 w-full">
          <h2 className="text-2xl font-bold text-[#4241a1] mb-4 border-2 border-[#4241a1] px-4 py-2 rounded-lg inline-block shadow-md">
            {selectedCategory}
          </h2>
          <div className="relative h-[500px] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={`${product.category}-${product.id}`} className="bg-white shadow-lg p-4 rounded-lg transition transform hover:scale-105">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
                    <h3 className="font-bold mt-2 text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description.substring(0, 50)}...</p>

                    {/* View Button */}
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="mt-2 bg-[#fa4d9e] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#d43b80] transition"
                    >
                      View
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No products available for this category yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-title"
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full flex relative transform transition-all scale-100 hover:scale-[1.02]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Product Image */}
            <div className="w-1/2 p-2">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg shadow-md" loading="lazy" />
            </div>

            {/* Product Details */}
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <div>
                <h2 id="product-title" className="text-2xl font-bold text-[#4241a1]">{selectedProduct.name}</h2>
                <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
              </div>

              {/* Close Button */}
              <button 
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
              >
                ✖
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
