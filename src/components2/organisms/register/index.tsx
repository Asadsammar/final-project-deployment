"use client";
import Link from "next/link";
import React from "react";
import CreateNewAccount from "@/components2/molecules/CreateNewAccount";

export default function Register() {
  return (
    <>
      <div className="my-6 flex items-center justify-center">
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
        <div className="block w-full min-w-fit bg-white px-3 text-center font-medium dark:bg-gray-dark">
          Create a new account
        </div>
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
      </div>

      <div>
        <CreateNewAccount />
      </div>

      <div className="mt-6 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Log in
          </Link>
        </p>
      </div>
    </>
  );
}
