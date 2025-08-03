"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ItemList from "./item-list";
import items from "./items.json"; // ✅ import your static items

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/week-9");
    }
  }, [user]);

  if (!user) return null;

  return (
    <div style={{ padding: 20 }}>
      <h1>Shopping List</h1>
      <ItemList items={items} onItemSelect={() => {}} />
    </div>
  );
}
