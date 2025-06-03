import Image from "next/image";
import { VehicleItemProps } from "@/app/lib/types";

export default function VehicleItemTablet({
  vehicle,
  isCostDecree,
}: VehicleItemProps) {
  return (
    <section className="tablet:block mobile:hidden desktop:hidden overflow-hidden mb-3">
      <p className="bg-[var(--yellowText)] rounded-t-xl text-black font-family font-semibold text-[14px] leading-none flex items-center justify-center text-center mx-auto pt-5 pr-4 pb-5 pl-4">
        Цена предприятия по типу транспортного средства
      </p>

      {vehicle.categories.map((category) => (
        <div
          key={category.id}
          className="bg-[#1C1C1C] border border-[#EFEFEF14] p-4 m-0 flex flex-col last:rounded-b-xl"
        >
          <div className="flex flex-col gap-4 items-start">
            <Image
              src={`/icons/${category.title}.svg`}
              alt={category.title}
              width={37.71}
              height={19.81}
            />
            <p className="font-family text-white text-[14px] leading-[100%] align-middle">
              {category.description}
            </p>
          </div>

          <div className="flex flex-row font-family text-[14px] leading-[100%] align-middle text-[#EFEFEF] gap-7 pt-3">
            <div className="flex flex-col justify-between">
              <span className="text-[#8E8E8E]">Категория ТС</span>
              <span className="text-white pt-2">{category.title}</span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[#8E8E8E]">Цена предприятия, руб.</span>
              <span className="text-white pt-2">
                {isCostDecree ? category.costDecree : category.cost}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
