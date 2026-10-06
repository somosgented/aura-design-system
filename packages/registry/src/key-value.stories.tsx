import { KeyValue, KeyValueItem } from "../registry/default/components/ui/KeyValue";

export const Default = () => {
  return (
    <KeyValue>
      <KeyValueItem label="Plan">Studio</KeyValueItem>
      <KeyValueItem label="Seats">12</KeyValueItem>
      <KeyValueItem label="Region">East</KeyValueItem>
    </KeyValue>
  );
};
