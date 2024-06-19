import React, { useState } from "react";

export default function Status({status}:any) {
    switch(status) {
        case "Available":
            return <AvailableStatus />;
        case "By Appointment":
            return <ByAppStatus />;
        default:
            return <AwayStatus />;
    }
}

const AvailableStatus = () => {
    return (
    <div className="flex px-6 pt-4 pb-2 justify-center">
    <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold dark:text-green-400 dark:bg-opacity-30 text-green-700 mr-2 mb-2">Available</span>
    </div>
    );
}

const ByAppStatus = () => {
    return (
    <div className="flex px-6 pt-4 pb-2 justify-center">
    <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold dark:text-yellow-400 dark:bg-opacity-30 text-yellow-700 mr-2 mb-2">By Appointment</span>
    </div>
    );
}

const AwayStatus = () => {
    return (
    <div className="flex px-6 pt-4 pb-2 justify-center">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold dark:text-gray-900 dark:bg-opacity-30 text-gray-700 mr-2 mb-2">Away</span>
    </div>
    );
}