"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar container="true" className="bg-gradient-to-b from-maroon-dark to-blue-dark md:from-blue-dark md:to-maroon-dark">
      
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
        <Navbar.Link href="#" className="text-[1rem] text-white hover:bg-transparent border-b-0 hover:text-slate-400 md:hover:text-slate-400">
          Iniciar sesión
        </Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
