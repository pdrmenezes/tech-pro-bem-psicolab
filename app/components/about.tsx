import Image from "next/image";

export function AboutSection() {
  return (
    <section className="pt-16 max-w-5xl p-4">
      <h2 className="text-4xl mb-16 font-semibold text-center">A Psicolab</h2>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 w-1/2 bg-[#FFF4F0] px-12 py-20 rounded-2xl">
          <h3 className="text-3xl">Missão e Valores</h3>
          <p>
            Na Mente em Paz, acreditamos que a saúde mental é um direito de
            todos. Nossa missão é oferecer apoio acessível e de qualidade,
            promovendo o bem-estar emocional e combatendo o estigma da saúde
            mental no Brasil.
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-slate-200 w-1/2 rounded-2xl">
          <Image src="/about-image.png" width={512} height={352} alt="About image" className="w-full h-auto"/>
        </div>
      </div>
    </section>
  );
}
