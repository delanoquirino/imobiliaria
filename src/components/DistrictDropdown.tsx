"use client";
import { Menu } from "@headlessui/react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { useContext, useState } from "react";
import { HouseContext } from "../context/HouseContext";


export const DistrictDropdown = () => {
  const { district, setDistrict, districts } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left py-5">
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {
              district == "Região: " ?( "Região: "): (`Região: ${district}`)
            }
          </div>
          <div className="text-[13px]">Selecione uma Região</div>
        </div>
          {isOpen ? (<RiArrowUpSLine className="dropdown-icon-secondary"/>): (<RiArrowDownSLine className="dropdown-icon-secondary"/>)  }
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {districts.map((districtName, i) => {
          return (
            <Menu.Item onClick={() => setDistrict(districtName)} className="cursor-pointer hover:text-emerald-700 hover:bg-emerald-200 transition p-1" as='li' key={`i + ${districtName}`}>{districtName}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};
