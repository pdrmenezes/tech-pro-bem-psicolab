import Image from "next/image";
import fbIcon from "../assets/fb-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";

export function TopNav() {
  return (
    <div className="w-full bg-[#E2E2E2]">
      <nav className="flex items-center p-4 justify-between mx-auto max-w-5xl">
        <div className="flex gap-3">
          <a className="hover:underline underline-offset-4" href="">
            <Image src={fbIcon} width={30} height={30} alt="social icon" />
          </a>
          <a className="hover:underline underline-offset-4" href="">
            <Image src={twitterIcon} width={30} height={30} alt="social icon" />
          </a>
          <a className="hover:underline underline-offset-4" href="">
            <Image
              src={linkedinIcon}
              width={30}
              height={30}
              alt="social icon"
            />
          </a>
          <a className="hover:underline underline-offset-4" href="">
            <Image
              src={instagramIcon}
              width={30}
              height={30}
              alt="social icon"
            />
          </a>
        </div>
        <div>
          <a className="hover:underline underline-offset-4" href="">
            Contatos de Emergência
          </a>
        </div>
      </nav>
    </div>
  );
}
