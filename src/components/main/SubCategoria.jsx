"use client";

import AccordionSubCat from "./AccordionSubCat";

const SubCategoria = ({ category, params }) => {
  const subCategories = category?.subCategories;

  return (
    <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50 pb-10 px-10 md:px-20 flex-1">
      <div className="mb-5">
        <h2 className="text-2xl text-blue-dark font-semibold">
          {category?.name}
        </h2>
        <span className="text-sm text-gray-500   italic">
          Soy la descripción de la categoría
        </span>
      </div>
      {subCategories?.length > 0 &&
        subCategories.map((item) => (
          <AccordionSubCat
            params={params}
            slug={item.slug}
            key={item.id}
            name={item.name}
            articles={item.articles}
          />
        ))}
    </div>
  );
};

export default SubCategoria;
