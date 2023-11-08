import { FormContext } from "@/context/FormContext";
import { useContext } from "react";

export const Steps = ({ newLengthSteps, dataForm }) => {
  const { currentStep } = useContext(FormContext);
  console.log({ currentStep, newLengthSteps, dataForm });
  return (
    <ol className="flex items-center w-full mb-4 sm:mb-5">
      <li
        className={`flex w-full items-center text-blue-dark dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b ${
          currentStep >= 1 ? "after:border-blue-200" : "after:border-gray-100"
        } after:border-4 after:inline-block dark:after:border-blue-800`}
      >
        <div className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
          <svg
            className="w-4 h-4 text-blue-dark lg:w-6 lg:h-6 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
          </svg>
        </div>
      </li>
      <li
        className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b ${
          currentStep >= 2 ? "after:border-blue-200" : "after:border-gray-100"
        }  after:border-4 after:inline-block dark:after:border-gray-700`}
      >
        <div
          className={`flex items-center justify-center w-10 h-10 ${
            currentStep >= 2 ? "bg-blue-200" : "bg-gray-100"
          } rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0`}
        >
          <svg
            className="w-4 h-4 text-blue-dark lg:w-6 lg:h-6 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z" />
            <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" />
          </svg>
        </div>
      </li>
      {dataForm.steps.map((item) => (
        <li
          key={item.id}
          className={`flex w-full items-center after:content-['']  ${
            currentStep === 3 ? "after:w-full after:h-1 after:border-b after:border-blue-200 after:border-4 after:inline-block" : "after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block"
          }  
            
             `}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 ${
              currentStep === 2 ? "bg-blue-200" : "bg-gray-100"
            } rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0`}
          >
            <svg
              className="w-4 h-4 text-blue-dark lg:w-6 lg:h-6 dark:text-blue-300"
              aria-hidden="true"
              xmlns={item.svg.xmlns}
              fill="currentColor" //{item.svg.fill}
              viewBox={item.svg.viewBox}
            >
              <path d={item.svg.path} />
              {/* <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" /> */}
            </svg>
          </div>
        </li>
      ))}
    </ol>
  );
};
