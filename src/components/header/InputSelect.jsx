import Link from "next/link";

export const InputSelect = ({ articles }) => {
  return (
    <>
      {articles.length > 0 && (
        <select
          id="opciones"
          className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {articles.map((item) => (
            <option value={item.title} key={item.id}>
              <Link href={item.slug}>{item.title}</Link>
            </option>
          ))}
        </select>
      )}
    </>
  );
};
