"use client";
import React from "react";
import Image from "next/image";
import SelectDevType from "@/components2/atoms/SelectDevType";
import SelectLecturer from "@/components2/atoms/SelectLecturer";

const AddDevice = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                New Device
              </h3>
            </div>
            <div className="p-7">
              <form>
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                      htmlFor="fullName"
                    >
                      Type
                    </label>
                    <div className="relative">
                      <SelectDevType />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                  <label
                      className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                      htmlFor="fullName"
                    >
                      Lecturer
                    </label>
                    <div className="relative">
                      <SelectLecturer />
                    </div>
                  </div>
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                    htmlFor="macaddress"
                  >
                    MAC Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-4.5 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636363" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                    </span>
                    <input
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="macaddress"
                      id="macaddress"
                      placeholder="Insert MAC Address here"
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    className="flex justify-center rounded-[7px] bg-fuchsia-500 px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDevice;
