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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
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
          <div className="max-w-[768px]">
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
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full relative">
                <Image
                  className="rounded-full p-[0.2rem]"
                  src={house.agent.image}
                  alt={house.agent.name}
                  fill={true}
                />
              </div>
              <div>
                <div className="font-bold text-lg">{house?.agent.name}</div>
                <Link href="/" className="text-emerald-700 text-sm">
                  Ver listagens
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-y-4">
              <input className="border border-gray-300 focus:border-emerald-600 outline-none rounded w-full px-4 h-15 text-sm" type="text" placeholder="Nome" />
              <input className="border border-gray-300 focus:border-emerald-600 outline-none rounded w-full px-4 h-15 text-sm" type="text" placeholder="Email"/>
              <input className="border border-gray-300 focus:border-emerald-600 outline-none rounded w-full px-4 h-15 text-sm" type="text" placeholder="Telefone"/>
              <textarea className="border border-gray-300 focus:border-emerald-600 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400" placeholder="Mensagem" defaultValue="Olá! Fiquei interessado nesta Residência. Gostaria de saber mais detalhes e informações sobre ela."></textarea>
              <div className="flex gap-x-2"><button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded p-4 text-sm w-full">Envie uma mensagem</button>
              <button className="border border-emerald-600 text-emerald-600 hover:border-emerald-500 hover:text-emerald-500 rounded p-4 text-sm w-full transition">Ligar</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
