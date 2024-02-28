import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
