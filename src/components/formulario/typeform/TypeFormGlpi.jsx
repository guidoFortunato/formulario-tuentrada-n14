import { useContext, useEffect } from "react";
import { FormContext } from "@/context/FormContext";

export const TypeFormGlpi = ({ item }) => {
  const { register, errors, handleGlpiSubCategory, handleErrorInput, errorInput, handleSelectDefaultValue, glpiSubCategory} = useContext(FormContext);
  const name = item.name.toLowerCase().split(" ").join("_");
  // console.log({glpiSubCategory})
  const handleSelectChange = (e) => {
    
    if(e.target.value === "Selecciona una opción"){
      handleErrorInput(true)
      handleGlpiSubCategory("")
      handleSelectDefaultValue("defaultValue")
      return
    }
    const glpiSubCategoryItem = item.subCategoryId.find( option => option.name === e.target.value )
    handleSelectDefaultValue(e.target.value)
    handleGlpiSubCategory(glpiSubCategoryItem)
    handleErrorInput(false)
  }

  useEffect(() => {
    if (glpiSubCategory === "" && item.required === 1) {
      handleSelectDefaultValue("defaultValue")      
    }
  }, []);

  

  // console.log({ itemGlpi: item });

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {item.name}
        {item.required === 1 && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(name, {
          required: {
            value: item.required === 1 ? true : false,
            message: "Este campo es obligatorio", //`El ${item.name.toLowerCase()} es obligatorio`,
          },
         
        })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark w-full block p-2.5 mt-2"
        onChange={handleSelectChange}
      >
        <option defaultValue>Selecciona una opción</option>
        {item.subCategoryId?.map((option) => (
          <option value={option.name} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      {errors[name] && (
        <span className="text-red-600 text-sm block mt-1">
          {errors[name].message}
        </span>
      )}
      {errorInput && item.required === 1 && (
        <span className="text-red-600 text-sm block mt-1">
          Este campo es obligatorio
        </span>
      )}
      
    </div>
  );
};
