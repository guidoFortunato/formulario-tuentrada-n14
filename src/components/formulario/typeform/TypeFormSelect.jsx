import { useContext } from "react";
import { FormContext } from "@/context/FormContext";
import Select from "react-select";
import { useController } from "react-hook-form";

export const TypeFormSelect = ({ item }) => {
  const { register, errors, watch, control } = useContext(FormContext);
  const name = item.name.toLowerCase().split(" ").join("_");
  const optionsSelect = item.options.map((item) => ({
    value: item,
    label: item,
  }));

  const { field } = useController({ name: name, control });

  const handleSelectChange = (option) => {
    field.onChange(option.value);
  };

  const styles = {};

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {item.name}
      </label>

      <Select
        isSearchable={false}
        placeholder="Seleccione una opción..."
        value={optionsSelect.find((item) => item.value === field.value)}
        options={optionsSelect}
        onChange={handleSelectChange}
        styles={{
          control: (styles, state) => {
            // console.log({styles, state});
          

            return {
              ...styles,
              borderRadius: "0.5rem",
              minHeight: "42px",
              marginBottom: "10px",

              "&:hover": {
                borderColor: state.isFocused ? "#1955A5" : "#D1D5DB",
                borderWidth: state.isFocused ? "1px" : "1px",
              },
              borderColor: state.menuIsOpen ? "#1955A5" : "#D1D5DB",
             
            };
          },
          option: (styles, state) => {
            // console.log({styles, state});
            return {
              ...styles,
              cursor: "pointer",
              background: state.isSelected ? "#1955A5" : "transparent",
              color: state.isSelected ? "#fff" : "#000",
              "&:hover": {
                background: state.isSelected ? "#1955A5" : "#B2D4FF",
                color: state.isSelected ? "#fff" : "#000",
              },
            };
           
          },
        
          // placeholder: (styles) => console.log(styles)
        }}
      />

      {/* <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      ></div> */}

      {watch(name) ? (
        watch(name).slice(0, 2).toLowerCase() === "ot" ? (
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
                  message: "Este campo es obligatorio",
                },
              })}
            />
            {errors["otra"] && (
              <span className="text-red-600 text-sm block mt-1">
                {errors["otra"].message}
              </span>
            )}
          </>
        ) : null
      ) : null}
      {errors[name] && (
        <span className="text-red-600 text-sm block mt-1">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
