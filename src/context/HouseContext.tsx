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
  const [district, setDistrict] = useState("Todas");
  const [districts, setDistricts] = useState<string[]>([]);
  const [property, setProperty] = useState("Todas");
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState("Todas");
  const [loading, setLoading] = useState(false);

  // distric
  useEffect(() => {
    const allDistrict = houses
      .map((house) => house.district)
      .filter((value, index, self) => self.indexOf(value) === index);
    const districtsWithDefault = ["Todas", ...allDistrict];
    setDistricts(districtsWithDefault);
  }, []);

  //property
  useEffect(() => {
    const allProperties = houses
      .map((house) => house.type)
      .filter((value, index, self) => self.indexOf(value) === index);
    const propertyWithDefault = ["Todas", ...allProperties];
    setProperties(propertyWithDefault);
  }, []);

  // function search
  const handleClick = () => {
    setLoading(true);

    const isDefault = (str: string) => {
      return str.split().includes("Todas");
    };

    // filter price
    const minPrice = parseInt(price.split(" - ")[0]);
    const maxPrice = parseInt(price.split(" - ")[1]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // todas variaveis
      if (
        house.district === district &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(district) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(district) && isDefault(property) && isDefault(price)) {
        return house.district === district;
      }

      if (!isDefault(property) && isDefault(district) && isDefault(price)) {
        return house.type === property;
      }
      if (!isDefault(price) && isDefault(district) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      if (!isDefault(district) && !isDefault(property) && isDefault(price)) {
        return house.district === district && house.type === property;
      }

      if (!isDefault(district) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.district === district;
        }
      }

      if (isDefault(district) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false);
    }, 1000);
  };

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
        handleClick,
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
