import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components"

export const Cart = () => {
  useTitle("Cart")
  const products = [
    {"id": 1, "name": "Scitron Advance Whey Protein", "price": 2099, "image": "/assets/images/Product-1.jpg"},
    {"id": 2, "name": "Isopure Low Carb Whey Protein Isolate Powder", "price": 4239, "image": "/assets/images/Product-2.jpg"}
  ]
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Item: {products.length}
        </h1>
        {products.map((product)=>(
          <CartCard key={product} product={product}/> 
        )) }
      </section>
    </main>
  )
}
