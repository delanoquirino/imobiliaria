
import { ReactNode, createContext, useState } from "react";
import { housesData } from "../data";
import { StaticImageData } from "next/image";

interface HouseContextProviderProps {
  children: ReactNode;
}


export const HouseContext = createContext(housesData);

export const HouseContextProvider: React.FC<HouseContextProviderProps> = ({
  children,
}) => {

  
  return (
    <HouseContext.Provider
      value={HouseContext}
    >
      {children}
    </HouseContext.Provider>
  );
};


/*
  
  const [houses, setHouses] = useState(housesData);
  const [district, setDistrict] = useState("Bairro (any)");
  const [districts, setDistricts] = useState([]);
  const [property, setProperty] = useState("Propiedade type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Preço range (any)");
  const [loading, setLoading] = useState(false);

*/