import React from "react";

export default function CoffeeHeader({ category, setCategory }) {
  return (
    <div className="w-full flex flex-col items-center justify-center  my-10">
      <div className="xs:w-[90%] sm:w-[90%] md:w-[60%] text-center space-y-4">
        <h1 className="text-[#FEF7EE] text-3xl font-bold">Our Collection</h1>
        <p className="text-[#6F757C] text-center font-semibold">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="flex item-center justify-center gap-4">
          <button
            className={`text-[#FEF7EE] text-center ${
              category === "all" ? "bg-[#6F757C]" : ""
            } px-4 py-1 rounded-lg cursor-pointer`}
            onClick={() => setCategory("all")}
          >
            All Products
          </button>
          <button
            className={`text-[#FEF7EE] text-center  ${
              category === "available" ? "bg-[#6F757C]" : ""
            } px-4 py-1 rounded-lg cursor-pointer`}
            onClick={() => setCategory("available")}
          >
            Available Now
          </button>
        </div>
      </div>
    </div>
  );
}
