// function Certificates() {
//     return (
//       <section id="certificates" className="py-0 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Certified by</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           <img
//             src="src/assets/images/crisil.png"
//             alt="Certificate 1"
//             className="w-[100px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//           />
//           <img
//             src="src/assets/images/tuev.png"
//             alt="Certificate 2"
//             className="w-[100px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//           />
//         </div>
//       </section>
//     );
//   }
  
//   export default Certificates;
  

import crisil from "../assets/images/crisil.png";
import tuev from "../assets/images/tuev.png";

function Certificates() {
  return (
    <section id="certificates" className="py-10 bg-gray-100 text-center px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Certified by</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <figure>
          <img
            src={crisil}
            alt="Crisil Certification"
            className="max-w-[120px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
          <figcaption className="sr-only">Crisil Certified</figcaption>
        </figure>
        <figure>
          <img
            src={tuev}
            alt="TÜV Certification"
            className="max-w-[120px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
          <figcaption className="sr-only">TÜV Certified</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Certificates;
