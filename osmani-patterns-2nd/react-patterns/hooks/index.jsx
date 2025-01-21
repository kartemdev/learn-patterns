const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0px 5px' }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

const Timer = () => {
  const [time, setTime] = React.useState(() => new Date().toLocaleTimeString()); // lazy initialization

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);


  return <div>Time: {time}</div>
}

ReactDOM.render(
  <div>
    <h1>React Hooks Example</h1>
    <Counter />
    <hr />
    <Timer />
  </div>,
  document.getElementById('root')
);
