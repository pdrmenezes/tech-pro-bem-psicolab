import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#F7F7F7] w-full h-[85vh] pt-24 pb-28 px-4">
      <div className="flex gap-4 mx-auto max-w-5xl">
        <div className="flex flex-col gap-3">
          <button className="flex gap-2 w-fit px-4 py-2 text-slate-700 bg-slate-200 rounded-full">
            Me tornar voluntário ▸
          </button>
          <h1 className="text-4xl">Você não está só.</h1>
          <p className="text-balance">
            Aqui você vai encontrar informações confiáveis sobre locais
            disponíveis para ajudar você gratuitamente ou de maneira voluntária.
          </p>
          <div className="flex gap-5">
            <button className="flex min-w-fit gap-2 w-fit px-8 py-4 text-white bg-slate-500 rounded-full">
              Precisa de ajuda?
            </button>
            <button className="flex gap-2 w-fit px-8 py-4 text-slate-700 outline outline-slate-500 rounded-full">
              Nossa história
            </button>
          </div>
        </div>
        <div>
          <div className="rounded-2xl w-[411px] h-[353px] bg-slate-200"></div>
          {/* <Image src="" alt="" width={} height={} /> */}
        </div>
      </div>
    </section>
  );
}
