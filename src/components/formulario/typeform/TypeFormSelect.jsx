import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const TypeFormSelect = ({ item }) => {
  const { register, handleSubmit, errors, watch, reset, nextStep } =
    useContext(FormContext);
  return (
    <div>
      <label
        htmlFor={item.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {item.name}
      </label>
      <select {...register(item.name)}>
        {item.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      { watch(item.name) ? watch(item.name).slice(0,2).toLowerCase() === "ot" ? (
        <>
          <input
            type="text"
            name="otra"
            id="otra"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 mt-2"
            placeholder={item.helperText}
            {...register("otra", {
              required: {
                value: item.required === 1 ? true : false,
                message: "Este campo es obligatorio", //`El ${item.name.toLowerCase()} es obligatorio`,
              },
              // pattern: {
              //   value: item.pattern,
              //   message:
              //     item.pattern !== null &&
              //     `Ingrese un ${item.name.toLowerCase()} válido`,
              // },
            })}
          />
          {errors["otra"] && (
            <span className="text-red-600 text-sm block mt-1">
              {errors["otra"].message}
            </span>
          )}
        </>
      ) : null : null}
      {errors[item.name] && (
        <span className="text-red-600 text-sm block mt-1">
          {errors[item.name].message}
        </span>
      )}
    </div>
  );
};
