import Headerr from "../_components/Headerr";
import Product from "../_components/Product";
import { getData } from "../../lib/api";
export default async function Home() {
  const products = await getData();
  console.log(products);
  return (
    <div>
      <Headerr />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.nodes.map((product: any) => (
            <Product
              key={product.id}
              id={product.id}
              Name={product.name}
              ImageSourceUrl={product.image.imageSourceUrl}
              PriceRange="$19.99"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
