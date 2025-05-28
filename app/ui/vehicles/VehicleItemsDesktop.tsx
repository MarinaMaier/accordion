import Image from "next/image";
import { VehicleItemProps, VehicleCategories } from "@/app/lib/definitions";

export default function VehicleItemDesktop({
  vehicle,
  isCostDecree,
}: VehicleItemProps) {
  return (
    <section className="desktop:block mobile:hidden tablet:hidden overflow-hidden rounded-xl">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-[var(--yellowText)] text-black font-normal text-base leading-none text-center">
          <tr>
            <th className="w-[834px] h-[72px] pt-5 pr-4 pb-5 pl-4 font-normal text-base leading-none text-center align-middle px-4 py-3 rounded-tl-xl">
              Тип транспортного средства (ТС)
            </th>
            <th className="w-[207px] h-[72px] pt-5 pr-4 pb-5 pl-4 text-center align-middle font-sans font-normal text-base leading-none">
              Категория ТС
            </th>
            <th className="w-[207px] h-[72px] pt-5 pr-4 pb-5 pl-4 text-center align-middle font-sans font-normal text-base leading-none">
              Цена предприятия, руб.
            </th>
          </tr>
        </thead>
        <tbody className="text-white bg-[#1C1C1C]">
          {vehicle.categories.map((category: VehicleCategories) => (
            <tr
              key={`${vehicle.id}-${category.id}`}
              className="w-[834px] h-[103px] border border-[#EFEFEF14] p-4 align-middle"
            >
              <td className="w-[207px] h-[103px] border border-[#EFEFEF14] p-4 align-middle">
                <div className="flex items-center gap-4">
                  <Image
                    src={`/icons/${category.title}.svg`}
                    className="rounded-full"
                    alt={`${category.title}'s profile picture`}
                    width={51.47}
                    height={14.64}
                  />
                  {category.description}
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-4 p-4 w-full h-[89px]">
                  {category.title}
                </div>
              </td>
              <td className="w-[207px] h-[103px] border border-[#EFEFEF14] p-4 text-center align-middle">
                {isCostDecree ? category.costDecree : category.cost}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
