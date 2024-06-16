import Image from "next/image";
import Logo from "../assets/logo.svg";

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
        <div className="flex items-center gap-3">
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
      </nav>
    </div>
  );
}
