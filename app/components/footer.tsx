import Logo from "../assets/logo.svg";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-[#E2E8F0]">
            <div className="flex items-center p-4 justify-between mx-auto max-w-5xl">
                <div className="flex items-center gap-4">
                <Image
                    src={Logo}
                    alt="Psicolab Logo"
                    width={40}
                    height={40}
                />
                <p className="text-[#494949]">Somos uma organização</p>
                </div>   
                <ul className="flex gap-3">
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                </ul>
            </div>
                <div className="flex justify-between mx-auto max-w-5xl">
                    <div className="flex items-center p-4 gap-3 text-slate-800 font-bold">
                        <a>Pedir ajuda</a>
                        <a>Agendar com profissional</a>
                        <a>Me tornar voluntário</a>
                    </div>             
                    <ul className="flex items-center gap-3 text-[#494949]">
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contatos</a></li>
                    </ul>
                </div>
                <div className="flex justify-between mx-auto max-w-5xl">
                <p className="pl-4">Copyright © 2024 Psiclab. All rights reserved.</p>
                <ul className="flex items-center gap-3 text-[#494949]">
                        <li><a href="#">Termos de uso</a></li>
                        <li><a href="#">Politicas de Privacidade</a></li>
                    </ul>
                </div>

            
                {/* <div className="flex">
                    <a>Pedir ajuda</a>
                    <a>Agendar com profissional</a>
                    <a>Me tornar voluntário</a>
                    <p>Copyright © 2024 Psicolab. All rights reserved.</p>
                </div> */}
        </footer>
    )
}