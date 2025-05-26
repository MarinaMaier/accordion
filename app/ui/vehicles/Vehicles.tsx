// i used server-side rendering
import { fetchVehiclesData } from "@/app/lib/utils";
import { type Vehicles } from "@/app/lib/definitions";

export default async function VehiclesData() {
  const data = await fetchVehiclesData();
  return (
    <section>
      {data.prices.map((item: Vehicles) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </section>
  );
}
