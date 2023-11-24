import React, { useEffect, useState } from "react";
import CoffeeHeader from "./CoffeeHeader";
import CoffeeList from "./CoffeeList";

export default function CoffeeCollection() {
  const [coffees, setCoffees] = useState([]);
  const [filteredCoffees, setfilteredCoffees] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    async function fetchCoffees() {
      fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      )
        .then((response) => response.json())
        .then((data) => {
          setCoffees(data);
          setfilteredCoffees(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchCoffees();
  }, []);

  useEffect(() => {
    if (category === "available") {
      setfilteredCoffees(coffees.filter((item) => item.available === true));
    }
    if (category === "all") {
      setfilteredCoffees(coffees);
    }
  }, [category]);

  return (
    <div className="bg-[#1B1D1F] rounded-xl width-90 p-8">
      <CoffeeHeader category={category} setCategory={setCategory} />
      {filteredCoffees.length === 0 && (
        <p className="text-center text-2xl mt:8 text-slate-300">
          Loading Coffees...
        </p>
      )}
      <CoffeeList coffees={filteredCoffees} />
    </div>
  );
}
