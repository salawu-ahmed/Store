import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  // it takes the state of our whole application and returns the part of the state we want
  // you can do something like const shirts = useSelector((state) => state.shirts)
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div>
      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <>
                <div className="image">
                  <img src={product.image} alt="/" />
                </div>
                <div className="content">
                  <div className="header">
                    {product.title}
                    <div className="price">$ {product.price}</div>
                    <div className="category">{product.category}</div>
                  </div>
                </div>
              </>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
