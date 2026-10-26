import {
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type RefObject,
} from "react";

type FieldType = "text" | "textarea" | "select" | "checkbox";

interface useFormDynamicProps {
  [key: string]: FieldType;
}

const initialValueResolver = {
  text: "",
  textarea: "",
  select: "",
  checkbox: false,
};

const useInputValueFields = (initialValues: useFormDynamicProps = {}) => {
  const resolvedInitialValues = Object.entries(initialValues).reduce(
    (acc, [key, type]) => {
      acc[key] = initialValueResolver[type];
      return acc;
    },
    {} as Record<string, string | boolean>
  );

  const [value, setValue] = useState<Record<string, string | boolean>>(
    resolvedInitialValues
  );
  const [error, setError] = useState<string | null>(null);
  const [touch, setTouch] = useState<Record<string, boolean>>({});

  return {
    types: initialValues,
    value,
    error,
    touch,
    setTouch,
    setValue,
    setError,
  };
};

export type FieldProps = {
  name: string;
  type: FieldType;
  value: string | boolean;
  setValue: (
    value: string | boolean,
    formRef?: RefObject<HTMLFormElement | null>
  ) => void;
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onCheckedChange: ChangeEventHandler<HTMLInputElement> &
    ((checked: boolean) => void);
  touch: boolean;
  setTouch: (value: boolean) => void;
  reset: () => void;
};

export const useFormDynamic = (
  initialValues: useFormDynamicProps,
  formGeneralRef?: RefObject<HTMLFormElement | null>
) => {
  const [fetchStatus, setFetchStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const fields = useInputValueFields(initialValues);

  const updateField = (
    name: string,
    updates: { value?: string | boolean; touch?: boolean }
  ) => {
    if (updates.value !== undefined) {
      const nextValue = updates.value;
      fields.setValue((prev) => ({ ...prev, [name]: nextValue }));
    }

    if (updates.touch !== undefined) {
      const nextTouch = updates.touch;
      fields.setTouch((prev) => ({ ...prev, [name]: nextTouch }));
    }
  };

  const field = (name: string): FieldProps => {
    const fieldType = fields.types[name];
    const defaultValue = initialValueResolver[fieldType];

    const handleChange = (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const value = event.target.value;

      updateField(name, {
        value,
        touch: true,
      });
    };

    const handleOnCheckedChange = (event: boolean): void => {
      updateField(name, {
        value: event,
        touch: true,
      });
    };

    const setFormFieldValue = (
      value: string | boolean,
      formRef: RefObject<HTMLFormElement | null> | undefined = formGeneralRef
    ): void => {
      if (formRef) {
        const input = formRef?.current?.querySelector(`[name="${name}"]`) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement
          | null;

        if (input) {
          if (input instanceof HTMLInputElement && input.type === "checkbox") {
            (input as HTMLInputElement).checked = value as boolean;
          } else {
            input.value = String(value);
          }
        }
      }
      updateField(name, {
        value: value,
      });
    };

    return {
      name,
      type: fields.types[name],
      value: fields.value[name] ?? defaultValue,
      setValue: setFormFieldValue,
      onChange: handleChange,
      onCheckedChange:
        handleOnCheckedChange as ChangeEventHandler<HTMLInputElement> &
          ((checked: boolean) => void),
      touch: fields.touch[name] ?? false,
      setTouch: (value: boolean) => updateField(name, { touch: value }),
      reset: () =>
        updateField(name, {
          value: defaultValue,
          touch: false,
        }),
    };
  };

  const getFields = () => {
    return Object.keys(fields.value).reduce(
      (acc, key) => {
        acc[key] = field(key);
        return acc;
      },
      {} as Record<string, ReturnType<typeof field>>
    );
  };

  const resetForm = (
    formRef: RefObject<HTMLFormElement | null>,
    initialValues?: Record<string, string | boolean>
  ): void => {
    const fields = getFields();

    for (const field in fields) {
      fields[field].reset();
      fields[field].setValue(
        initialValues?.[field] ?? initialValueResolver[fields[field].type],
        formRef
      );
    }
  };

  const touchForm = () => {
    const fields = getFields();
    for (const field in fields) {
      updateField(field, { value: fields[field].value, touch: true });
    }
  };

  const getValues = () => {
    return Object.keys(fields.value).reduce(
      (acc, key) => {
        acc[key] = fields.value[key];
        return acc;
      },
      {} as Record<string, string | boolean>
    );
  };

  return {
    ...fields,
    resetForm,
    touchForm,
    field,
    getFields,
    getValues,
    fetchStatus,
    setFetchStatus,
  };
};
