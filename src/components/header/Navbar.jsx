"use client";

import { useEffect, useState } from "react";
import { getDataPrueba } from "@/helpers/getInfoTest";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "../loading";

export default function NavBar() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async()=>{
      const info = await getDataPrueba(
        `https://testapi.tuentrada.com/api/v1/site/ayuda.tuentrada.com`
      );
      const { data } = info.data.products;
      setData(data)
    }
    getData()
  }, []);

  if (data === null) return <Loader />

  // console.log({ data });
  return (
    <Navbar
      container="true"
      className="bg-gradient-to-b from-maroon-dark to-blue-dark md:from-blue-dark md:to-maroon-dark"
    >
      <Link href="/">
        <Image
          src="https://eventos.tuentrada.com/light_custom/lightTheme/logo_tue_secutix.png"
          alt="TuEntrada"
          width={197}
          height={89}
          priority
          // style={{ width: "auto", height: "auto" }}
        />
      </Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        {data.pages.map((item) => {
          if (item.where === "navbar") {
            return (
              <Link
                key={item.id}
                href={item.path}
                className="text-[1rem] text-white hover:bg-transparent border-b-0 hover:text-slate-400 md:hover:text-slate-400"
              >
                {item.title}
              </Link>
            );
          }
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
