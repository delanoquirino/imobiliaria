"use client"

import Link from "next/link";
import { House } from "./House";
import { useContext } from "react";
import { HouseContext } from "@/context/HouseContext";
import {ImSpinner2} from 'react-icons/im'

export const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if(loading) {
    return (<ImSpinner2 className='mx-auto animate-spin text-emerald-700 text-4xl mt-[200px]'/>)
  }

  if (houses.length < 1) {
    return <div className="text-center text-3xl text-gray-400 mt-48"> Desculpe, nada encontrado</div>
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-11">
          {houses.map((house, index) => {
            return (
              <Link href={`/propriedade/${house.id}`} key={"listhouse" + index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
