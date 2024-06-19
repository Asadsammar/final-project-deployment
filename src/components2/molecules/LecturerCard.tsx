"use client"
import Link from "next/link";
import Image from "next/image";
import Status from "../atoms/Status";
import React from "react";
import { app } from '@/config/firebase';
import { useState, useEffect } from "react";
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    useDisclosure,
  } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function LecturerCard({data}:any) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [size, setSize] = React.useState('md')
    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];
    const [url, setUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true); // State to manage loading state

    useEffect(() => {
      const func = async () => {
        const store = getStorage(app);
        const imageRef = ref(store, data.image);
      try {
        const imageUrl = getDownloadURL(imageRef);
        setUrl((await imageUrl).toString());
      } catch (error) {
        console.error("Error fetching image from Firebase Storage:", error);
      } finally {
        setIsLoading(false); // Set loading state to false when fetch completes
      }
      };
  
      func();
    }, [data.image]);
  
    const handleOpen = (size:any) => {
      setSize(size)
      onOpen();
    }
    
    return(
        <>
        <a key={size} onClick={() => handleOpen(size)}>
            <div className="rounded-lg max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-dark">
            <div className="flex justify-center">
            {url ? (
              <img
                className="w-25 h-25 rounded-full m-3"
                src={url} // Ensure `url` is always a string when assigned
                width={500}
                height={500}
                alt="Picture of the author"
              />
            ) : (
              <div className="w-25 h-25 rounded-full m-3 bg-gray-200"></div>
            )}
            </div>
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2 text-fuchsia-900 dark:text-white">{data.name}</div>
                <p>
                    Notes: {data.description ? (<>{data.description}</>):("---")}
                </p>
            </div>
            <Status status={data.status}/>
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
              <ModalHeader className="flex flex-col gap-1 text-heading-5">{data.name}</ModalHeader>
              <ModalBody>
              <div className="max-w-sm w-full lg:max-w-full lg:flex grid grid-col-6 gap-4">
              <div className="col-span-2">
              {url ? (
              <img
                className="w-50 h-50 rounded-full m-3"
                src={url} // Ensure `url` is always a string when assigned
                width={500}
                height={500}
                alt="Picture of the author"
              />
            ) : (
              <div className="w-50 h-50 rounded-full m-3 bg-gray-200"></div>
            )}
              </div>
            <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal col-span-4">
                <div className="">
                <p className="text-gray-500 text-heading-7 my-2">Room: {data.room}</p>
                <p className="text-gray-500 text-heading-7 my-2">Phone Number: {data.phonenum}</p>
                <p className="text-gray-500 text-heading-7 my-2">Status: {data.status}</p>
                    <p className="text-gray-500 text-heading-7 my-2">Note: {data.description}</p>
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