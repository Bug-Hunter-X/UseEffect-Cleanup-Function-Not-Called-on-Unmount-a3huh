```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Add a check to see if the component is still mounted
    let isCurrent = true;
    return () => {
      isCurrent = false; 
      console.log('Cleanup running');
    };
  }, []);

  useEffect(() => {
    if(isMounted){
        console.log('Effect running:', count);
    }
    return () => {
        console.log('Cleanup running');
      };
  }, [count,isMounted]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setIsMounted(false)}>Unmount</button> 
    </div>
  );
}
export default MyComponent;
```