import { HERO } from "@/data/constante";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {HERO.TITLE}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {HERO.SUBTITLE}{" "}
          </p>
          <img
            src="https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/464621534_1312533213530471_8445062473960682421_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xUcyeBbwTUcQ7kNvwEvn6YZ&_nc_oc=AdlsI_uTrmtkwa6KHT0CgdcHZv6AxQxMG2-vqLflcgMdocrFSwHa83xlPXpctQKRVr0&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=4P7asWVVcDCCMdy-MQ6mzA&oh=00_Afc6OgavYmS56ny3oZvDWSjTzRXn3wlbD_yWHX9I1w08jg&oe=69077088"
            alt=""
            className="rounded-full w-44 h-44 object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proyectos
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:border-transparent dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </main>
    </div>
  );
}
