import AccordionTable from "./ui/accordion/Accordion";
import { fetchVehiclesData } from "./lib/utils";
export default async function Home() {
  const data = await fetchVehiclesData();
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Цены</h1>
      <AccordionTable data={data} />
    </main>
  );
}
