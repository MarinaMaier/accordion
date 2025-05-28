import AccordionTable from "./ui/accordion/Accordion";
import { fetchVehiclesData } from "./lib/utils";
import { ServicesCost } from "./lib/definitions";
export default async function Home() {
  const data: ServicesCost = await fetchVehiclesData(); // ssr
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-left min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h2 className="font-bold text-[40px] leading-none tracking-[0%] text-left h-[49px]">
        ЦЕНЫ
      </h2>
      <AccordionTable data={data} />
    </main>
  );
}
