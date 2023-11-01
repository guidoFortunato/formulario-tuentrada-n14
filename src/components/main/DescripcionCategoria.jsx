"use client"

import DOMPurify from "dompurify";

const DescripcionCategoria = ({description}) => {
  return (
    <p
      className="mb-7 font-normal"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(description),
      }}
    ></p>
  );
};
export default DescripcionCategoria;
