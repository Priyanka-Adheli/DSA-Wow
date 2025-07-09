import { useNavigate } from "react-router";
export default function Home() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
        Welcome to DSAWOW
      </h1>

      <h1 className="text-lg lg:text-xl text-gray-700 mb-8 max-w-xl">
        Visualize Data Structures & Algorithms like never before.
        Interact with queues, stacks, sorting, searching & more — in real-time.
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="btn btn-primary" onClick={()=> navigate("/stack")}>Stacks</button>
        <button className="btn btn-accent mt-8" onClick={()=> navigate("/queue")}>Queues</button>
        <button className="btn btn-secondary" onClick={()=> navigate("/linearSearch")}>Linear Search</button>
        <button className="btn btn-outline mt-8" onClick={()=> navigate("/binarySearch")}>Binary Search</button>
        <button className="btn btn-neutral" onClick={()=> navigate("/bubbleSort")}>Bubble Sort</button>
        <button className="btn btn-info mt-8" onClick={()=> navigate("/linkedlist")}>Linked List</button>
      </div>
    </div>
  );
}