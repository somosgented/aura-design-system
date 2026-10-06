import { useState } from "react";
import { DatePicker } from "@/components/ui/DatePicker";

export const DatePickerDemo = () => {
  const [value, setValue] = useState<Date | undefined>(new Date(2026, 3, 11));

  return <DatePicker value={value} onValueChange={setValue} />;
};