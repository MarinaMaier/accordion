// типы данных

export type VehicleCategories = {
  id: number;
  title: string;
  description: string;
  costDecree: number;
  cost: number;
};

export type Vehicles = {
  id: number;
  title: string;
  categories: VehicleCategories[];
};

export type ServicesCost = {
  isCostDecree: boolean;
  prices: Vehicles[];
};

export type VehicleItemProps = {
  vehicle: Vehicles;
  isCostDecree: boolean;
};

export type AccordionProps = {
  data: ServicesCost;
};
