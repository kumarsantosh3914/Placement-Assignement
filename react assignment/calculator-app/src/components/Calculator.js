import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    const clear = () => {
        setResult('');
    };

    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator p-4">
            <input
                className="mb-4 p-2 rounded border"
                type="text"
                value={result}
                readOnly
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                    className="col-span-2 sm:col-span-1 bg-yellow-500 text-white rounded p-2"
                    onClick={clear}
                    id="clear"
                >
                    Clear
                </button>
                <button
                    className="bg-gray-300 p-2 rounded"
                    name="/"
                    onClick={handleClick}
                >
                    &divide;
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="7"
                    onClick={handleClick}
                >
                    7
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="8"
                    onClick={handleClick}
                >
                    8
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="9"
                    onClick={handleClick}
                >
                    9
                </button>
                <button
                    className="bg-gray-300 p-2 rounded"
                    name="*"
                    onClick={handleClick}
                >
                    &times;
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="4"
                    onClick={handleClick}
                >
                    4
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="5"
                    onClick={handleClick}
                >
                    5
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="6"
                    onClick={handleClick}
                >
                    6
                </button>
                <button
                    className="bg-gray-300 p-2 rounded"
                    name="-"
                    onClick={handleClick}
                >
                    &ndash;
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="1"
                    onClick={handleClick}
                >
                    1
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="2"
                    onClick={handleClick}
                >
                    2
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="3"
                    onClick={handleClick}
                >
                    3
                </button>
                <button
                    className="bg-gray-300 p-2 rounded"
                    name="+"
                    onClick={handleClick}
                >
                    +
                </button>
                <button
                    className="bg-gray-100 p-2 rounded col-span-2 sm:col-span-1"
                    name="0"
                    onClick={handleClick}
                >
                    0
                </button>
                <button
                    className="bg-gray-100 p-2 rounded"
                    name="."
                    onClick={handleClick}
                >
                    .
                </button>
                <button
                    className="col-span-2 sm:col-span-4 bg-yellow-500 text-white rounded p-2"
                    onClick={calculate}
                    id="result"
                >
                    Result
                </button>
            </div>
        </div>
    );
};

export default Calculator;



