'use client'
import { fetchProducts, selectAllProducts, selectProductStatus } from '@/redux/feature/products/productSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Products() {
    const dispatch = useDispatch()
       // get products from redux store
  const products = useSelector(selectAllProducts);
  // get products status from redux store | status: 'idle' | 'loading' | 'succeeded' | 'failed'
    const productsStatus = useSelector(selectProductStatus);
    useEffect(()=>{
        dispatch(fetchProducts({ limit: 12, offset: 1 }));
    }, []);
   return(
    <main>
        {
            products.map((product)=> (
                <div key={product.id}>
                    <p>{product.title}</p>
                </div>
            ))
        }
    </main>
   )
}
    
  

