```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect running:', count);
    return () => {
      // Cleanup function: runs before the next effect
      console.log('Cleanup running');
    };
  }, [count]); // Add count to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```