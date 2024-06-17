import Image from "next/image";
import Logo from "../assets/logo.svg";
import fbIcon from "../assets/fb-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";

export function Footer() {
    return (
        <footer className="w-full bg-[#E2E8F0] py-14">
            <div className="flex items-center pb-10 justify-between mx-auto max-w-5xl">
            <div>
            <div className="flex items-center gap-6 pb-4">
            <Image
                 src={Logo}
                alt="Psiclab Logo"
                width={40}
                height={40}
            />
          <a className="text-[#494949]" href="">
            Somos uma organização
          </a>
            </div>
        </div>
            <div className="flex gap-4">
          <a href="">
            <Image src={fbIcon} width={30} height={30} alt="social icon" />
          </a>
          <a href="">
            <Image src={twitterIcon} width={30} height={30} alt="social icon" />
          </a>
          <a href="">
            <Image
              src={linkedinIcon}
              width={30}
              height={30}
              alt="social icon"
            />
          </a>
          <a href="">
            <Image
              src={instagramIcon}
              width={30}
              height={30}
              alt="social icon"
            />
          </a>
        </div>            
            </div>
            <div className="flex justify-between border-t border-slate-400 pb-4 pt-10 mx-auto max-w-5xl">
                <div className="flex items-center gap-3 text-slate-800 font-medium">
                <a>Pedir ajuda</a>
                <a>Agendar com profissional</a>
                <a>Me tornar voluntário</a>
                </div>
                <div className=" flex gap-3 text-[#494949]">
                    <a>Sobre</a>
                    <a>Sobre nós</a>
                    <a>Blogs</a>
                    <a>Contatos</a>
                </div>
            </div>
            <div className="flex justify-between mx-auto max-w-5xl">
                <div>
                    <p>Copyright - Psiclab 2024 - Todos os direitos reservados</p>
                </div>
                <div className="flex gap-3 text-[#494949]">
                    <a>Termos de Uso</a>
                    <a>Políticas de Privacidade</a>
                </div>
            </div>
        </footer>  
    )
}