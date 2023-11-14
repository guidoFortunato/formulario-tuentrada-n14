import { useContext, useState } from "react";
import { FormContext } from "@/context/FormContext";
import Select from "react-select";
import { useController } from "react-hook-form";

export const TypeFormSelect = ({ item }) => {
  const { register, handleSubmit, errors, watch, reset, nextStep, control } = useContext(FormContext);
  const name = (item.name).toLowerCase().split(' ').join('_')
  const optionsSelect = item.options.map( item => ({value: item, label: item}) )

  const { field } = useController({ name: name, control })
  
  const handleSelectChange = ( option ) => {
    field.onChange(option.value)
  }



  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {item.name}
      </label>

      <Select
        defaultValue={"Seleccione una opción..."}
        isSearchable={false}
        value={optionsSelect.find( item=> item.value === field.value )}
        options={optionsSelect}
        onChange={handleSelectChange}
      />

      <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      >
      
      </div>
      
      {/* <select {...register(name)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark w-full block p-2.5 mt-2">
       
        {item.options.map((option) => (
          <option value={option} key={option} >
            {option}
          </option>
        ))}
      </select> */}
      { watch(name) ? watch(name).slice(0,2).toLowerCase() === "ot" ? (
        <>
          <input
            type="text"
            name="otra"
            id="otra"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark  block w-full p-2.5 mt-2"
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
      {errors[name] && (
        <span className="text-red-600 text-sm block mt-1">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
