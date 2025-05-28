import Image from "next/image";
export const ChevronIcon = ({ isOpen = false }: { isOpen: boolean }) => (
  <Image
    src="/arrow.svg"
    alt="chevron"
    width={22.22}
    height={8.89}
    className={`transition-transform duration-300 ${
      isOpen ? "rotate-180" : "rotate-90"
    }`}
  />
);
