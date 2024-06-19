import React, { useState } from "react";

const AddDevice = () => {
  return (
    <>
      <div className="w-full content-end">
    <button
                    className="flex flex-row gap-3 rounded-[7px] bg-fuchsia-500 px-6 py-3 font-medium text-gray-2 hover:bg-opacity-90 dark:bg-gray-7 dark:hover:bg-opacity-60"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Add new device
                  </button>
    </div>
    </>
  );
};

export default AddDevice;