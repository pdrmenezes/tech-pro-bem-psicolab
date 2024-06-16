import Image from "next/image";
import userIcon from "../assets/user-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";
import briefcaseIcon from "../assets/briefcase-icon.svg";
import globeIcon from "../assets/globe-icon.svg";

export function ImpactSection() {
  return (
    <section className="pt-16 max-w-5xl p-4 mx-auto">
      <h2 className="text-4xl mb-3 font-semibold text-center">Impacto</h2>
      <p className="mb-16 text-center mx-auto max-w-xl">
        Em 2023, impactamos mais de 5.000 vidas através de nossos serviços de
        terapia, grupos de apoio e programas de prevenção.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 mb-20">
        <div className="min-w-[150px] flex flex-col gap-2 justify-center items-center">
          <Image src={userIcon} width={50} height={50} alt="user icon" />
          <p className="text-4xl font-medium text-gray-500">5000</p>
          <small className="text-gray-500">Pessoas atendidas</small>
        </div>
        <div className="min-w-[150px] flex flex-col gap-2 justify-center items-center">
          <Image src={calendarIcon} width={50} height={50} alt="user icon" />
          <p className="text-4xl font-medium text-gray-500">5000</p>
          <small className="text-gray-500">Consultas agendadas</small>
        </div>
        <div className="min-w-[150px] flex flex-col gap-2 justify-center items-center">
          <Image src={briefcaseIcon} width={50} height={50} alt="user icon" />
          <p className="text-4xl font-medium text-gray-500">5000</p>
          <small className="text-gray-500">Profissionais voluntários</small>
        </div>
        <div className="min-w-[150px] flex flex-col gap-2 justify-center items-center">
          <Image src={globeIcon} width={50} height={50} alt="user icon" />
          <p className="text-4xl font-medium text-gray-500">5000</p>
          <small className="text-gray-500">Visitantes</small>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 w-1/2 bg-[#C8F3FF] p-12 rounded-2xl">
          <h3 className="text-3xl">Ajuda para mim</h3>
          <p className="flex-grow mb-6">
            Você está passando por algum sofrimento ou questão em saúde mental?
            A gente pode ajudar.
          </p>
          <button className="flex items-center justify-center min-w-fit  gap-2 w-fit px-8 py-4 text-black bg-[#7BBDD0] rounded-full">
            Buscar ajuda
          </button>
        </div>
        <div className="flex flex-col gap-4 w-1/2 bg-[#FFB899] p-12 rounded-2xl">
          <h3 className="text-3xl">Ajuda para alguém</h3>
          <p className="flex-grow mb-6">
            Alguém que você conhece está precisando de apoio em saúde mental?
            Conheça locais que podem ajudar
          </p>
          <button className="flex items-center justify-center min-w-fit  gap-2 w-fit px-8 py-4 text-white bg-[#D8581F] rounded-full">
            Buscar ajuda
          </button>
        </div>
      </div>
    </section>
  );
}
