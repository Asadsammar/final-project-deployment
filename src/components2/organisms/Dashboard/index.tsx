"use client";
import React from "react";
import LecturerCard from "@/components2/molecules/LecturerCard";
import SearchForm from "@/components2/atoms/SearchForm";
import { NextResponse } from 'next/server'
const Dashboard: React.FC = () => {
  return (
    <>
      <div className="mt-4 flex justify-center">
        <SearchForm />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4 2xl:mt-9 2xl:gap-7.5">
        <LecturerCard/>
        <LecturerCard/>
        <LecturerCard/>
        <LecturerCard/>
      </div>
    </>
  );
};

export default Dashboard;
