import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { DirectionProvider } from "@/components/ui/Direction";

export const DirectionDemo = () => {
  return (
    <DirectionProvider dir="ltr" className="w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Direction</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </DirectionProvider>
  );
};

export const DirectionDemoRtl = () => {
  return (
    <DirectionProvider dir="rtl" className="w-full">
      <p className="text-gray-12">القراءة من اليمين إلى اليسار</p>
    </DirectionProvider>
  );
};