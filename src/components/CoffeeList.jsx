import React from "react";
import CoffeeItem from "./CoffeeItem";

export default function CoffeeList({ coffees }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
      {coffees?.map((item) => (
        <CoffeeItem key={item.id} item={item} />
      ))}
    </div>
  );
}
