import { LinkCustom } from "../atom/Link";

export const BentoGrid = () => {
  return (
    <div className="relative w-[90vw] max-w-5xl h-96 overflow-hidden rounded-xl">
      <img
        src="https://i.pinimg.com/736x/03/ff/96/03ff96b80c31722d34cf5ae64d19e949.jpg"
        alt="alter"
        className="w-full h-full object-cover absolute top-0 right-0"
      />
      <div className=" w-full h-full bg-black/10 grid grid-cols-10 grid-rows-10 relative z-10">
        <GridItem className="col-span-2 row-span-5">
          <LinkCustom href={""}>Ver repositorio</LinkCustom>
        </GridItem>
        <GridItem className="col-span-2 row-span-2">
          <LinkCustom href={""}>Ver repositorio</LinkCustom>
        </GridItem>
        <GridItem className="col-span-2 row-span-3">
          <LinkCustom href={""}>Ver repositorio</LinkCustom>
        </GridItem>
      </div>
    </div>
  );
};

interface GridItemProps {
  children: React.ReactNode;

  colStart?: number;
  colEnd?: number;
  colSpan?: number;

  rowStart?: number;
  rowEnd?: number;
  rowSpan?: number;

  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({
  children,
  colStart,
  colEnd,
  colSpan,
  rowStart,
  rowEnd,
  rowSpan,
  className = "",
}) => {
  const colStartClass = colStart ? `col-start-${colStart}` : "";
  const colEndClass = colEnd ? `col-end-${colEnd}` : "";
  const colSpanClass = colSpan ? `col-span-${colSpan}` : "";

  const rowStartClass = rowStart ? `row-start-${rowStart}` : "";
  const rowEndClass = rowEnd ? `row-end-${rowEnd}` : "";
  const rowSpanClass = rowSpan ? `row-span-${rowSpan}` : "";

  const combinedClasses = [
    colStartClass,
    colEndClass,
    colSpanClass,
    rowStartClass,
    rowEndClass,
    rowSpanClass,
    className,
  ]
    .join(" ")
    .trim();

  // 4. Renderiza el div
  return (
    <div
      className={`${combinedClasses} bg-black rounded-lg flex items-center justify-center p-2`}
    >
      <div className="bg-white w-full h-full rounded-md flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
