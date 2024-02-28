import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductListing />} />
      </Routes>
    </>
  );
}

export default App;
