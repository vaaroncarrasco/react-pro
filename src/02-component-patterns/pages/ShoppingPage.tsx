import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"; // index.ts

const product = {
  id: '0',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>

        <ProductCard product={ product }>

          <ProductCard.Image img={ product.img } />
          <ProductCard.Title title={ 'Huge Dildo' } />
          <ProductCard.Buttons  />

        </ProductCard>

        <ProductCard product={ product }>

          <ProductImage img={ product.img } />
          <ProductTitle title={ product.title } />
          <ProductButtons  />

        </ProductCard>


      </div>
    </div>
  )
}
