"use client";
import { Menu } from "@headlessui/react";
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { housesData } from "@/data";
import { useContext, useEffect, useState } from "react";
import { HouseContext } from "../context/HouseContext";

const houses = housesData;

export const PriceRangeDropdownt = () => {
  const {price, setPrice} = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
      {
        value: 'Todas'
      },
      {
        value: '100000 - 130000'
      },
      {
        value: '130000 - 160000'
      },
      {
        value: '160000 - 190000'
      },
      {
        value: '190000 - 220000'
      },
      {
        value: '300000 - 400000'
      },

  ]

  useEffect(() => {

  }, [])

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left py-5">
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {
              price == "Preço: " ?( "Preço: "): (`Preço: ${price}`)
            }
          </div>
          <div className="text-[13px]">Selecione o Preço</div>
        </div>
          {isOpen ? (<RiArrowUpSLine className="dropdown-icon-secondary"/>): (<RiArrowDownSLine className="dropdown-icon-secondary"/>)  }
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, i) => {
          return (
            <Menu.Item onClick={() => setPrice(price.value)} className="cursor-pointer hover:text-emerald-700 transition " as='li' key={`i + ${price.value}`}>{price.value}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};
