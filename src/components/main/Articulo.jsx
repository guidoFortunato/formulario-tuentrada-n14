import { RespuestaLike } from "./like/RespuestaLike";
import { ButtonFormulario } from "./like/ButtonFormulario";
import Link from "next/link";
import { ArticleRows } from "./ArticleRows";

const Articulo = ({ params, dataArticle = {}, dataMostViews = [] }) => {
  const dataArticleForm = dataArticle.form;
  // console.log({dataMostViews})
  const rows = dataArticle.rows;
  // console.log({ rows });
  // console.log({ dataArticle });

  const titleCategory =
    params.categoria.slice(0, 1).toUpperCase() +
    params.categoria.split("-").join(" ").slice(1).toLowerCase();

  // const titleSubCategory = params.categoria.slice(0,1).toUpperCase() + params.categoria.slice(1).toLowerCase();

  return (
    <>
      <div className=" container mx-auto bg-main-image bg-no-repeat bg-left-50 pb-10 px-10 md:px-20 flex-1">
        <div className="mb-5">
          <h2 className="text-2xl text-blue-dark font-semibold">
            {dataArticle?.title}
          </h2>
          {/* <ArticleSubtitle titleCategory={titleCategory} /> */}
        </div>
        {/* si se agrega la columna lateral agregar al section lg:grid-cols-6 */}
        {/* <section className="w-full grid grid-cols-1   gap-5 lg:gap-3 mx-auto mt-4 mb-10">
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
        </section> */}
        {rows &&
          rows.map((item) => <ArticleRows key={item.name} item={item} />)}

        <hr />
        {dataArticle?.enableHelpful === 1 && (
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

        {dataArticle?.enableHelpful === 0 && dataArticleForm && (
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

        <div className="flex flex-col items-center md:items-start md:justify-evenly md:flex-row mt-10">
          {dataMostViews.length > 0 && (
            <div className="mb-8 md:mb-0">
              <h4 className="text-blue-dark font-semibold mb-2 text-xl">
                Artículos más vistos
              </h4>
              <ol className="text-sm">
                {dataMostViews.slice(0, 5).map((item) => (
                  <li key={item.id} className="text-blue-dark mb-2">
                    ▸
                    <Link className="hover:underline text-sm" href={`/${item.category.slug}/${item.slug}`}>                  
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}
          {dataArticle?.articleChild?.length > 0 && (
            <div>
              <h4 className="text-blue-dark text-xl font-semibold mb-2 ">
                Artículos relacionados
              </h4>
              <ol className="text-sm">
                {dataArticle?.articleChild?.slice(0, 5).map((item) => (
                  <li key={item.id} className="text-blue-dark mb-2">
                    ▸
                    <Link className="hover:underline text-sm " href={item.slug}>
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
