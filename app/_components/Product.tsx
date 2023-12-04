"use client";
import { ProductItemProps } from "../_interfaces/Iproduct";

const Product = ({
  id,
  ImageSourceUrl,
  Name,
  PriceRange,
}: ProductItemProps) => {
  return (
    <>
      <div
        key={id}
        className="flex bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="flex-none w-48 relative">
          <img
            src={ImageSourceUrl}
            alt={Name}
            className="absolute inset-0 w-full h-full object-cover"
            width="100%"
            height="100%"
          />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">{PriceRange}</h1>
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
    </>
  );
};

export default Product;
