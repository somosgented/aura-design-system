import { KeyValue, KeyValueItem } from "@/components/ui/KeyValue";

export const KeyValueDemo = () => {
  return (
    <KeyValue>
      <KeyValueItem label="Plan">Studio</KeyValueItem>
      <KeyValueItem label="Seats">12</KeyValueItem>
      <KeyValueItem label="Region">East</KeyValueItem>
    </KeyValue>
  );
};