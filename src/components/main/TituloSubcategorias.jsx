const TituloSubcategorias = ({ item, index }) => {
  return (
    <a
      key={item.title}
      href={`#subtitulo-${index + 1}`}
      aria-current="false"
      className="block w-full px-4 py-2 text-blue-dark active:bg-blue-dark active:text-white border-b border-gray-200 cursor-pointer"
    >
      {item.title}
    </a>
    
  );
};
export default TituloSubcategorias;
