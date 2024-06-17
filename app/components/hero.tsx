import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#FFF4F0] w-full pt-24 pb-28 px-4">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start md gap-4 mx-auto max-w-5xl">
        <div className="flex flex-col gap-3">
          <button className="flex gap-2 w-fit px-3 py-1 mb-1 text-sm bg-[#FFBD9E] rounded-full hover:bg-slate-300">
            Conheça a nossa história ▸
          </button>
          <h1 className="text-4xl">Você não está só.</h1>
          <p className="text-balance">
            Aqui você vai encontrar informações confiáveis sobre locais
            disponíveis para ajudar você gratuitamente ou de maneira voluntária.
          </p>
          <div className="flex sm:flex-wrap gap-4 mt-4">
            <button className="flex items-center justify-center min-w-fit  gap-2 w-fit px-8 py-2 text-white bg-[#D8581F] hover:bg-[#eb7340] rounded-full">
              Buscar ajuda
            </button>
            <button className="flex items-center justify-center min-w-fit gap-2 w-fit px-8 py-2 text-slate-700 outline outline-[#D8581F] hover:text-white rounded-full hover:bg-[#D8581F]">
              Colabore conosco
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
