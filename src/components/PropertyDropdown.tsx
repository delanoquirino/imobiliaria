"use client";
import { Menu } from "@headlessui/react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";

import { useContext, useState } from "react";
import { HouseContext } from "../context/HouseContext";



export const PropertyDropdown = () => {
 
  const {property, setProperty, properties} = useContext(HouseContext)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left py-5">
        <BsHouseDoor className="dropdown-icon-primary" />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {
              property == "Propriedade:" ?( "Propriedade:"): (`Propriedade: ${property}`)
            }
          </div>
          <div className="text-[13px]">Selecione o Tipo</div>
        </div>
          {isOpen ? (<RiArrowUpSLine className="dropdown-icon-secondary"/>): (<RiArrowDownSLine className="dropdown-icon-secondary"/>)  }
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((PropertiesName: string, i: number) => {
          return (
            <Menu.Item onClick={() => setProperty(PropertiesName)} className="cursor-pointer hover:text-emerald-700 hover:bg-emerald-200 p-1 transition " as='li' key={`i + ${PropertiesName}`}>{PropertiesName}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};
