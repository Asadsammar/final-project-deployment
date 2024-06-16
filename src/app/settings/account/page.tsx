import { Metadata } from "next";
import DefaultLayout from "@/components2/organisms/Layouts/DefaultLaout";
import AccSetting from "@/components2/molecules/AccSetting";

export const metadata: Metadata = {
  title: "Account Setting",
  description: "",
};

const AccSettings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <AccSetting />
      </div>
    </DefaultLayout>
  );
};

export default AccSettings;
