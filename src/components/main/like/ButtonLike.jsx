import { getDataPrueba } from "@/helpers/getInfoTest";

export const ButtonLike = ({ name, handleLike, handleDisLike, handleOpinion, result, opinion, params, like }) => {
  
  // console.log({params})
  
  const handleClick = async() => {
    handleOpinion()
    if (result) {
      // console.log({result})
      handleLike();
      // await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/article/${params.subcategoria}/like/1`);
      await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/category/${params.categoria}/article/${params.subcategoria}/like/1`);
      
    }
    if (!result) {
      // console.log({result})
      handleDisLike();
      // await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/article/${params.subcategoria}/like/0`);
      await getDataPrueba(`https://testapi.tuentrada.com/api/v1/atencion-cliente/category/${params.categoria}/article/${params.subcategoria}/like/0`);
      
    }
  };
  return (
    <>
      {opinion ? (
        <button
          type="button"
          className={`w-[70px] cursor-default mr-2 text-white bg-gradient-to-r from-gray-300 to-gray-400 rounded-md text-sm px-5 py-2.5 text-center mb-5`}
        >
          {name}
        </button>
      ) : (
        <button
          type="button"
          className={`w-[70px] mr-2 text-white bg-gradient-to-r from-blue-light to-blue-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:blue-dark  font-medium rounded-md text-sm px-5 py-2.5 text-center mb-5`}
          onClick={handleClick}
        >
          {name}
        </button>
      )}
    </>
  );
};
