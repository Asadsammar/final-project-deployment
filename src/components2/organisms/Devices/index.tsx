"use client";
import React from "react";
import AddDevice from "@/components2/atoms/AddDevice";
import TableDevice from "@/components2/molecules/TableDevice";

const Devices: React.FC = () => {
  return (
    <>
      <div className="mt-4 flex justify-between">
        <AddDevice />
      </div>
      <div className="mt-5">
      <TableDevice />
      </div>
    </>
  );
};

export default Devices;