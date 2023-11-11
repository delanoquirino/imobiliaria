"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { housesData } from "../data";

interface HouseContextProviderProps {
  children: ReactNode;
}

export const HouseContext = createContext("");

export const HouseContextProvider: React.FC<HouseContextProviderProps> = ({
  children,
}) => {
  const [houses, setHouses] = useState(housesData);
  const [district, setDistrict] = useState("Região: ");
  const [districts, setDistricts] = useState<string[]>([]);
  const [property, setProperty] = useState("Propriedade:");
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState("Preço: ");
  const [loading, setLoading] = useState(false);

  // house
  useEffect(() => {
    const allDistrict = houses.map((house) => house.district).filter((value, index, self) => self.indexOf(value) === index);
    setDistricts(allDistrict);
  }, []);

  //properti
  useEffect(() => {
    const allProperties = houses
      .map((house) => house.type) // Obtém todos os tipos
      .filter((value, index, self) => self.indexOf(value) === index);

    setProperties(allProperties);
  }, []);

  const handleClick = () => {
    console.log(district,property,price)
  }

  return (
    <HouseContext.Provider
      value={{
        houses,
        district,
        setDistrict,
        districts,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        handleClick
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

/*
  
  const [houses, setHouses] = useState(housesData);
  const [district, setDistrict] = useState("Região: ");
  const [districts, setDistricts] = useState<string[]>([]);
  const [property, setProperty] = useState("Propriedade:");
  const [properties, setProperties] = useState<string[]>([]);
   const [price, setPrice] = useState("Preço: ");
  const [loading, setLoading] = useState(false);

*/
