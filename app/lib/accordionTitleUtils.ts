import { Key } from "@react-types/shared";

export function getAccordionTitleColor(
  expandedKeys: Iterable<Key>,
  itemId: Key
): string {
  return Array.from(expandedKeys).includes(itemId)
    ? "text-yellow-brand"
    : "text-white-brand";
}
