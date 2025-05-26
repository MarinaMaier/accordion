"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import VehicleItem from "../vehicles/VehiclesItem";
import { Vehicles, AccordionProps } from "@/app/lib/definitions";

export default function AccordionTable({ data }: AccordionProps) {
  return (
    <Accordion
      selectionMode="multiple"
      variant="shadow"
      defaultExpandedKeys={["1"]}
    >
      {data.prices.map((item: Vehicles) => (
        <AccordionItem key={item.id} title={item.title}>
          <VehicleItem vehicle={item} isCostDecree={data.isCostDecree} />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
