import React from 'react';

const Square = ({ value, onClick }) => {
    return (
        <button
            className="square bg-white text-gray-800 font-semibold border border-gray-300 hover:bg-gray-200 p-4"
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Square;
