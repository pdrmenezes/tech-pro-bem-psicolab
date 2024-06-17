import Image from "next/image";
import clockIcon from "../assets/clock-icon.svg";

export function PeopleSection() {
  return (
    <section className="pt-16 max-w-5xl p-4 mx-auto">
      <h2 className="text-4xl mb-3 font-semibold text-center">Profissionais</h2>
      <p className="mb-16 text-center mx-auto max-w-xl">
        Nossos psicólogos, psiquiatras e terapeutas experientes estão prontos
        para te acolher e te guiar no caminho para o bem-estar.
      </p>
      <div className="w-[1040px] h-[318px] justify-center items-start gap-10 inline-flex">
        <div className="grow shrink basis-0 self-stretch rounded-lg shadow flex-col justify-start items-start inline-flex">
          <div className="pb-[3px] justify-end items-center inline-flex">
            <Image
              src="/p1.png"
              alt="person card"
              className="w-[320px] h-auto rounded-t-lg"
              width={320}
              height={190}
            />
          </div>
          <div className="self-stretch h-[126px] px-3 py-2.5 bg-white flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-start items-start gap-3.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-gray-700 text-base font-medium leading-normal">
                  Dra. Anabela Langa
                </div>
                <div className="self-stretch text-gray-500 text-sm font-normal leading-tight">
                  especialista em ansiedade e depressão, com 15 anos de
                  experiência.
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-[81px] inline-flex">
              <div className="justify-start items-center gap-[3px] flex">
                <div className="w-[13px] h-[13px] relative">
                  <Image
                    src={clockIcon}
                    alt="clock icon"
                    width={15}
                    height={15}
                  />
                </div>
                <div className="text-gray-500 text-xs font-normal leading-none">
                  Ver horários
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch rounded-lg shadow flex-col justify-start items-start inline-flex">
          <div className="pb-[3px] justify-end items-center inline-flex">
            <Image
              src="/p2.png"
              alt="person card"
              className="w-[320px] h-auto rounded-t-lg"
              width={320}
              height={190}
            />
          </div>
          <div className="self-stretch h-[126px] px-3 py-2.5 bg-white flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-start items-start gap-3.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-gray-700 text-base font-medium leading-normal">
                  Dr. Henrique Langa
                </div>
                <div className="self-stretch text-gray-500 text-sm font-normal leading-tight">
                  especialista em ansiedade e depressão, com 15 anos de
                  experiência.
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-[81px] inline-flex">
              <div className="justify-start items-center gap-[3px] flex">
                <div className="w-[13px] h-[13px] relative">
                  <Image
                    src={clockIcon}
                    alt="clock icon"
                    width={15}
                    height={15}
                  />
                </div>
                <div className="text-gray-500 text-xs font-normal leading-none">
                  Ver horários
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch rounded-lg shadow flex-col justify-start items-start inline-flex">
          <div className="pb-[3px] justify-end items-center inline-flex">
            <Image
              src="/p3.png"
              alt="person card"
              className="w-[320px] h-auto rounded-t-lg"
              width={320}
              height={190}
            />
          </div>
          <div className="self-stretch h-[126px] px-3 py-2.5 bg-white flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-start items-start gap-3.5 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-gray-700 text-base font-medium leading-normal">
                  Dr. Paulo Langa
                </div>
                <div className="self-stretch text-gray-500 text-sm font-normal leading-tight">
                  especialista em ansiedade e depressão, com 15 anos de
                  experiência.
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-[81px] inline-flex">
              <div className="justify-start items-center gap-[3px] flex">
                <div className="w-[13px] h-[13px] relative">
                  <Image
                    src={clockIcon}
                    alt="clock icon"
                    width={15}
                    height={15}
                  />
                </div>
                <div className="text-gray-500 text-xs font-normal leading-none">
                  Ver horários
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-10">
        <button className="flex items-center justify-center min-w-fit gap-2 w-fit px-8 py-2 text-slate-700 outline outline-slate-500 rounded-full hover:bg-slate-500 hover:text-white">
          Ver mais profissionais
        </button>
      </div>
    </section>
  );
}
