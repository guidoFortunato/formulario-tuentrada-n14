"use client";

import { useMemo, useRef, useState } from "react";
import { getDataPrueba } from "@/helpers/getInfoTest";
import { createAutocomplete } from "@algolia/autocomplete-core";
import Link from "next/link";

const AutocompleteItem = ({ data }) => {
  const { title, slug } = data;

  return (
    <li>
      <Link href={`/${slug}`} className="hover:bg-blue-300 flex gap-4 p-4">
        <div className="flex justify-evenly items-center">
          <svg
            className="w-3 h-3 mr-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <h3 className="text-sm font-semibold">{title}</h3>
        </div>
      </Link>
    </li>
  );
};

const InputBusqueda = (props) => {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false,
  });
  

  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: "Escribí un texto...",
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: "categories-api",
            getItems: async ({ query }) => {
              if (!!query) {
                try {
                  const res = await getDataPrueba(
                    `https://testapi.tuentrada.com/api/v1/atencion-cliente/search-article/${query}`
                  );
                  // console.log(res)
                  return res.data.articles;
                } catch (err) {
                  console.log(err);
                }
              }
            },
          },
        ],
        ...props,
      }),
    [props]
  );

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current,
  });
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  });

  return (
    <>
      <div className="flex justify-center flex-col items-center my-10">
        <section className="flex justify-center items-center flex-col">
          <h1 className="text-[1.5rem] md:text-[2rem] text-blue-dark font-semibold mb-3">
            ¿Necesitás ayuda?
          </h1>
        </section>

        <form ref={formRef} className="w-[95%] md:w-2/5" {...formProps}>
          <div className="relative">
            <input
              ref={inputRef}
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-dark focus:border-blue-dark"
              {...inputProps}
            />

            
          </div>
          {autocompleteState.isOpen && (
            <div
              className="absolute bg-gray-100 border-gray-100 z-10 rounded-lg shadow-lg mt-1 overflow-hidden"
              ref={panelRef}
              {...autocomplete.getPanelProps()}
            >
              {autocompleteState.collections.map((collection, index) => {
                const { items } = collection;

                return (
                  <section key={`section-${index}`}>
                    {items.length > 0 && (
                      <ul {...autocomplete.getListProps()}>
                        {items.map((item) => (
                          <AutocompleteItem key={item.id} data={item} />
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>
          )}
          {/* <InputSelect articles={articles} /> */}
        </form>
      </div>
    </>
  );
};
export default InputBusqueda;
