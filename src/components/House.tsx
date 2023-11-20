import Image from "next/image"
import { BiBed, BiBath, BiArea } from "react-icons/bi"

export const House = ({house}) => {
  const {image, type, district, address, bedrooms, bathrooms, surface, price} = house
  const priceBr = parseFloat(house.price)
  const formattedPriceBR = priceBr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <Image className="rounded-lg rounded-tl-[90px] mb-8" src={image} alt="foto da residência"/>
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-violet-500 rounded-full text-white px-3">{type}</div>
        <div className="bg-emerald-500 rounded-full text-white px-3">{district}</div>
        
      </div>
      <div className="text-md font-semibold w-full truncate">
        {address}
      </div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]"> <BiBed/></div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]"> <BiBath/></div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]"> <BiArea/></div>
          <div>{surface}</div>
        </div>
      </div>
      
      <div className="text-lg font-semibold text-emerald-600 mb-4">{formattedPriceBR}</div>
    </div>
  )
}
