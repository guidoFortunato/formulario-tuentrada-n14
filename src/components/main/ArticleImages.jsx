import Image from "next/image";
import Link from "next/link";

export const ArticleImages = ({ itemColumn }) => {
 
  return (
    <>
    <div className="flex justify-evenly">
    {itemColumn.link ? (
        <Link  href={itemColumn.link} target={itemColumn.target}>
          <Image
            key={itemColumn.image?.src}
            src={itemColumn.image?.src}
            alt={itemColumn.alt}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </Link>
      ) : (
        <Image 
          key={itemColumn.image?.src}
          src={itemColumn.image?.src}
          alt={itemColumn.alt}
          width={300}
          height={300}
          className="rounded-lg "
        />
      )}
    </div>
    </>
  );
};
