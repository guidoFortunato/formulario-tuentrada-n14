import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const TypeFormGlpi = ({ item }) => {
  const { register, errors } = useContext(FormContext);
  const name = item.name.toLowerCase().split(" ").join("_");
  // const optionsSelect = item.options.map((item) => ({
  //   value: item,
  //   label: item,
  // }));

  // const { field } = useController({ name: name, control });

  // const handleSelectChange = (option) => {
  //   field.onChange(option.value);
  // };

  console.log({itemGlpi: item})

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {item.name} { item.required === 1 && <span className="text-red-500">*</span> }
      </label>
      <select {...register(name)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark w-full block p-2.5 mt-2">
       
        {item.subCategoryId.map((option) => (
          <option value={option.name} key={option.id} >
            {option.name}
          </option>
        ))}
      </select>


     
      {errors[name] && (
        <span className="text-red-600 text-sm block mt-1">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
