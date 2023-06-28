import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

import SideNavbar from "./components/SideNavbar";
import { useSelector } from "react-redux";
function App() {
  const mobileMenu = useSelector((state) => state.mobileMenu.mode);
  return (
    <BrowserRouter>
      <div className="flex flex-col overflow-hidden">
        <Header />
        {mobileMenu && <SideNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent/:type" element={<ProductList />} />
          <Route path="/product/:code" element={<ProductDetails />} />
          <Route path="/bodytype/:type" element={<ProductList />} />
          <Route path="/brand/:brand" element={<ProductList />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
