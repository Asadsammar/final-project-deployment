import { Metadata } from "next";
import DefaultLayout from "@/components2/organisms/Layouts/DefaultLaout";
import UpdateDevice from "@/components2/molecules/update/UpdateDevice";

export const metadata: Metadata = {
  title: "Add New Device",
  description: "",
};

const EditDev = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <UpdateDevice />
      </div>
    </DefaultLayout>
  );
};

export default EditDev;