"use client";
import React from "react";
import FilterDate from "@/components2/molecules/FilterDate";
import TableScan from "@/components2/molecules/TableScan"

const ScannedDev: React.FC = () => {
  return (
    <>
      <div className="mt-4 flex justify-between">
        <FilterDate />
      </div>
      <div className="mt-5">
      <TableScan />
      </div>
    </>
  );
};

export default ScannedDev;