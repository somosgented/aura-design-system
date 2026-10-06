import { useState } from "react";

import { DatePicker } from "../registry/default/components/ui/DatePicker";

export const Default = () => {
  const [value, setValue] = useState<Date | undefined>(new Date(2026, 3, 11));

  return <DatePicker value={value} onValueChange={setValue} />;
};
