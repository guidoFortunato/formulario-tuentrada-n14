"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar({ data }) {
  // console.log({ data });
  return (
    <Navbar
      container="true"
      className="bg-gradient-to-b from-maroon-dark to-blue-dark md:from-blue-dark md:to-maroon-dark"
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
