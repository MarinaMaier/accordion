"use client";
import { ChevronIcon } from "./ChevronIcon";
import { Accordion, AccordionItem } from "@heroui/accordion";
import VehicleItemsDesktop from "../vehicles/VehicleItemsDesktop";
import VehicleItemMobile from "../vehicles/VehicleItemsMobile";
import VehicleItemTablet from "../vehicles/VehicleItemsTablet";
import { Vehicles, AccordionProps } from "@/app/lib/definitions";

export default function AccordionTable({ data }: AccordionProps) {
  return (
    <Accordion
      selectionMode="multiple"
      variant="bordered"
      defaultExpandedKeys={["1"]}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            overflowY: "unset",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            overflowY: "hidden",
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      {data.prices.map((item: Vehicles) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          classNames={{
            trigger: "px-6 py-4",
            content: "px-4 py-2",
            title:
              "text-[var(--whiteText)] data-[open=true]:text-[var(--yellowText)] transition-colors duration-300 m-2",
          }}
          indicator={({ isOpen }) => <ChevronIcon isOpen={!isOpen} />}
        >
          <div className="block md:hidden">
            <VehicleItemMobile
              vehicle={item}
              isCostDecree={data.isCostDecree}
            />
          </div>
          <div className="hidden md:block lg:hidden">
            <VehicleItemTablet
              vehicle={item}
              isCostDecree={data.isCostDecree}
            />
          </div>
          <div className="hidden lg:block">
            <VehicleItemsDesktop
              vehicle={item}
              isCostDecree={data.isCostDecree}
            />
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
