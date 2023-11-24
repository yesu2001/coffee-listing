import React from "react";
import goldStar from "../assets/Star_fill.svg";
import star from "../assets/Star.svg";

export default function CoffeeItem({ item }) {
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <div className="flex-[0.7] rounded-xl overflow-hidden">
          <img src={item.image} />
        </div>
        <div className="flex-[0.3] space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[#FEF7EE] font-semibold">{item.name}</p>
            <p className="bg-[#BEE3CC] px-1 rounded-md text-xs font-semibold">
              {item.price}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={!item.rating ? star : goldStar}
              alt="star-icon"
              width={20}
            />
            {!item.rating ? (
              <span className="text-[#6F757C] ml-1 text-sm">No rating</span>
            ) : (
              <p className="text-[#FEF7EE] font-semibold text-sm">
                {item.rating}
                <span className="text-[#6F757C] ml-1 font-normal">
                  ({item.votes})
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
