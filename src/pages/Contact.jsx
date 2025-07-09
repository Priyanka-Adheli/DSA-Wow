import { useState } from "react";

export default function Contact() {
    const [arr, setArr] = useState([]);
    const [size, setSize] = useState(10);
    const [target, setTarget] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [comparison, setComparison] = useState("");

    // Generate Random Array
    const generateArray = () => {
        const newArr = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 100) + 1
        );
        setArr(newArr);
        setComparison("Array generated!");
        setCurrentIndex(null);
    };

    // Linear Search with Visualization
    const linearSearch = () => {
        let i = 0;

        const interval = setInterval(() => {
            if (i < arr.length) {
                setComparison(`Checking: ${arr[i]}`);
                setCurrentIndex(i); // Highlight current element

                if (arr[i] === target) {
                    setComparison(`Found ${target} at index ${i}!`);
                    clearInterval(interval);
                } else {
                    i++;
                }
            } else {
                setComparison("Element not found!");
                clearInterval(interval);
            }
        }, 500);
    };

    return (
        <div className="grid grid-cols-2 gap-4 p-5">
            {/* Left: Linear Search Visualization */}
            <div className="bg-gray-100 shadow-lg p-5 rounded-lg w-full">
                <h2 className="text-xl font-bold text-center mb-3">Linear Search Visualization</h2>
                <div className="flex gap-2 justify-center items-end">
                    {arr.map((value, index) => (
                        <div key={index} 
                            className={`w-8 text-center text-white transition-all duration-500 rounded-xl ${
                                index === currentIndex ? "bg-yellow-500" : "bg-blue-500"
                            }`} 
                            style={{ height: `50px`,width:'50px' }}>
                            {value}
                        </div>
                    ))}
                </div>
                <p className="text-red-500 font-bold mt-2">{comparison}</p>
                <div className="mt-4 flex gap-2 justify-center">
                    <input 
                        type="number" 
                        className="input input-bordered w-20"
                        placeholder="Target" 
                        onChange={(e) => setTarget(Number(e.target.value))}
                    />
                    <input 
                        type="number" 
                        min="5" max="20" 
                        className="input input-bordered w-20" 
                        value={size} 
                        onChange={(e) => setSize(Number(e.target.value))}
                    />
                    <button className="btn btn-warning" onClick={generateArray}>Generate Array</button>
                    <button className="btn btn-accent" onClick={linearSearch}>Start Search</button>
                </div>
            </div>

            {/* Right: Algorithm Info */}
            <div className="grid grid-rows-3 gap-4">
                <div className="bg-gray-200 p-3 rounded-md shadow-md">
                    <h3 className="text-lg font-bold">Linear Search Info</h3>
                    <p>Linear Search checks each element one by one until the target is found.</p>
                </div>
                <div className="bg-gray-200 p-3 rounded-md shadow-md">
                    <h3 className="text-lg font-bold">Time Complexity</h3>
                    <p>Worst: <span className="text-red-500 font-bold">O(n)</span></p>
                    <p>Best: <span className="text-green-500 font-bold">O(1)</span> (first element match)</p>
                </div>
                <div className="bg-gray-200 p-3 rounded-md shadow-md">
                    <h3 className="text-lg font-bold">Space Complexity</h3>
                    <p>O(1) - Uses no extra memory.</p>
                </div>
            </div>
        </div>
    );
}