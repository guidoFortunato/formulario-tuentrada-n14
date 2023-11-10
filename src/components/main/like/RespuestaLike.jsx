"use client";

import { ButtonLike } from "./ButtonLike";
import { useState } from "react";
import { ButtonFormulario } from "./ButtonFormulario";

export const RespuestaLike = ({ params, dataArticleForm }) => {
  const [like, setLike] = useState(null);
  const [opinion, setOpinion] = useState(false);

  const handleLike = () => {
    setLike(true);
  };
  const handleDisLike = () => {
    setLike(false);
  };

  const handleOpinion = () => {
    setOpinion(true);
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
          handleOpinion={handleOpinion}
          opinion={opinion}
        />

        <ButtonLike
          name={"No"}
          result={false}
          handleLike={handleLike}
          handleDisLike={handleDisLike}
          like={like}
          handleOpinion={handleOpinion}
          opinion={opinion}
        />
      </div>
      {dataArticleForm === null && (
        <div
          className={`${
            opinion === false ? "hidden" : ""
          } flex flex-col items-center mb-2`}
        >
          <p className="mb-2 text-blue-dark font-base">
            Gracias por su opinión :)
          </p>
        </div>
      )}

      {dataArticleForm !== null && like === true && (
        <div
          className={`${
            opinion === false ? "hidden" : ""
          } flex flex-col items-center mb-2`}
        >
          <p className="mb-2 text-blue-dark font-base">
            Gracias por su opinión :)
          </p>
        </div>
      )}

      { dataArticleForm !== null && like === false &&
        <div
          className={`${
            opinion === false
              ? "hidden"
              : ""
          } flex flex-col items-center mb-2`}
        >
          <p className="mb-2 text-gray-500 font-base">
          Escribinos tu consulta:
          </p>
          <ButtonFormulario params={params} />
        </div>
      }
    </>
  );
};
