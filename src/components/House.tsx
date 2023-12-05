
import Image, { StaticImageData } from "next/image"
import { BiBed, BiBath, BiArea } from "react-icons/bi"

interface HouseProps {
  house: {
    id: number;
    type: string;
    name: string;
    description: string;
    image: StaticImageData;
    imageLg: StaticImageData;
    district: string;
    address: string;
    bedrooms: string; 
    bathrooms: string; 
    surface: string; 
    year: string; 
    price: string;
  };
}

export const House = ({house}: HouseProps) => {
  const {image, type, district, address, bedrooms, bathrooms, surface, price} = house
  const priceBr = parseFloat(price)
  const formattedPriceBR = priceBr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
 

  return (
    <div className="bg-gray-100 text-black p-4 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:opacity-75 transition">
  <Image className="w-full h-auto rounded-lg mb-4" src={image} alt="foto da residência" />
  <div className="flex justify-between mb-2 text-white" >
    <div className="bg-violet-500 rounded-full px-3">{type}</div>
    <div className="bg-emerald-500 rounded-full px-3">{district}</div>
  </div>
  <div className="text-md font-semibold w-full truncate">{address}</div>
  <div className="flex gap-x-4 my-4">
    <div className="flex items-center gap-1">
      <BiBed className="text-gray-400" />
      <div>{bedrooms}</div>
    </div>
    <div className="flex items-center gap-1">
      <BiBath className="text-gray-400" />
      <div>{bathrooms}</div>
    </div>
    <div className="flex items-center gap-1">
      <BiArea className="text-gray-400" />
      <div>{surface}</div>
    </div>
  </div>
  <div className="text-xl font-bold text-emerald-600 mb-4">{formattedPriceBR}</div>
</div>
  )
}
