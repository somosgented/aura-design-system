import { Banner } from "@/components/ui/Banner";

export const BannerDemo = () => (
  <Banner action={<button type="button">Review</button>} onDismiss={() => undefined}>
    A new color scale is ready.
  </Banner>
)