import Image from "next/image";
import Logo from "../assets/logo.svg";
import HamburguerMenu from "../assets/hamburguer-menu.svg";

export function Header() {
  return (
    <div className="w-full bg-[#FFF4F0]">
      <nav className="flex items-center p-4 mt-2 justify-between mx-auto max-w-5xl">
        <Image
          src={Logo}
          alt="Psicolab Logo"
          width={40}
          height={40}
          className="animate-pulse duration-1000 cursor-pointer"
        />

        <div className="flex items-center">
          <Image
            src={HamburguerMenu}
            width={20}
            height={20}
            alt="Hamburguer menu"
            className="w-7 h-7 not-sr-only sm:sr-only cursor-pointer"
          />
          <div className="flex items-center justify-center gap-4 sr-only sm:not-sr-only">
            <a className="hover:underline underline-offset-4 cursor-pointer">
              Início
            </a>
            <a className="hover:underline underline-offset-4 cursor-pointer">
              Sobre
            </a>
            <a className="hover:underline underline-offset-4 cursor-pointer">
              Doações
            </a>
            <a className="hover:underline underline-offset-4 cursor-pointer">
              Parcerias
            </a>
            <a className="hover:underline underline-offset-4 cursor-pointer">
              Notícias
            </a>
            <a className="hover:underline underline-offset-4 cursor-pointer">
              Contatos
            </a>
            <button className="outline outline-[#D8581F] rounded-full px-8 py-2 hover:bg-[#D8581F] hover:text-white">
              Fazer doação
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
