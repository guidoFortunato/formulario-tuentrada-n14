import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const TypeFormTextarea = ({ item }) => {
  const { register, errors } = useContext(FormContext);

  return (
    <div>
      <label
        htmlFor={item.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {item.name}
      </label>
      <textarea
        type={item.subtype}
        name={item.name}
        id={item.name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5"
        placeholder={item.placeholder}
        {...register(item.name, {
          required: {
            value: item.required === 1 ? true : false,
            message: "Este campo es obligatorio" //`El ${item.name.toLowerCase()} es obligatorio`,
          },
          maxLength: {
            value: 900,
            message: "No debe poseer mas de 900 caracteres" //`El ${item.name.toLowerCase()} es obligatorio`,
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
