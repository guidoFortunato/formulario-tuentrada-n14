import dompurify from "isomorphic-dompurify";

export const RichText = ({ itemColumn }) => {
  const sanitizer = dompurify.sanitize;

  const title = itemColumn.titleOrLabel;
  const description = itemColumn.description;

  return (
    <div>
      <h3 className="text-blue-dark font-semibold mb-2">{title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitizer(description),
        }}
      ></div>
    </div>
  );
};
