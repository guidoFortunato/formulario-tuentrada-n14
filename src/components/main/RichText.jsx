import dompurify from "isomorphic-dompurify";

export const RichText = ({ itemColumn, item, index, colSpan }) => {
  const sanitizer = dompurify.sanitize;
  // console.log({index})

  const title = itemColumn.titleOrLabel;
  const description = itemColumn.description;

  return (
    <div className={colSpan}>
      <h3 className="text-blue-dark font-semibold mb-2">{title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitizer(description),
        }}
      ></div>
    </div>
  );
};
