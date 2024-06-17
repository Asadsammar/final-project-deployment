'use client';
import React, { useState, useEffect } from 'react';
import axios from "axios";

type AttendanceData = {
  timestamp: { value: string };
  scannerId: string;
  scanTime: { value: string };
  macAddress: string;
};

const ScannedDev = () => {
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAttendanceData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('api/attendance');
      console.log('Fetched data:', response.data);  // Log the fetched data
      setAttendanceData(response.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const addAttendanceData = async () => {
    // Implement add data logic
  };

  const updateAttendanceData = async (id: string) => {
    // Implement update data logic
  };

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
            {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Scanner ID
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
            {attendanceData.map((data, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === attendanceData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">
                    {data.scannerId}
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
