"use client";
import React from "react";
import Image from "next/image";
import SelectStatus from "../atoms/SelectStatus";
import SelectRoom from "../atoms/SelectRoom";

const LecturerSetting = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                Personal Information
              </h3>
            </div>
            <div className="p-7">
              <form>
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                    htmlFor="phonenumber"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4.5 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#636363" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </span>
                    <input
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      placeholder="Insert phone number"
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <SelectStatus />
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                    htmlFor="Username"
                  >
                    Room
                  </label>
                  <SelectRoom />
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                    htmlFor="bio"
                  >
                    Note
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-8">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.95153 1.0415L11.2493 1.0415C11.5945 1.0415 11.8743 1.32133 11.8743 1.6665C11.8743 2.01168 11.5945 2.2915 11.2493 2.2915H9.99935C8.01749 2.2915 6.59398 2.29283 5.51066 2.43848C4.44533 2.58171 3.80306 2.85412 3.32835 3.32883C2.85363 3.80355 2.58122 4.44582 2.43799 5.51115C2.29234 6.59447 2.29102 8.01798 2.29102 9.99984C2.29102 11.9817 2.29234 13.4052 2.43799 14.4885C2.58122 15.5539 2.85363 16.1961 3.32835 16.6708C3.80306 17.1456 4.44533 17.418 5.51066 17.5612C6.59398 17.7068 8.01749 17.7082 9.99935 17.7082C11.9812 17.7082 13.4047 17.7068 14.488 17.5612C15.5534 17.418 16.1956 17.1456 16.6704 16.6708C17.1451 16.1961 17.4175 15.5539 17.5607 14.4885C17.7064 13.4052 17.7077 11.9817 17.7077 9.99984V8.74984C17.7077 8.40466 17.9875 8.12484 18.3327 8.12484C18.6779 8.12484 18.9577 8.40466 18.9577 8.74984V10.0476C18.9577 11.9713 18.9577 13.4788 18.7996 14.6551C18.6377 15.859 18.2999 16.809 17.5542 17.5547C16.8086 18.3004 15.8585 18.6382 14.6546 18.8C13.4784 18.9582 11.9708 18.9582 10.0472 18.9582H9.95154C8.02788 18.9582 6.52034 18.9582 5.3441 18.8C4.14016 18.6382 3.19014 18.3004 2.44446 17.5547C1.69879 16.809 1.361 15.859 1.19914 14.6551C1.041 13.4788 1.04101 11.9713 1.04102 10.0477V9.95202C1.04101 8.02836 1.041 6.52083 1.19914 5.34459C1.361 4.14065 1.69879 3.19063 2.44446 2.44495C3.19014 1.69928 4.14016 1.36149 5.3441 1.19963C6.52034 1.04148 8.02787 1.04149 9.95153 1.0415ZM13.9748 1.89643C15.1147 0.756528 16.9628 0.756528 18.1028 1.89643C19.2427 3.03634 19.2427 4.88449 18.1028 6.02439L12.5627 11.5645C12.2533 11.8739 12.0595 12.0678 11.8432 12.2365C11.5884 12.4352 11.3128 12.6055 11.0211 12.7445C10.7735 12.8625 10.5135 12.9492 10.0983 13.0875L7.6779 13.8943C7.23103 14.0433 6.73835 13.927 6.40528 13.5939C6.0722 13.2608 5.95589 12.7682 6.10485 12.3213L6.91166 9.90086C7.05001 9.48572 7.13667 9.22566 7.25468 8.97805C7.39367 8.6864 7.56402 8.41077 7.76272 8.15602C7.93142 7.93973 8.12527 7.74591 8.43472 7.4365L13.9748 1.89643ZM17.2189 2.78032C16.5671 2.12857 15.5104 2.12857 14.8587 2.78032L14.5448 3.09417C14.5637 3.17405 14.5902 3.26923 14.627 3.37539C14.7465 3.71961 14.9725 4.17293 15.3994 4.59983C15.8263 5.02673 16.2796 5.25272 16.6238 5.37215C16.73 5.40898 16.8251 5.43544 16.905 5.45436L17.2189 5.14051C17.8706 4.48876 17.8706 3.43207 17.2189 2.78032ZM15.9203 6.43908C15.4903 6.25417 14.9895 5.95772 14.5155 5.48372C14.0415 5.00971 13.745 4.50886 13.5601 4.07888L9.34727 8.29172C9.00018 8.63881 8.86405 8.77647 8.74836 8.92479C8.6055 9.10795 8.48302 9.30613 8.38308 9.51582C8.30215 9.68564 8.23991 9.86895 8.08469 10.3346L7.72477 11.4144L8.58482 12.2744L9.66456 11.9145C10.1302 11.7593 10.3136 11.697 10.4834 11.6161C10.6931 11.5162 10.8912 11.3937 11.0744 11.2508C11.2227 11.1351 11.3604 10.999 11.7075 10.6519L15.9203 6.43908Z"
                          fill=""
                        />
                      </svg>
                    </span>

                    <textarea
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-5 pl-13 pr-5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                      name="note"
                      id="note"
                      rows={3}
                      placeholder="Write your bio here"
                      defaultValue=""
                    ></textarea>
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
        <div className="col-span-5 xl:col-span-2">
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                Your Photo
              </h3>
            </div>
            <div className="p-7">
              <form>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full">
                    <>
                      <Image
                        src="/images/user/user-03.png"
                        width={55}
                        height={55}
                        alt="User"
                        className="overflow-hidden rounded-full"
                      />
                    </>
                  </div>
                  <div>
                    <span className="mb-1.5 font-medium text-dark dark:text-white">
                      Edit your photo
                    </span>
                  </div>
                </div>

                <div
                  id="FileUpload"
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded-xl border border-dashed border-gray-4 bg-gray-2 px-4 py-4 hover:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-primary sm:py-7.5"
                >
                  <input
                    type="file"
                    name="profilePhoto"
                    id="profilePhoto"
                    accept="image/png, image/jpg, image/jpeg"
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="flex h-13.5 w-13.5 items-center justify-center rounded-full border border-stroke bg-white dark:border-dark-3 dark:bg-gray-dark">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4613 2.07827C10.3429 1.94876 10.1755 1.875 10 1.875C9.82453 1.875 9.65714 1.94876 9.53873 2.07827L6.2054 5.7241C5.97248 5.97885 5.99019 6.37419 6.24494 6.6071C6.49969 6.84002 6.89502 6.82232 7.12794 6.56756L9.375 4.10984V13.3333C9.375 13.6785 9.65482 13.9583 10 13.9583C10.3452 13.9583 10.625 13.6785 10.625 13.3333V4.10984L12.8721 6.56756C13.105 6.82232 13.5003 6.84002 13.7551 6.6071C14.0098 6.37419 14.0275 5.97885 13.7946 5.7241L10.4613 2.07827Z"
                          fill="#5750F1"
                        />
                        <path
                          d="M3.125 12.5C3.125 12.1548 2.84518 11.875 2.5 11.875C2.15482 11.875 1.875 12.1548 1.875 12.5V12.5457C1.87498 13.6854 1.87497 14.604 1.9721 15.3265C2.07295 16.0765 2.2887 16.7081 2.79029 17.2097C3.29189 17.7113 3.92345 17.9271 4.67354 18.0279C5.39602 18.125 6.31462 18.125 7.45428 18.125H12.5457C13.6854 18.125 14.604 18.125 15.3265 18.0279C16.0766 17.9271 16.7081 17.7113 17.2097 17.2097C17.7113 16.7081 17.9271 16.0765 18.0279 15.3265C18.125 14.604 18.125 13.6854 18.125 12.5457V12.5C18.125 12.1548 17.8452 11.875 17.5 11.875C17.1548 11.875 16.875 12.1548 16.875 12.5C16.875 13.6962 16.8737 14.5304 16.789 15.1599C16.7068 15.7714 16.5565 16.0952 16.3258 16.3258C16.0952 16.5565 15.7714 16.7068 15.1599 16.789C14.5304 16.8737 13.6962 16.875 12.5 16.875H7.5C6.30382 16.875 5.46956 16.8737 4.8401 16.789C4.22862 16.7068 3.90481 16.5565 3.67418 16.3258C3.44354 16.0952 3.29317 15.7714 3.21096 15.1599C3.12633 14.5304 3.125 13.6962 3.125 12.5Z"
                          fill="#5750F1"
                        />
                      </svg>
                    </span>
                    <p className="mt-2.5 text-body-sm font-medium">
                      <span className="text-primary">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="mt-1 text-body-xs">
                      SVG, PNG, JPG or GIF (max, 800 X 800px)
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                <button
                    className="flex justify-center rounded-[7px] bg-red-500 px-6 py-[7px] font-medium text-white hover:shadow-1 dark:border-dark-3 dark:text-white"
                    type="button"
                  >
                    Delete
                  </button>
                  <button
                    className="flex items-center justify-center rounded-[7px] bg-fuchsia-500 px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
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

export default LecturerSetting;