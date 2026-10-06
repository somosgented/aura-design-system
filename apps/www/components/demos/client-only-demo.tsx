import { ClientOnly } from "@/components/ui/ClientOnly";

export const ClientOnlyDemo = () => (
  <ClientOnly fallback={<span>Waiting for the client</span>}>
    <span>Ready on the client</span>
  </ClientOnly>
)