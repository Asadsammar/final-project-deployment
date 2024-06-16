import { Metadata } from "next";
import DefaultLayout from "@/components2/organisms/Layouts/DefaultLaout";
import ScannedDev from "@/components2/organisms/ScannedDev";

export const metadata: Metadata = {
  title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const DevSettings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <ScannedDev />
      </div>
    </DefaultLayout>
  );
};

export default DevSettings;