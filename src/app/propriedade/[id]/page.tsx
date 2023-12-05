import { housesData } from "@/data";
import Image from "next/image";
import Link from "next/link";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

export default function Page({ params }: { params: { id: string } }) {
  const house = housesData.find((house) => {
    return house.id === parseInt(params.id);
  });

  const priceBr = parseFloat(house.price);
  const formattedPriceBR = priceBr.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="max-w-[768px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-emerald-500 text-white px-3 rounded-full">
              {house.district}
            </div>
          </div>
          <div className="text-3xl font-semibold text-emerald-600">
            {formattedPriceBR}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px] mx-auto">
            <div className="mb-8">
              <Image src={house.imageLg} alt="foto da residência" />
            </div>
            <div className="flex gap-x-6 text-emerald-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house?.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house?.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house?.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
         
        </div>
      </div>
    </section>
  );
}
