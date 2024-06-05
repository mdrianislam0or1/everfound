"use client";

import ProductItem from "@/components/Products/ProductItem";
import { Product } from "@/lib/Model/ProductModel";
import { data } from "@/lib/data";
import React from "react";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-6">New Arrivals</h2>
      <p className="text-center mb-10">We have your occasion covered</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product: Product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-primary">DISCOVER MORE</button>
      </div>
    </section>
  );
}
