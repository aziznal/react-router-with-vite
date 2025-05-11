import { AppTitle } from "lib/components/app-title";
import { useState } from "react";
import { Link } from "react-router";

export function GoodbyeWorld() {
  const [counter, setCounter] = useState(0);

  const decrement = () => setCounter((c) => c - 1);

  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center">
      <AppTitle />

      <h1 className="text-4xl font-extrabold mb-12">Goodbye World!</h1>

      <p className="mb-8">{counter}</p>

      <button
        onClick={decrement}
        className="py-1.5 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 cursor-pointer mb-4"
      >
        Click Me!
      </button>

      <div className="flex items-center gap-4" id="nav">
        <Link to="/" viewTransition>
          Home
        </Link>
        <Link to="/hello-world" viewTransition>
          Hello World
        </Link>
      </div>
    </main>
  );
}
