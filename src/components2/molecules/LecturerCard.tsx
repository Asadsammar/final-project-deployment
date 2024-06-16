"use client"
import Link from "next/link";
import Image from "next/image";
import Status from "@/components2/atoms/Status";
import React from "react";
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    useDisclosure,
  } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

export default function LecturerCard(){
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [size, setSize] = React.useState('md')
  
    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];
  
    const handleOpen = (size:any) => {
      setSize(size)
      onOpen();
    }
    
    return(
        <>
        <a key={size} onClick={() => handleOpen(size)}>
            <div className="rounded-lg max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-dark">
            <div className="flex justify-center">
            <Image className="w-25 h-25 rounded-full m-3" src="https://fastly.picsum.photos/id/677/200/300.jpg?hmac=SY5ivEgZyzceLCwED8Yf6wbKGkh7BZ9JrsxywDxM1m0"
                width={500}
                height={500}
                alt="Picture of the author" />
            </div>
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2 text-fuchsia-900 dark:text-white">Lecturer Name</div>
                <p>
                    Notes: ---
                </p>
            </div>
            <Status/>
        </div>
        </a>

        <Modal 
        size={"md"} backdrop="opaque" 
        isOpen={isOpen} 
        onClose={onClose} 
        className="bg-white dark:bg-gray-dark rounded-2xl w-3/5 border"
        classNames={{
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-heading-5">Lecturer Name</ModalHeader>
              <ModalBody>
              <div className="max-w-sm w-full lg:max-w-full lg:flex grid grid-col-6 gap-4">
              <div className="col-span-2">
              <Image className="w-50 h-50 rounded-full m-3" src="https://fastly.picsum.photos/id/677/200/300.jpg?hmac=SY5ivEgZyzceLCwED8Yf6wbKGkh7BZ9JrsxywDxM1m0"
                width={500}
                height={500}
                alt="Picture of the author" />
              </div>
            <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal col-span-4">
                <div className="">
                <p className="text-gray-300 text-heading-7 my-2">Room: RD4</p>
                <p className="text-gray-300 text-heading-7 my-2">Phone Number: 0812345678</p>
                <p className="text-gray-300 text-heading-7 my-2">Status: Not Available</p>
                    <p className="text-gray-300 text-heading-7 my-2">Note: Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            </div>
              </ModalBody>
              <ModalFooter>
                <Button className="bg-fuchsia-700 dark:bg-opacity-50 px-7 py-2 text-white rounded-lg shadow-4" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </>
    );
}