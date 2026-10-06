import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../registry/default/components/ui/Field";
import { Input } from "../registry/default/components/ui/Input";

export const Default = () => {
  return (
    <FieldSet className="w-full">
      <FieldLegend>Profile</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-name">Name</FieldLabel>
          <Input id="field-name" placeholder="Ada Lovelace" />
          <FieldDescription>Shown on the care plan.</FieldDescription>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="field-email">Email</FieldLabel>
          <Input id="field-email" defaultValue="not-an-email" aria-invalid />
          <FieldError>Enter a valid email.</FieldError>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};
