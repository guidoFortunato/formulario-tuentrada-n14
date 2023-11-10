"use client";

import { ButtonLike } from "./ButtonLike";
import { useState } from "react";
import { ButtonFormulario } from "./ButtonFormulario";

export const RespuestaLike = ({ params, dataArticleForm }) => {
  const [like, setLike] = useState(true);

  const handleLike = () => {
    setLike(true);
  };
  const handleDisLike = () => {
    setLike(false);
  };

  return (
    <>
      <div>
        <ButtonLike
          name={"Si"}
          result={true}
          handleLike={handleLike}
          handleDisLike={handleDisLike}
          like={like}
        />

        <ButtonLike
          name={"No"}
          result={false}
          handleLike={handleLike}
          handleDisLike={handleDisLike}
          like={like}
        />
      </div>
      {dataArticleForm === null ? (
        <div
          className={`${like ? "hidden" : ""} flex flex-col items-center mb-2`}
        >
          <p className="mb-2 text-blue-dark font-base">
            Gracias por su opinión :)
          </p>
          
        </div>
      ) : (
        <div
          className={`${like ? "hidden" : ""} flex flex-col items-center mb-2`}
        >
          <p className="mb-2 text-gray-500 font-base">
            Si necesitás más información:{" "}
          </p>
          <ButtonFormulario params={params} />
        </div>
      )}
    </>
  );
};
