"use client";
import { DistrictDropdown } from "./DistrictDropdown";
import { PropertyDropdown } from "./PropertyDropdown";
import { PriceRangeDropdownt } from "./PriceRangeDropdownt";
import { RiSearch2Line } from "react-icons/ri";
import { useContext } from "react";
import { HouseContext } from "../context/HouseContext";

export const Search = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <PropertyDropdown />
      <DistrictDropdown />
      <PriceRangeDropdownt />
      <button
        onClick={() => handleClick()}
        className="bg-emerald-700 hover:bg-emerald-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};
