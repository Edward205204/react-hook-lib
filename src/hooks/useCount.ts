import { useState } from "react";

export function useCount() {
  const [count, setCount] = useState(0);
  return {
    count,
    setCount,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
    reset: () => setCount(0),
    double: () => setCount(count * 2),
    half: () => setCount(count / 2),
  };
}
