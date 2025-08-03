"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user === null) {
      router.push("/week-10");
    } else {
      loadItems();
    }
  }, [user]);

  const loadItems = async () => {
    const data = await getItems(user.uid);
    setItems(data);
  };

  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    setItems([...items, { id, ...item }]);
  };

  if (!user) return null;

  return (
    <div style={{ padding: 20 }}>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={() => {}} />
    </div>
  );
}
