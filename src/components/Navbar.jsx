"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";

export default function NavBar() {
  return (
    <Navbar fluid className="bg-gray-800 dark:bg-gray-800">
      <Navbar.Brand  href="https://flowbite-react.com">
        <Image
          src="https://eventos.tuentrada.com/light_custom/lightTheme/logo_tue_secutix.png"
          alt="TuEntrada"
          width={197}
          height={89}
        />
        
      </Navbar.Brand>
      {/* <Navbar.Toggle /> */}
      {/* <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  );
}
