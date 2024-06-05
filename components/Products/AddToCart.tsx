"use client";

import { OrderItem } from "@/lib/Model/OrderModel";
import useCartService from "@/lib/zustand/hooks/useCartStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter();

  const { items, increase, decrease } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();
  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);
  const addToCartHandler = () => {
    increase(item);
  };

  return existItem ? (
    <div>
      <button type="button" onClick={() => decrease(existItem)}>
        -
      </button>
      <span>{existItem.qty}</span>
      <button type="button" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <button className="btn btn-primary" onClick={addToCartHandler}>
      Add To Cart
    </button>
  );
}
