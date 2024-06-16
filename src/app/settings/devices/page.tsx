import { Metadata } from "next";
import DefaultLayout from "@/components2/organisms/Layouts/DefaultLaout";
import Devices from "@/components2/organisms/Devices";

export const metadata: Metadata = {
  title: "Devices Settings",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const DevSettings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Devices />
      </div>
    </DefaultLayout>
  );
};

export default DevSettings;