import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#F7F7F7] w-full pt-24 pb-28 px-4">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start md gap-4 mx-auto max-w-5xl">
        <div className="flex flex-col gap-3">
          <button className="flex gap-2 w-fit px-4 py-2 text-slate-700 bg-slate-200 rounded-full">
            Conheça a nossa história ▸
          </button>
          <h1 className="text-4xl">Você não está só.</h1>
          <p className="text-balance">
            Aqui você vai encontrar informações confiáveis sobre locais
            disponíveis para ajudar você gratuitamente ou de maneira voluntária.
          </p>
          <div className="flex sm:flex-wrap gap-5">
            <button className="flex items-center justify-center min-w-fit  gap-2 w-fit px-8 py-4 text-white bg-slate-500 rounded-full">
              Buscar ajuda
            </button>
            <button className="flex items-center justify-center min-w-fit gap-2 w-fit px-8 py-4 text-slate-700 outline outline-slate-500 rounded-full">
              Junte-se a nós como profissional
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/hero-image.png"
            alt=""
            width={411}
            height={353}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
