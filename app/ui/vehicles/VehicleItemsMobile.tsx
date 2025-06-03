import Image from "next/image";
import { VehicleItemProps } from "@/app/lib/types";

export default function VehicleItemMobile({
  vehicle,
  isCostDecree,
}: VehicleItemProps) {
  return (
    <section className="mobile:block tablet:hidden desktop:hidden mb-3">
      <p
        className="bg-[var(--yellowText)] rounded-t-xl text-black 
                  font-family font-medium text-[14px] leading-none flex items-center justify-center text-center mx-auto pt-5 pr-4 pb-5 pl-4"
      >
        Цена предприятия по типу транспортного средства
      </p>

      {vehicle.categories.map((category) => (
        <div
          key={category.id}
          className="bg-[#1C1C1C] border border-[#EFEFEF14] p-4 flex flex-col last:rounded-b-xl"
        >
          <div className="flex flex-col gap-4 items-start pb-2">
            <Image
              src={`/icons/${category.title}.svg`}
              alt={category.title}
              width={37.71}
              height={19.81}
            />
            <p className="font-inter font-normal text-[14px] leading-[23.4px] text-white text-sm leading-snug">
              {category.description}
            </p>
          </div>

          <div className="flex flex-col font-inter font-normal text-[14px] leading-[100%] text-[#EFEFEF] gap-3">
            <div className="flex justify-between pt-2 pb-2">
              <span className="text-[#8E8E8E]">Категория ТС</span>
              <span className="text-white">{category.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E8E]">Цена предприятия, руб.</span>
              <span className="text-white">
                {isCostDecree ? category.costDecree : category.cost}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
