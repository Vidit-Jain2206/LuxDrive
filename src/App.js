import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SignUpLogin from "./components/SignUpLogin";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignUpLogin />} />
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
