import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProductAction } from "../redux/actions/productAction";
import { data } from "autoprefixer";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetails = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => console.log("Err:", err))
    dispatch(selectedProductAction(res.data));
  };


  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h2 className="text-5xl font-bold text-blue-500">
        This is the productDetails page
      </h2>
      <img src={product.image} alt="/" />
      <h2 className="text-3xl font-bold text-red-500">{product.category}</h2>
    </div>
  );
};

export default ProductDetails;
