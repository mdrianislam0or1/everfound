"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/lib/Model/ProductModel";
import Link from "next/link";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="group relative border rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-72 bg-gray-200 flex justify-center items-center overflow-hidden">
        <Link href={`/product/${product.slug}`}>
          <Image
            width={400}
            height={400}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Link>
        {product.banner && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            {product.banner}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center mt-2">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          {product.colors && product.colors.length > 0 && (
            <div className="flex ml-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-4 h-4 rounded-full border-2 border-gray-200 ml-1"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
