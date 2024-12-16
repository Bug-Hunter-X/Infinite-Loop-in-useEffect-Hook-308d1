```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  // useEffect now only runs once on mount because of the empty dependency array
  useEffect(() => {
    // Add console logging to track when the effect runs.
    console.log('useEffect ran');
  }, []);
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```