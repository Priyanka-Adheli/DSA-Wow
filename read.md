// import { useState } from "react";

// // Predefined Tailwind color classes
// const colorClasses = [
//   // Blue shades
//   "bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500",
//   "bg-blue-600", "bg-blue-700", "bg-blue-800", "bg-blue-900",
  
//   // Red shades
//   "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500",
//   "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900",
  
//   // Green shades
//   "bg-green-100", "bg-green-200", "bg-green-300", "bg-green-400", "bg-green-500",
//   "bg-green-600", "bg-green-700", "bg-green-800", "bg-green-900",
  
//   // Yellow shades
//   "bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "bg-yellow-400", "bg-yellow-500",
//   "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900",
  
//   // Purple shades
//   "bg-purple-100", "bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500",
//   "bg-purple-600", "bg-purple-700", "bg-purple-800", "bg-purple-900",
  
//   // Pink shades
//   "bg-pink-100", "bg-pink-200", "bg-pink-300", "bg-pink-400", "bg-pink-500",
//   "bg-pink-600", "bg-pink-700", "bg-pink-800", "bg-pink-900",
// ];

// function QueueDisplay() {
//   const [divs, setDivs] = useState([]);
//   const [currentColorIndex, setCurrentColorIndex] = useState(-1);
//   const [currentShade, setCurrentShade] = useState(0);

//   const addDiv = () => {
//     setDivs((prevDivs) => {
//       // If queue is empty or we've reached max shade, pick a new random color
//       if (prevDivs.length === 0 || currentShade >= 8) {
//         const newColorIndex = Math.floor(Math.random() * 6) * 9; // 6 colors, 9 shades each
//         setCurrentColorIndex(newColorIndex);
//         setCurrentShade(0);
        
//         const newDiv = {
//           id: Date.now(),
//           color: colorClasses[newColorIndex], // Start with -100 shade
//           animation: "animate-slideIn"
//         };
//         return [newDiv];
//       }

//       // Otherwise, use next shade of current color
//       const nextShade = currentShade + 1;
//       setCurrentShade(nextShade);
      
//       const newDiv = {
//         id: Date.now(),
//         color: colorClasses[currentColorIndex + nextShade],
//         animation: "animate-slideIn"
//       };

//       return [newDiv, ...prevDivs];
//     });
//   };

//   const removeDiv = () => {
//     if (divs.length === 0) return;

//     setDivs((prevDivs) => {
//       const updatedDivs = [...prevDivs];
//       const lastIndex = updatedDivs.length - 1;
//       updatedDivs[lastIndex] = {
//         ...updatedDivs[lastIndex],
//         animation: "animate-fadeOut"
//       };

//       setTimeout(() => {
//         setDivs(prev => {
//           const newDivs = prev.slice(0, -1);
//           if (newDivs.length === 0) {
//             setCurrentColorIndex(-1);
//             setCurrentShade(0);
//           }
//           return newDivs;
//         });
//       }, 300);

//       return updatedDivs;
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4 bg-gray-50">
//       {/* Stack of divs - newest on top */}
//       <div className="flex flex-col-reverse items-center gap-3 w-full max-w-md min-h-[300px]">
//         {divs.length === 0 ? (
//           <div className="text-gray-400">Queue is empty</div>
//         ) : (
//           divs.map((div) => (
//             <div
//               key={div.id}
//               className={`w-full h-16 rounded-lg ${div.color} ${div.animation} shadow-md flex items-center justify-center text-white font-bold`}
//             >
//               {div.color.replace('bg-', '')}
//             </div>
//           ))
//         )}
//       </div>

//       {/* Control buttons */}
//       <div className="flex gap-4">
//         <button
//           className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
//           onClick={addDiv}
//         >
//           {currentColorIndex === -1 ? "Add Random Color" : "Add Darker Shade"}
//         </button>
//         <button
//           className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
//           onClick={removeDiv}
//           disabled={divs.length === 0}
//         >
//           Remove Oldest
//         </button>
//       </div>

//       {/* Animation styles */}
//       <style jsx>{`
//         @keyframes slideIn {
//           from { transform: translateY(-40px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes fadeOut {
//           to { opacity: 0; transform: translateX(40px); }
//         }
//         .animate-slideIn {
//           animation: slideIn 0.4s ease-out forwards;
//         }
//         .animate-fadeOut {
//           animation: fadeOut 0.4s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default QueueDisplay;


// import { useState } from "react";

// function QueueDisplay() {
//   const [divs, setDivs] = useState([]);
//   const colorOptions = ["blue", "red", "green", "yellow", "purple", "pink", "indigo", "teal"];
//   const [currentColor, setCurrentColor] = useState(null);
//   const [currentShade, setCurrentShade] = useState(100); // Track shade separately

//   const addDiv = () => {
//     let newColor;
//     let nextShade = currentShade;

//     if (!currentColor) {
//       // First div - Pick random color with base shade
//       newColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
//       nextShade = 100; // Reset shade
//     } else {
//       // Subsequent divs - Increase shade
//       newColor = currentColor;
//       nextShade = Math.min(currentShade + 100, 900); // Cap shade at 900
//     }

//     // Set color and shade BEFORE updating divs
//     setCurrentColor(newColor);
//     setCurrentShade(nextShade);

//     const newDiv = {
//       id: Date.now(),
//       color: `bg-${newColor}-${nextShade}`,
//       animation: "animate-slideIn"
//     };

//     setDivs((prevDivs) => [newDiv, ...prevDivs]); // Keep previous divs while adding new
//   };

//   const removeDiv = () => {
//     if (divs.length === 0) return;

//     setDivs((prevDivs) => {
//       const updatedDivs = [...prevDivs];
//       updatedDivs[updatedDivs.length - 1] = { 
//         ...updatedDivs[updatedDivs.length - 1], 
//         animation: "animate-fadeOut"
//       };

//       setTimeout(() => {
//         setDivs((prev) => {
//           const newDivs = prev.slice(0, -1);
//           if (newDivs.length === 0) {
//             setCurrentColor(null); // Reset color when empty
//             setCurrentShade(100); // Reset shade when empty
//           }
//           return newDivs;
//         });
//       }, 300);

//       return updatedDivs;
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
//       {/* Queue display */}
//       <div className="flex flex-col-reverse items-center gap-3 w-full max-w-md min-h-[300px]">
//         {divs.length === 0 ? (
//           <div className="text-gray-400">Queue is empty</div>
//         ) : (
//           divs.map((div) => (
//             <div
//               key={div.id}
//               className={`w-full h-16 rounded-lg ${div.color} ${div.animation} shadow-md flex items-center justify-center text-white font-bold`}
//             >
//               {div.color.replace("bg-", "").replace("-", " ")}
//             </div>
//           ))
//         )}
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-4">
//         <button
//           className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
//           onClick={addDiv}
//         >
//           {currentColor ? "Add Darker Shade" : "Add Random Color"}
//         </button>
//         <button
//           className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
//           onClick={removeDiv}
//           disabled={divs.length === 0}
//         >
//           Remove Oldest
//         </button>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes slideIn {
//           from { transform: translateY(-40px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes fadeOut {
//           to { opacity: 0; transform: translateX(40px); }
//         }
//         .animate-slideIn {
//           animation: slideIn 0.4s ease-out forwards;
//         }
//         .animate-fadeOut {
//           animation: fadeOut 0.4s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default QueueDisplay;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// function QueueDisplay() {
//   const [fibSequence, setFibSequence] = useState([]);
//   const [n, setN] = useState(10);

//   useEffect(() => {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//       fib.push(fib[i-1] + fib[i-2]);
//     }
//     setFibSequence(fib);
//   }, [n]);

//   const handleChangeN = (e) => {
//     setN(parseInt(e.target.value));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold mb-4">Fibonacci Visualization</h1>
//       <input
//         type="number"
//         value={n}
//         onChange={handleChangeN}
//         className="input input-bordered w-full max-w-xs mb-4"
//       />
//       <div className="flex flex-wrap">
//         {fibSequence.map((num, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.5 }}
//             className="w-12 h-12 border border-gray-300 rounded flex justify-center items-center m-2"
//             style={{ backgroundColor: index < 2 ? 'lightblue' : 'white' }}
//           >
//             {num}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default QueueDisplay;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// function QueueDisplay() {
//   const [fibSequence, setFibSequence] = useState([]);
//   const [n, setN] = useState(10);

//   const generateFibonacci = () => {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//       fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     setFibSequence(fib);
//   };

//   return (
//     <div className="p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-4">Fibonacci Animation</h1>
      
//       <input
//         type="number"
//         value={n}
//         onChange={(e) => setN(parseInt(e.target.value))}
//         className="input input-bordered w-full max-w-xs mb-4"
//       />
//       <button onClick={generateFibonacci} className="px-4 py-2 bg-blue-600 text-white rounded mb-4">
//         Generate
//       </button>

//       <div className="flex flex-col justify-center items-center gap-6 w-full">
//   {/* Row for Fibonacci Numbers */}
//   <div className="flex justify-center flex-wrap gap-4 w-full">
//     {fibSequence.map((num, index) => (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: index * 0.5 }}
//         className="w-12 h-12 border border-gray-300 rounded flex justify-center items-center text-lg font-bold bg-gray-200"
//         style={{ backgroundColor: index < 2 ? 'lightblue' : 'white' }}
//       >
//         {num}
//       </motion.div>
//     ))}
//   </div>

//   {/* Row for Sum Calculations */}
//   <div className="flex flex-col items-center w-full">
//     {fibSequence.length >= 3 && (
//       fibSequence.slice(2).map((num, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: (index + 2) * 0.5 }}
//           className="text-xl font-semibold text-gray-700"
//         >
//           {fibSequence[index]} + {fibSequence[index + 1]} = {num}
//         </motion.div>
//       ))
//     )}
//   </div>
// </div>
//     </div>
//   );
// }

// export default QueueDisplay;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const QueueDisplay = () => {
//   const [nodes, setNodes] = useState([{ id: 1, value: 10 }, { id: 2, value: 20 }]);

//   const addNode = () => {
//     const newNode = { id: nodes.length + 1, value: Math.floor(Math.random() * 100) };
//     setNodes([...nodes, newNode]);
//   };

//   const removeNode = () => {
//     if (nodes.length > 0) {
//       setNodes(nodes.slice(1));
//     }
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <div style={{ display: "flex", alignItems: "center", gap: "20px", justifyContent: "center", position: "relative" }}>
//         {nodes.map((node, index) => (
//           <div key={node.id} style={{ display: "flex", alignItems: "center" }}>
//             <motion.div
//               animate={{ scale: [0, 1], opacity: [0, 1] }}
//               transition={{ duration: 0.5 }}
//               style={{
//                 padding: "20px",
//                 background:"red",
//                 borderRadius: "50%",
//                 color: "white",
//                 fontSize: "20px",
//                 fontWeight:"bolder",
//                 position: "relative",
//               }}
//             >
//               {node.value}
//             </motion.div>
//             {index < nodes.length - 1 && (
//               <motion.svg
//                 width="50"
//                 height="20"
//                 viewBox="0 0 50 20"
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <line x1="5" y1="10" x2="45" y2="10" stroke="black" strokeWidth="2" />
//                 <polygon points="45,5 45,15 50,10" fill="black" />
//               </motion.svg>
//             )}
//           </div>
//         ))}
//       </div>
//       <button className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50" onClick={addNode} style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}>
//         Add Node
//       </button>
//       <input type="text" 
//       <button className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50" onClick={removeNode} style={{ marginLeft: "10px", padding: "10px", cursor: "pointer" }}>
//         Remove Node
//       </button>
//     </div>
//   );
// };

// export default QueueDisplay;
// import React, { useEffect } from "react";
// import { DataSet, Network } from "vis-network/standalone";

// const QueueDisplay = () => {
//   useEffect(() => {
//     const nodes = new DataSet([
//       { id: "A", label: "A" },
//       { id: "B", label: "B" },
//       { id: "C", label: "C" },
//       { id: "D", label: "D" },
//       { id: "E", label: "E" },
//       { id: "F", label: "F" },
//     ]);

//     const edges = new DataSet([
//       { from: "A", to: "B" },
//       { from: "A", to: "C" },
//       { from: "B", to: "D" },
//       { from: "B", to: "E" },
//       { from: "C", to: "F" },
//       { from: "E", to: "F" },
//     ]);

//     const container = document.getElementById("network");
//     new Network(container, { nodes, edges }, { layout: { randomSeed: 2 } });
//   }, []);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>BFS Visualization (Vis.js)</h2>
//       <div id="network" style={{ width: "600px", height: "400px", margin: "auto", border: "1px solid black" }}></div>
//     </div>
//   );
// };
// export default QueueDisplay;


// import React, { useEffect, useState } from "react";
// import { DataSet, Network } from "vis-network/standalone";
// const options = {
//     layout: { randomSeed: 2 }, // Keeps the layout consistent
//     nodes: {
//         shape: "circle",
//           size: 80,
//         color: {
//             border: "#2B7CE9",
//             background: "#97C2FC",
//             highlight: {
//                 border: "#D32F2F",
//                 background: "#FFCDD2"
//             }
//         },
//         font: { size: 16, color: "#343434" }
//     },
//     edges: {
//         color: "#848484",
//         width: 2,
//         arrows: { to: { enabled: true, scaleFactor: 1.5 } },
//         smooth: { type: "dynamic" }
//     },
//     // physics: {
//     //     enabled: true,
//     //     solver: "forceAtlas2Based",
//     //     stabilization: { iterations: 200 }
//     // }
// };


// const QueueDisplay = () => {
//   const [network, setNetwork] = useState(null);
//   const [nodes, setNodes] = useState(new DataSet([
//     { id: "A", label: "A", color: "pink",size:50 },
//     { id: "B", label: "B", color: "#2196F8" },
//     { id: "C", label: "C", color: "#2196F3" },
//     { id: "D", label: "D", color: "#2196F3" },
//     { id: "E", label: "E", color: "#2196F3" },
//     { id: "F", label: "F", color: "#2196F3" },
//   ]));

//   const edges = new DataSet([
//     { from: "A", to: "B" },
//     { from: "B", to: "C" },
//     { from: "C", to: "D" },
//     { from: "D", to: "E" },
//     { from: "E", to: "F" },
//   ]);

//   useEffect(() => {
//     const container = document.getElementById("network");
//     // const visNetwork = new Network(container, { nodes, edges }, { layout: { randomSeed: 2 } });
//     const visNetwork = new Network(container, { nodes, edges }, options);
//     setNetwork(visNetwork);
//   }, []);

//   const bfsTraverse = () => {
//     let queue = ["A"];
//     let visited = [];

//     const traverseStep = () => {
//       if (queue.length === 0) return;

//       const currentNode = queue.shift();
//       if (!visited.includes(currentNode)) {
//         visited.push(currentNode);
//         nodes.update({ id: currentNode, color: "#FF9800" }); // Highlight visited node

//         edges.forEach(edge => {
//           if (edge.from === currentNode && !visited.includes(edge.to)) {
//             queue.push(edge.to);
//           }
//         });

//         setTimeout(traverseStep, 800); // Move to next step
//       }
//     };

//     traverseStep();
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>BFS Visualization (Vis.js)</h2>
//       <div id="network" style={{ width: "600px", height: "400px", margin: "auto", border: "1px solid black" }}></div>
//       <button onClick={bfsTraverse} style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}>
//         Start BFS Traversal
//       </button>
//     </div>
//   );
// };

// export default QueueDisplay;
