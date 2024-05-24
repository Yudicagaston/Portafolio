import React from 'react';

const ProgressBar = ({ percentage }) => {
    return (
        <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
            <div
                className="bg-green-500 text-xs leading-none py-1 text-center text-white"
                style={{ width: `${percentage}%` }}
            >
                {percentage}%
            </div>
        </div>
    );
};

export default ProgressBar;