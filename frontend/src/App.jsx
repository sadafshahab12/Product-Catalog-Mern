import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="font-jost">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
