import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

  // object { key string type: object values are like ProductInCart }
  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

    setShoppingCart( prevShoppingCart => {
      // ? Filter out obj from state{}
      if ( count === 0 ) {
        // De-structure obj to delete from state{}
        const { [product.id]: toDelete, ...rest } = prevShoppingCart;
        return rest;
      }

      return { ...prevShoppingCart, [product.id]: { ...product, count } }
    })
  }

  return { onProductCountChange, shoppingCart, }
}
