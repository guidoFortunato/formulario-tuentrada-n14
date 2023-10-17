import { CiMoneyCheck1 } from "react-icons/ci";

const CardCategoria = () => {
  return (
    <div className="w-[80%] p-6 text-white border border-gray-200 rounded-lg shadow text-center bg-gradient-to-b from-color-card1 to-color-card2">
      <div className="flex justify-center">
        <CiMoneyCheck1 className="text-[100px] text-center" />
      </div>
      <a href="#">
        <h5 className="mb-2 text-[1.5rem] font-bold tracking-tight">
          Devoluciones
        </h5>
      </a>
      <p className="mb-3 font-normal">
        Podes solicitar devoluciones
      </p>
      <a
        href="#"
        className="text-white border-2 border-white hover:bg-white hover:text-hover-button-card transition duration-150 ease-out hover:ease-in  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-"
      >
        Saber más
      </a>
    </div>
  );
};
export default CardCategoria;
