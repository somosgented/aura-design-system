# Forms

Applies when editing forms (`**/form.tsx`, `**/Form.tsx`, `**/use-dynamic-form.ts`), server actions (`**/actions.ts`, `**/Actions.ts`, `**/*-actions.ts`, `**/*Actions.ts`, `app/**/route.ts`), and validation schemas (`**/validation/**`, `**/Validation/**`, `**/*schema*`, `**/*Schema*`). The end-to-end procedure is skill `aura-forms`.

Forms use **useFormDynamic** for state, **Form** for error distribution, and **validateFormData** from `@/utils/web-validation`. Schema property names match field names so errors match by `instancePath`.

## Contents

- ajv, not another validator
- Shared schema and server action
- Field components and the 17px floor

---

## ajv, not another validator

Validate with ajv via `validateFormData` / JSON Schema; do not add zod, yup or valibot.

**Incorrect:**

```ts
import { z } from "zod";

const profileSchema = z.object({
  email: z.string().email(),
});
```

**Correct:**

```ts
const profileSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
  },
  required: ["email"],
  additionalProperties: false,
};
```

---

## Shared schema and server action

Keep each JSON Schema in one shared module (for example `lib/validation/<name>.schema.ts`). The client form and the server action import the same schema.

Build forms with `useFormDynamic(initialValues, formRef?)` and pass fields from `getFields()` / `field(name)` into Form field components. Validate with `validateFormData(schema, formData.getValues())` and pass returned `errors` to `<Form>`. On failure call `formData.touchForm()`.

Submit to a Next.js server action. Inside every action, check auth and authorization, then re-validate the input with `validateFormData` and the shared schema. Return `{ errors }` in the ajv shape so `<Form>` can show them.

**Incorrect:**

```tsx
<input aria-invalid={Boolean(errors.email)} />
```

**Correct:**

```tsx
<Form errors={errors}>
  <FormField field={email} label="Email">
    <Input type="email" />
  </FormField>
</Form>
```

Do not pass `errors` into each field. Use `FormField`, `FormSwitch`, `FormCheckbox`, and groups per control type. Use `FormAlert` when `fetchStatus === "error"`.

---

## Field components and the 17px floor

Keep editable controls ≥ 17px (see [typography.md](./typography.md)). Do not override control padding via call-site `className`.
