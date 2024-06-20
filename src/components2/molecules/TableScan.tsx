'use client';
import React, { useState, useEffect } from 'react';
import fetchAttendance from '@/lib/attendance';
import FilterDate from './FilterDate';

type AttendanceData = {
  timestamp: { value: string };
  name: string;
  scanTime: { value: string };
  macAddress: string;
};

const ScannedDev = () => {
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<AttendanceData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchAttendanceData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/attendance', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setAttendanceData(data);
      setFilteredData(data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const handleFilter = async (filters: { before: string; after: string }) => {
    try {
      const res = await fetch('/api/filterattendance', {
        method: 'POST', // Use POST for sending filters
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters), // Send filters in the body
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json();
      setFilteredData(data);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
      setError('Error fetching filtered data');
    }
  };
  
  

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
            {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
      <div className="max-w-full overflow-x-auto">
        <div className='m-5'>
          <FilterDate onSubmit={handleFilter} />
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Lecturer Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                MAC Address
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                Timestamp
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                Scan Time
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === attendanceData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">
                    {data.name}
                  </h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === attendanceData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">
                    {data.macAddress}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === attendanceData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">
                    {data.timestamp.value}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === attendanceData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="mt-[3px] text-body-sm font-medium">
                    {data.scanTime.value}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
};

export default ScannedDev;
