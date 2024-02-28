import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productAction'

const ProductListing = () => {
  // the useSelector allows us to get access to our state
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch(err => console.log(err))

    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  },[])
  return (
    <div>
      <ProductComponent />
    </div>
  )
}

export default ProductListing
