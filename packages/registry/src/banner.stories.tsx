import { Banner } from "../registry/default/components/ui/Banner";

export const Default = () => (
  <Banner action={<button type="button">Review</button>} onDismiss={() => undefined}>
    A new color scale is ready.
  </Banner>
);
