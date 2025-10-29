import { LinkCustom } from "@/components/atom/Link";
import { BentoGrid } from "@/components/organism/BentoGrid";
import { HERO } from "@/data/constante";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen w-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-screen flex-col-reverse sm:flex-col items-center justify-between py-32 px-16 dark:bg-black md:max-w-4xl md:flex-row">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {HERO.TITLE}
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {HERO.SUBTITLE}
            </p>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full md:w-fit">
              <LinkCustom href={""}>Proyectos</LinkCustom>
              <LinkCustom href={""} variant="secondary">
                Github
              </LinkCustom>
            </div>
          </div>
          <img
            src={HERO.IMAGE.href}
            alt={HERO.IMAGE.alt}
            className="rounded-full w-44 h-44 object-cover"
          />
        </main>
      </div>
      <div className="flex min-h-screen w-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main>
          <BentoGrid></BentoGrid>
        </main>
      </div>
    </>
  );
}
