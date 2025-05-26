import Image from "next/image";
import { VehicleItemProps, VehicleCategories } from "@/app/lib/definitions";

export default function VehicleItem({
  vehicle,
  isCostDecree,
}: VehicleItemProps) {
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
        {vehicle.categories.map((category: VehicleCategories) => (
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
            <td>{isCostDecree ? category.costDecree : category.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
