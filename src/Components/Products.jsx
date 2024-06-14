import { useProducts } from "../context/productContext";
import Card from "./Card";

const Products = () => {
  const {products} = useProducts();

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
