import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const TypeFormFile = ({ item }) => {
  const { register, errors } = useContext(FormContext);

  return (
    <div>
      <label
        htmlFor={item.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {item.name}
      </label>
      <input
        type={item.type}
        name={item.name}
        id={item.name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5"
        placeholder={item.placeholder}
        {...register(item.name, {
          
          validate: (value) => {
            if (value[0]?.size > 60000) {
              return "El archivo debe pesar menos de 60kb"
            }
            return (value[0]?.type === "image/jpeg" || value[0]?.type === 'image/png' || value[0]?.type === 'image/jpg') || item.helperText
          }
          
        })}
      />
      {errors[item.name] && (
        <span className="text-red-600 text-sm block mt-1">
          {errors[item.name].message}
        </span>
      )}
    </div>
  );
};
