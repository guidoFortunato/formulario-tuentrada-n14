"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  // const [keyword, setKeyword] = useState([]);

  // console.log({ keyword });

  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: "Escribí un texto...",
        onStateChange: ({ state }) => {
          setAutocompleteState(state);
        },
        getSources: () => [
          {
            sourceId: "categories-api",
            getItems: async ({ query }) => {
              if (!!query && query.length >= 3) {
                try {
                  // console.log("entra a llamar a la api");
                  const res = await getDataPrueba(
                    `https://testapi.tuentrada.com/api/v1/atencion-cliente/search-article/${query}`
                  );
                  // console.log(res);
                  // setKeyword(res.data.articles);
                  return res.data.articles;
                } catch (err) {
                  console.log(err);
                }
              } else {
                // console.log("no llama a la api");
                return []; // <-- Si la longitud es menor a 3, devuelve un array vacío
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        // Click outside the panel, close the autocomplete
        setAutocompleteState((state) => ({ ...state, isOpen: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center flex-col items-center my-10">
        <section className="flex justify-center items-center flex-col">
          <h1 className="text-[1.5rem] md:text-[2rem] text-blue-dark font-semibold mb-3">
            {props.data.name}
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
              className="absolute bg-white border-gray-100 z-10 rounded-lg shadow-xl mt-1 overflow-hidden"
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
