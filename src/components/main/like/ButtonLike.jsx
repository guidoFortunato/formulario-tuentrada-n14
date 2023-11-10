export const ButtonLike = ({
  name,
  handleLike,
  handleDisLike,
  handleOpinion,
  result,
  opinion,
  like,
}) => {
  const handleClick = () => {
    handleOpinion()
    if (result) {
      handleLike();
    }
    if (result === false) {
      handleDisLike();
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
