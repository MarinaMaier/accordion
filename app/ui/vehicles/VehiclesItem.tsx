import Image from "next/image";
import { VehicleCategories } from "@/app/lib/definitions";
import { fetchVehiclesData } from "@/app/lib/utils";
import { type Vehicles } from "@/app/lib/definitions";

export default async function VehicleItem() {
  const data = await fetchVehiclesData();

  return (
    <table>
      <thead>
        <tr>
          <th>Тип транспортного средства (ТС)</th>
          <th>Категория ТС</th>
          <th>Цена предприятия, руб.</th>
        </tr>
      </thead>
      <tbody>
        {data.prices.flatMap((vehicle: Vehicles) =>
          vehicle.categories.map((category: VehicleCategories) => (
            <tr key={`${vehicle.id}-${category.id}`}>
              <td>
                <Image
                  src={`/icons/${category.title}.svg`}
                  className="rounded-full"
                  alt={`${category.title}'s profile picture`}
                  width={56}
                  height={57}
                />
                {category.description}
              </td>
              <td>{category.title}</td>
              <td>{data.isCostDecree ? category.costDecree : category.cost}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
