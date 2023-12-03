"use client";
import Link from "next/link";

const Headerr = () => {
  return (
    <>
      <div>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                  <Link href="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/Products">
                    <p>Products</p>
                  </Link>
                </li>
                <li>
                  <Link href="/Panier">
                    <p>Panier</p>
                  </Link>
                </li>
              </ul>
              <button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headerr;
