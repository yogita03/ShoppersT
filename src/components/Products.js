import React from 'react';


const Products = ({products,addToCart}) => {

    const addToCartHandler = () => {
        addToCart();
    }




  return (
    <>
      <div className='products'>

        {
            products.map((product,index) => (

                <div key={index}>

                    <h3>Tshirt Name : {product.inputName} ||  Description : {product.inputDescription} ||  Price : {product.inputPrice} ||  Size : {product.inputSize}
                    <button onClick={() => addToCartHandler(product)}>Add to Cart</button></h3>


                </div>

            ))
        }


      </div>
    </>
  )
}

export default Products;