import Image from "next/image";
import Logo from "../assets/logo.svg";
import HamburguerMenu from "../assets/hamburguer-menu.svg";

export function Header() {
  return (
    <div className="w-full bg-[#F7F7F7]">
      <nav className="flex items-center p-4 justify-between mx-auto max-w-5xl">
        <Image
          src={Logo}
          alt="Psicolab Logo"
          width={40}
          height={40}
          className="animate-pulse duration-1000"
        />

        <div className="flex items-center">
          <Image
            src={HamburguerMenu}
            width={20}
            height={20}
            alt="Hamburguer menu"
            className="w-7 h-7 not-sr-only sm:sr-only"
          />
          <div className="flex items-center justify-center gap-3 sr-only sm:not-sr-only">
            <a>Início</a>
            <a>Sobre</a>
            <a>Doações</a>
            <a>Parcerias</a>
            <a>Notícias</a>
            <a>Contatos</a>
            <button className="outline outline-neutral-900 rounded-full px-5 py-2">
              Fazer doação
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
