import Image from "next/image";
import Link from "next/link";

export const ArticleImages = ({ itemColumn }) => {
  console.log({ itemColumn });
  return (
    <>
      {itemColumn.link ? (
        <Link href={itemColumn.link} target={itemColumn.target}>
          <Image
            key={itemColumn.image?.src}
            src={itemColumn.image?.src}
            alt={itemColumn.alt}
            width={300}
            height={300}
            className="rounded-lg border border-gray-300"
          />
        </Link>
      ) : (
        <Image
          key={itemColumn.image?.src}
          src={itemColumn.image?.src}
          alt={itemColumn.alt}
          width={300}
          height={300}
          className="rounded-lg border border-gray-300"
        />
      )}
    </>
  );
};
