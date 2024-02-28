import React from 'react'
import { useSelector } from 'react-redux'


const ProductComponent = () => {
  // it takes the state of our whole application and returns the part of the state we want
  // you can do something like const shirts = useSelector((state) => state.shirts)
  const products = useSelector((state) => state.allProducts.products)
  // const {name, price} = products[0]
  console.log(products);
  return (
    <div>
      <div className="cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            {/* <div className="header">{name}</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
