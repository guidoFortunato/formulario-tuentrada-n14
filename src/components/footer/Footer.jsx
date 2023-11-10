import Image from "next/image";
import Accordion from "./Accordion";
import SocialMedia from "./SocialMedia";

const Footer = ({ data }) => {
  return (
    <footer className="bg-gradient-image shadow relative bottom-0 w-full pb-[2px]">
      <div className="w-full max-w-screen-xl mx-auto pt-4 md:pt-8">
        <div className="flex items-center flex-col">
          <a
            href="https://tuentrada.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              src="https://eventos.tuentrada.com/light_custom/lightTheme/logo_tue_secutix.png"
              alt="TuEntrada"
              width={138}
              height={38}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </a>
          <span className="mb-4 text-gray-700 ">
            Todos los derechos reservados
          </span>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-base font-semibold text-gray-200 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline ">
                Aviso Legal
              </a>
            </li>
            <span className="mx-1">.</span>
            <li>
              <a href="#" className="hover:underline ">
                Política de Privacidad
              </a>
            </li>
            <span className="mx-1">.</span>
            <li>
              <a href="#" className="hover:underline  ">
                Defensa al Consumidor
              </a>
            </li>
          </ul>
        </div>
        <SocialMedia />
        <Accordion data={data} />
      </div>
    </footer>
  );
};
export default Footer;
