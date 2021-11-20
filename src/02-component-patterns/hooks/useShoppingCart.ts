import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

  // object { key string type: object values are like ProductInCart }
  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

    setShoppingCart( prevShoppingCart => {

      const productInCart: ProductInCart = prevShoppingCart[product.id] || { ...product, count: 0 };

      // add product
      if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
        productInCart.count += count
        return {
          ...prevShoppingCart,
          [product.id]: productInCart
        }
      }

      // delete product
      const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      return rest;

      // other way
      // // ? Filter out obj from state{}
      // if ( count === 0 ) {
      //   // De-structure obj to delete from state{}
      //   const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      //   return rest;
      // }

      // return {
      //   ...prevShoppingCart,
      //   [product.id]: { ...product, count }
      // }
    })
  }

  return {
    onProductCountChange,
    shoppingCart,
  }
}
