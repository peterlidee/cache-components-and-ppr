'use client';

import { useState } from 'react';

export default function ClientChild() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>**** count: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>add one</button>
    </>
  );
}
