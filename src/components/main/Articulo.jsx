"use client";
import Image from "next/image";
import React from "react";

const Articulo = () => {
  return (
    <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50 pb-10 px-10 md:px-20 flex-1">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4 mx-auto mt-4">
      <Image
          src="https://picsum.photos/550/300"
          alt="TuEntrada"
          width={550}
          height={300}
          priority
          className="rounded-lg border border-gray-300"

          
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempore sapiente autem, ab animi consectetur magni? Obcaecati officiis, ratione laudantium placeat in ad nam tempore maiores. Suscipit error nam repellendus sunt, eveniet, aspernatur nulla laborum dolore rerum perferendis natus sit ratione minus obcaecati similique dolor exercitationem pariatur ut eligendi. Eaque neque quaerat, atque nihil quasi deleniti, totam error dolorem eos dolor consectetur assumenda provident vitae odit velit omnis nemo blanditiis aliquid! Possimus exercitationem nobis repellat, sapiente voluptas debitistotam error dolorem eos dolor consectetur assumenda provident vitae odit velit omnis nemo blanditiis aliquid! Possimus exercitationem nobis repellat, sapiente voluptas debitis </p>
        </section>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempore sapiente autem, ab animi consectetur magni? Obcaecati officiis, ratione laudantium placeat in ad nam tempore maiores. Suscipit error nam repellendus sunt, eveniet, aspernatur nulla laborum dolore rerum perferendis natus sit ratione minus obcaecati similique dolor exercitationem pariatur ut eligendi. Eaque neque quaerat, atque nihil quasi deleniti, totam error dolorem eos dolor consectetur assumenda provident vitae odit velit omnis nemo blanditiis aliquid! Possimus exercitationem nobis repellat, sapiente voluptas debitis </p>
    </div>
  );
};

export default Articulo;
