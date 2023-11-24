import React from "react";
import Image from "next/image";
import dompurify from "isomorphic-dompurify";

import TituloSubcategorias from "./TituloSubcategorias";
import { RespuestaLike } from "./like/RespuestaLike";
import { ButtonFormulario } from "./like/ButtonFormulario";
import Link from "next/link";

const Articulo = ({ params = "", dataArticle = {}, data }) => {
  const sanitizer = dompurify.sanitize;
  const { content } = dataArticle;
  // console.log(dataArticle.content);
  console.log({ data });
  console.log({ dataArticle });
  const dataArticleForm = dataArticle.form;

  const mergedData = dataArticle.content?.map((contentItem) => {
    const matchingImage = data.images?.find(
      (image) => image.alt === contentItem.slug
    );

    return {
      slug: contentItem.slug,
      title: contentItem.title,
      description: contentItem.description,
      images: matchingImage
        ? {
            srcset: matchingImage.srcset,
            src: matchingImage.src,
            alt: matchingImage.alt,
          }
        : null,
    };
  });

  // console.log({mergedData});
  return (
    <>
      <div className=" container mx-auto bg-main-image bg-no-repeat bg-left-50 pb-10 px-10 md:px-20 flex-1">
        <h2 className="text-2xl text-blue-dark font-semibold mb-10">
          {dataArticle?.title}
        </h2>
        {/* si se agrega la columna lateral agregar al section lg:grid-cols-6 */}
        <section className="w-full grid grid-cols-1   gap-5 lg:gap-3 mx-auto mt-4 mb-10">
          <div className="col-span-4 order-2 lg:order-1">
            {mergedData?.map((item, index) => (
              <div key={item.title}>
                <h3
                  id={`subtitulo-${index + 1}`}
                  className="text-lg font-semibold text-blue-dark my-5"
                >
                  {item.title}
                </h3>
                <span
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(item.description),
                  }}
                ></span>
                {console.log({ item })}
                {item.images !== null && (
                  <Image
                    key={item.images.title}
                    src={item.images.src}
                    alt="TuEntrada"
                    width={600}
                    height={400}
                    priority
                    className="rounded-lg border border-gray-300 mt-10 "
                  />
                )}
              </div>
            ))}
          </div>
          {/* <div className="lg:col-span-2  col-span-4 order-1 lg:order-2">
            <div className="w-auto sticky top-10 text-sm font-medium text-gray-900 bg-white border border-gray-200 ">
              {content.map((item, index) => (
                <TituloSubcategorias
                  item={item}
                  index={index}
                  key={item.title}
                />
              ))}
            </div>
          </div> */}
        </section>
        <hr />
        {dataArticle.enableHelpful === 1 && (
          <>
            <div className="flex justify-center items-center flex-col mb-5">
              <h4 className="font-semibold text-center text-blue-dark mt-10 mb-2">
                {" "}
                Te sirvió la información?
              </h4>
              <RespuestaLike
                params={params}
                dataArticleForm={dataArticleForm}
              />
            </div>
            <hr />
          </>
        )}

        {dataArticle.enableHelpful === 0 && dataArticleForm !== null && (
          <>
            <div className="flex justify-center items-center flex-col mb-5">
              <h4 className="font-semibold text-center text-blue-dark mt-10 mb-2">
                {" "}
                Escribinos tu consulta:
              </h4>
              <ButtonFormulario params={params} />
            </div>
            <hr />
          </>
        )}

        <div className="flex justify-evenly mt-24 ">
          {data.mostViews?.length > 0 && (
            <div>
              <h4 className="text-blue-dark font-semibold mb-2 text-lg">
                Artículos más vistos
              </h4>
              <ol className="text-sm">
                {data.mostViews.slice(0, 5).map((item) => (
                  <li key={item.id} className="text-blue-dark">
                    ▸
                    <Link className="underline text-base" href={item.slug}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}
          {dataArticle.articleChild?.length > 0 && (
            <div>
              <h4 className="text-blue-dark text-lg font-semibold mb-2 ">
                Artículos relacionados
              </h4>
              <ol className="text-sm">
                {dataArticle.articleChild.slice(0, 5).map((item) => (
                  <li key={item.id} className="text-blue-dark">
                    ▸
                    <Link className="underline text-base" href={item.slug}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Articulo;
