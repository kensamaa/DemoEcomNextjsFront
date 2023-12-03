import Headerr from "../_components/Headerr";
import { getData } from "../../lib/api";
import Image from 'next/image'
export default async function Home() {
  const products = await getData();
  console.log(products);
  return (
    <div>
      <Headerr />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.nodes.map((product: any) => (
      <div
        key={product.id}
        className="flex bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="flex-none w-48 relative">
          <img
            src={product.image.sourceUrl}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
            width="100%"
            height="100%"
          />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">{product.name}</h1>
            <div className="text-xl font-semibold text-gray-500">$19.99</div>
          </div>
          <div className="flex space-x-3 mb-4 text-sm font-medium">
            <div className="flex-auto flex space-x-3">
              <button
                className="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
                type="button"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      
    </div>
  );
}
