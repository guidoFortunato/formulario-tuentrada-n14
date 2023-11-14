import AccordionSubCat from "./AccordionSubCat";

const SubCategoria = ({ category, params }) => {
  // console.log({params})
  const { subCategories } = category;

  return (
    <div className="container mx-auto bg-main-image bg-no-repeat bg-left-50 pb-10 px-10 md:px-20 flex-1">
      <h2 className="text-2xl text-blue-dark font-semibold mb-10">
        {category.name}
      </h2>
      {subCategories.length > 0 &&
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
