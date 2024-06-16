import { Metadata } from "next";
import DefaultLayout from "@/components2/organisms/Layouts/DefaultLaout";
import LecturerSetting from "@/components2/molecules/LecturerSetting";

export const metadata: Metadata = {
  title: "Lecturer Information Settings",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const LectSettings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <LecturerSetting />
      </div>
    </DefaultLayout>
  );
};

export default LectSettings