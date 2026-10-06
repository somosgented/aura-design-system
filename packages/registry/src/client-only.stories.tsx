import { ClientOnly } from "../registry/default/components/ui/ClientOnly";

export const Default = () => (
  <ClientOnly fallback={<span>Waiting for the client</span>}>
    <span>Ready on the client</span>
  </ClientOnly>
);
