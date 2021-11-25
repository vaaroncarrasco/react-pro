import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"; // index.ts

import { products } from "../data/products";
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      
      <ProductCard
        key={ product.id }
        product={ product }
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => (
            <>
              <ProductImage className="custom-image"style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }} />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />

              <button onClick={ reset }>reset</button>
              <button onClick={ () => increaseBy(-2) }>-2</button>
              {
                !isMaxCountReached && <button onClick={ () => increaseBy(2) }>+2</button>
              }
              <span>{ count } - { maxCount }</span>

            </>
          )
        }
      </ProductCard>
    </div>
  )
}
