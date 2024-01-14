import { useTitle } from "../hooks/useTitle"
import { ProductCard } from "../components"

export const Home = () => {
    useTitle("Home")
    const products = [
        {"id": 1, "name": "Scitron Advance Whey Protein", "price": 2099, "image": "/assets/images/Product-1.jpg"},
        {"id": 2, "name": "Isopure Low Carb Whey Protein Isolate Powder", "price": 4239, "image": "/assets/images/Product-2.jpg"},
        {"id": 3, "name": "Fast&Up 100% Pure European Whey Protein Isolate, Ultralow Carbs", "price": 2687, "image": "/assets/images/Product-3.jpg"},
        {"id": 4, "name": "MUSCLEBLAZE Biozyme Performance", "price": 2249, "image": "/assets/images/Product-4.jpg"},
        {"id": 5, "name": "Optimum Nutrition (ON) Gold Standard 100% Protein Powder", "price": 2899, "image": "/assets/images/Product-5.jpg"}
      ]  
    return (
    <main>
        <section className="products">
            {products.map((product)=>(
                <ProductCard product={product} />
            ))}
            

        </section>
    </main>
  )
}
