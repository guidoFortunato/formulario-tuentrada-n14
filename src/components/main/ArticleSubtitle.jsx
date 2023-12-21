"use client";

import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const ArticleSubtitle = ({ titleCategory }) => {
  const { subtitleArticle } = useContext(FormContext);
//   console.log({ subtitleArticle });
  return (
    <span className="text-sm text-gray-500  mb-10 italic">
      {titleCategory}{subtitleArticle.length > 0 && ` » ${subtitleArticle}`}
    </span>
  );
};
