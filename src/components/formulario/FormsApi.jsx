import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const FormsApi = ({dataForm}) => {
  const { register, handleSubmit, errors, watch, reset, nextStep } = useContext(FormContext); 
  console.log({dataForm})

  // const fieldsForStep = dataForm.fields.filter((item) => item.stepId === step.id);
  // const fieldsForStep = dataForm.steps.map((itemStep) => {
  //   dataForm.fields.filter((itemField) => itemField.stepId === itemStep.id);
  // });
  const renderFields = dataForm.fields.map( (item, index) =>{
    if (item.type === "input") {
      return (
        <div key={index}>
          <label
            htmlFor={item.name}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {item.name}
          </label>
          <input
            type={item.subtype}
            name={item.name}
            id={item.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5"
            placeholder={item.placeholder}
            {...register(item.name, {
              required: {
                value: item.required === 1 ? true : false,
                message: `El ${item.name} es obligatorio`,
              },
              pattern: {
                value: item.pattern,
                message: item.pattern !== null && `Ingrese un ${item.name} válido`,
              },
            })}
          />
          {errors[item.name] && (
            <span className="text-red-600 text-sm block mt-1">
              {errors[item.name].message}
            </span>
          )}
        </div>
      );
    }
    return null
  } )

  console.log({errors})
  const onSubmit = async (data, event) => {
    event.preventDefault();
    // console.log({ info });
    console.log("se envia form api 1");
    console.log({ data });
   
    // reset()
  };


  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderFields}
      <button type="submit">Submit</button>
    </form>
  )
}