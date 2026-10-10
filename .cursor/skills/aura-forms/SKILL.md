---
name: aura-forms
description: >-
  Build Aura forms with useFormDynamic, Form error injection, and
  validateFormData from @/utils/web-validation. Use when composing or
  fixing form flows under *form* or web-validation paths.
---

# Aura forms

Guardrails live in `.cursor/rules/components-forms.mdc`. This skill is the composition procedure.

## Stack

* State: `useFormDynamic(initialValues, formRef?)` where values are `"text" | "textarea" | "select" | "checkbox"`.
* Fields: `formData.getFields()` or `formData.field(name)` → pass as `field` prop.
* Values: `formData.getValues()` for validate and submit.
* Errors: `validateFormData(schema, values)` from `@/utils/web-validation` → `errors` on `<Form>`. Form matches `error.instancePath.slice(1)` to `field.name`.
* Loading/error chrome: `formData.fetchStatus`, `FormAlert`, `FormSubmit` with matching `form={id}`.

## Submit flow

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  formData.setFetchStatus("loading");
  const { isValid, errors } = validateFormData(schema, formData.getValues());
  if (!isValid) {
    formData.setFetchStatus("error");
    formData.touchForm();
    formData.setError("Please fix the errors below.");
    return;
  }
  // submit...
  formData.setFetchStatus("success");
};
```

## Field wiring

* Native controls → `FormField` with `field.onChange`.
* Switch/checkbox → `FormSwitch` / `FormCheckbox` with `field.value` + `field.onCheckedChange`.
* Groups → `FormCheckboxGroup` / `FormRadioGroup` with `field.setValue`.
* Composed controls (Select, Combobox, Editor, …) → `field.setValue` in the change handler. Select stays uncontrolled + `onValueChange`.
* Show field errors only when `field.touch && errors?.length > 0` (Form field components do this via `serverInvalid`).

## Example

```tsx
const formData = useFormDynamic({ name: "text", email: "text" }, formRef);
const { name, email } = formData.getFields();
const { errors } = validateFormData(schema, formData.getValues());

<Form ref={formRef} onSubmit={handleSubmit} errors={errors ?? undefined} id="my-form">
  <FormAlert formData={{ fetchStatus: formData.fetchStatus, error: formData.error }} />
  <FormField field={name} label="Name *"><Input type="text" /></FormField>
  <FormField field={email} label="Email *"><Input type="email" /></FormField>
  <FormSubmit fetchStatus={formData.fetchStatus} buttonProps={{ children: "Submit" }} form="my-form" />
</Form>
```

## After UI edits

Run skill `verify-aura-ui`. Keep editable controls ≥ 17px and do not override control padding at the call site.
