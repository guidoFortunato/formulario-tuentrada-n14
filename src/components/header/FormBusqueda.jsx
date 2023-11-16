"use client";

import { useEffect, useRef, useState } from "react";
import { getDataPrueba } from "@/helpers/getInfoTest";
import { useRouter } from "next/navigation";
import { alertaWarning } from "@/helpers/Alertas";

export const FormBusqueda = () => {
  const [slug, setSlug] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const router = useRouter();

  // console.log({ data });
  // console.log({ isOpen });

  useEffect(() => {
    if (value.length >= 3) {
      const getData = async () => {
        const res = await getDataPrueba(
          `https://testapi.tuentrada.com/api/v1/atencion-cliente/search-article/${value}`
        );
        // console.log(res);
        if (res.data.articles.length > 0) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }

        setData(res.data.articles);
      };
      getData();
    }
  }, [value]);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  const handleClick = (item) => {
    setIsOpen(false);
    setValue(item.title);
    setSlug(item.slug)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      alertaWarning()
      return;
    }
    if (slug.length === 0) {
      alertaWarning('No se encontró el texto')
      return
    }
    setValue("")
    setIsOpen(false)
    router.push('/tuentrada-wallet/' + slug)
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="relative">
        <input
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-dark focus:border-blue-dark"
          name="search"
          placeholder="Escribe un texto..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-light rounded-e-lg border border-blue-light hover:bg-blue-dark hover:border-blue-dark "
        >
          <svg
            className="w-4 h-4"
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
          <span className="sr-only">Search</span>
        </button>
      </div>
      {isOpen && (
        <div className="absolute w-[95%] md:w-[40%] bg-white z-10 rounded-lg shadow-xl mt-1 overflow-hidden border border-gray-200">
          {data.map((item) => {
           
            return (
              <section key={item.id} onClick={() => handleClick(item)}>
                <ul>
                  <li>
                    <div className="flex justify-evenly items-center cursor-pointer hover:bg-blue-light hover:text-white gap-4 p-4 ">
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
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                    </div>
                  </li>
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </form>
  );
};
