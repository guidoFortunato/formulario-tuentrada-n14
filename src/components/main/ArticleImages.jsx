import Image from "next/image";
import Link from "next/link";

export const ArticleImages = ({ itemColumn, colSpan }) => {
  return (
    <>
      <div className={`flex justify-evenly relative ${colSpan}`}>
        {itemColumn.link ? (
          <Link href={itemColumn.link} target={itemColumn.target}>
            <Image
              key={itemColumn.image?.src}
              src={itemColumn.image?.src}
              alt={itemColumn.alt}
              width={700}
              height={700}
              className="rounded-lg"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        ) : (
          <Image
            key={itemColumn.image?.src}
            src={itemColumn.image?.src}
            alt={itemColumn.alt}
            width={700}
            height={700}
            className="rounded-lg"
            style={{ width: "auto", height: "auto" }}
          />
        )}
      </div>
    </>
  );
};
