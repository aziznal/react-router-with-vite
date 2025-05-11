import { useState } from "react";
import { Link } from "react-router";

export function HelloWorld() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((c) => c + 1);

  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-4xl font-extrabold mb-12">Hello World!</h1>

      <p className="mb-8">{counter}</p>

      <button
        onClick={increment}
        className="py-1.5 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 cursor-pointer mb-4"
      >
        Click Me!
      </button>

      <Link to="/">Home</Link>
    </main>
  );
}
