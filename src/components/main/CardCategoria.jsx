"use client";

import Link from "next/link";
import { CiMoneyCheck1 } from "react-icons/ci";

const CardCategoria = ({ color }) => {
  


  const colorVariants = {
    blue: "bg-gradient-to-b from-card-blue-light to-card-blue-dark",
    pink: "bg-gradient-to-b from-card-pink-light to-card-pink-dark",
  };
  return (
    <div
      className={`w-full p-6 text-white border border-gray-200 rounded-lg shadow text-center ${colorVariants[color]}`}
    >
      <div className="flex justify-center">
        <CiMoneyCheck1 className="text-[100px] text-center" />
      </div>
      <h5 className="mb-1 text-[1.5rem] font-bold tracking-tight">
        Devoluciones
      </h5>
      <p className="mb-7 font-normal">Podes solicitar devoluciones</p>
      <Link
        href="/categoria"
        className="text-white border-2 border-white hover:bg-white hover:text-hover-button-card transition duration-150 ease-out hover:ease-in  font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2">
        Saber más
      </Link>
    </div>
  );
};
export default CardCategoria;
