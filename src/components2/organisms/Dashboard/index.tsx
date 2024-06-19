"use client";
import React from "react";
import LecturerCard from "@/components2/molecules/LecturerCard";
import SearchForm from "@/components2/atoms/SearchForm";
import { useState, useEffect } from "react";
import { NextResponse } from 'next/server'

type lecturerData = {
  lecturer_id: string;
  status: string;
  phonenum: string;
  name: string;
  description: string;
  image: string;
  email: string;
  room: string;
};

const Dashboard: React.FC = () => {
  const [lecturerData, setLecturerData] = useState<lecturerData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLecturerData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/lecturer', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setLecturerData(data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLecturerData();
  }, []);

  return (
    <>
      <div className="mt-4 flex justify-center">
        <SearchForm />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4 2xl:mt-9 2xl:gap-7.5">
      {lecturerData.map((data, index) => (
        <LecturerCard data={data} />
      ))}
      </div>
    </>
  );
};

export default Dashboard;
