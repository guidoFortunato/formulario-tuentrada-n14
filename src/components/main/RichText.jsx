import dompurify from "isomorphic-dompurify";

export const RichText = ({ itemColumn, item, index }) => {
  const sanitizer = dompurify.sanitize;
  console.log({index})

  const title = itemColumn.titleOrLabel;
  const description = itemColumn.description;

  return (
    <div className={`${ item.width === "25%-75%" && "col-span-2"}`}>
      <h3 className="text-blue-dark font-semibold mb-2">{title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitizer(description),
        }}
      ></div>
    </div>
  );
};
