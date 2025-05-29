# 🧩 my-react-hook-lib

A lightweight reusable React hook library written in TypeScript.

## 📦 Installation

```bash
npm install my-react-hook-lib
```

## Usage

```ts
import { useCount } from "my-react-hook-lib";

const App = () => {
  const { count, increment } = useCount();
  return <button onClick={increment}>Count: {count}</button>;
};
```
