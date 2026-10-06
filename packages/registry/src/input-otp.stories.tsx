import { useState } from "react";

import { InputOTP } from "../registry/default/components/ui/InputOTP";

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <div className="grid gap-1">
      <InputOTP
        value={value}
        onValueChange={setValue}
        separatorAfter={3}
        name="code"
      />
      <p className="text-sm text-gray-11">Code: {value || "empty"}</p>
    </div>
  );
};
