"use client";

import { data } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AddToCart from "@/components/Products/AddToCart";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.products.find((x) => x.slug === params.slug);
  const router = useRouter();

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div>
        <button
          onClick={() => router.back()}
          className="btn btn-secondary mb-6"
        >
          Back to The Home
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col space-y-4">
          <div className="w-full h-96 bg-gray-200 flex justify-center items-center overflow-hidden">
            <Image
              width={500}
              height={500}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
          {/* Add more images if available */}
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-24 bg-gray-200 flex justify-center items-center overflow-hidden"
              >
                <Image
                  width={100}
                  height={100}
                  src={product.image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Brand: </span>
            {product.brand}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Category: </span>
            {product.category}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Rating: </span>
            {product.rating} ({product.numReviews} reviews)
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold">Colors: </span>
            <div className="flex ml-2">
              {product.colors?.map((color, index) => (
                <span
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-gray-200 ml-1"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold">Sizes: </span>
            <div className="flex ml-2">
              {product.sizes?.map((size, index) => (
                <span
                  key={index}
                  className="px-2 py-1 border border-gray-200 rounded ml-1"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center mb-4">
            <span className="font-semibold">Sizes: </span>
            <div className="flex ml-2">
              {product.countInStock !== 0 && (
                <div className=" justify-center">
                  <AddToCart
                    item={{ ...product, qty: 0, color: "", size: "" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
