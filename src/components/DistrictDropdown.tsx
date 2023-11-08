"use client";
import { Menu } from "@headlessui/react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { housesData } from "@/data";
import { useEffect, useState } from "react";

const houses = housesData;

export const DistrictDropdown = () => {
  const [district, setDistrict] = useState("Região: ");
  const [districts, setDistricts] = useState<string[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const allDistrict = houses.map((house) =>  house.district
    )

    setDistricts(allDistrict)
  }, [])

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left py-5">
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            Região: {district}
          </div>
          <div className="text-[13px]">Selecione uma Região</div>
        </div>
          {isOpen ? (<RiArrowDownSLine className="dropdown-icon-secondary"/>): (<RiArrowUpSLine className="dropdown-icon-secondary"/>)  }
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {districts.map((districtName, i) => {
          return (
            <Menu.Item onClick={() => setDistrict(districtName)} className="cursor-pointer hover:text-emerald-700 transition " as='li' key={`i + ${districtName}`}>{districtName}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};
