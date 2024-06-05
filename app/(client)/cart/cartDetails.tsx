"use client";

import useCartService from "@/lib/zustand/hooks/useCartStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartDetails() {
  const router = useRouter();
  const { items, itemsPrice, decrease, increase } = useCartService();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div>
      <h1 className="py-4 text-2xl">Shopping Cart</h1>
    </div>
  );
}
