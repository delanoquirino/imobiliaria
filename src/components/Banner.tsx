import Image from "next/image";

import img from "../../public/img/house-banner.jpg";
import { Search } from "./Search";

export const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-emerald-700">Alugue </span> Sua Moradia dos Sonhos Conosco."
          </h1>
          <p className="max-w-[480px] mb-8">
            Oferecemos as chaves para o lar que você sempre sonhou. Descubra
            agora!
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <Image src={img} alt="casa dos sonhos" />
        </div>
      </div>
      <Search />
    </section>
  );
};
