type LinkVariant = "primary" | "secondary";

type LinkProps = {
  variant?: LinkVariant;
  children: React.ReactNode;
  href: string;
};

const style: Record<LinkVariant, string> = {
  primary:
    "gap-2 bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]",
  secondary:
    "border border-solid transition-colors hover:border-transparent dark:border-white/[.145] dark:hover:bg-[#1a1a1a]",
};

export const LinkCustom = ({
  children,
  href,
  variant = "primary",
}: LinkProps) => {
  const className = `cursor-pointer flex h-12 w-full items-center justify-center rounded-full px-5 md:w-[158px] ${style[variant]}`;

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
