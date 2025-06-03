import AccordionTable from "./ui/accordion/Accordion";
import { fetchVehiclesData } from "./lib/api";
import { ServicesCost } from "./lib/types";
export default async function Home() {
  const data: ServicesCost = await fetchVehiclesData(); // ssr
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-left min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h2 className="font-family font-bold lg:text-[40px] text-[24px] leading-[100%] tracking-[0%] align-middle text-left">
        ЦЕНЫ
      </h2>
      <AccordionTable data={data} />
    </main>
  );
}
