import { Metadata } from "next";
import DefaultLayout from "@/components2/organisms/Layouts/DefaultLaout";
import AddDevice from "@/components2/molecules/add/AddDevice";

export const metadata: Metadata = {
  title: "Add New Device",
  description: "",
};

const AddDev = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <AddDevice />
      </div>
    </DefaultLayout>
  );
};

export default AddDev;