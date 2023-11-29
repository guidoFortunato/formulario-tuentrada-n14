"use client";

import { getTokenPrueba } from "@/helpers/getInfoTest";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";

export default function NavBar({ data }) {
  

  // useEffect(() => {
  //   console.log('uef navbar')
  //   const getData = async()=>{
  //     const token = await getTokenPrueba();
  //     console.log({token})
  //   }
  //   getData()
  // }, []);
  // console.log({ data });
  return (
    <Navbar
      container="true"
      className="bg-gradient-to-b from-maroon-dark to-blue-dark md:from-blue-dark md:to-maroon-dark px-[0.8rem] lg:px-[7.5rem] py-3 "
    >
      <Link href="/">
        <Image
          src={data.logo.src}
          alt={data.logo.alt}
          width={197}
          height={89}
          priority
          style={{ width: "auto", height: "auto" }}
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
