import Home from "./components/Home";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Certificates from "./components/Certificates";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
// import ProductGrid from "./components/ProductsBackup";

function App() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <Home />
      <Products />
      <AboutUs />
      <Blogs />
      {/* <ProductGrid /> */}
      <Testimonials />
      <Certificates />
      <ContactUs />
      <Footer />

    </div>
  );
}

export default App;
