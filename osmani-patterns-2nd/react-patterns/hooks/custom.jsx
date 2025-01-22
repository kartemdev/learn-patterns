const useKeyPress = (targetRef, targetKey) => {
  const [keyPressed, setKeyPressed] = React.useState(false);

  const handleDown = (event) => {
    if (event.key === targetKey) {
      setKeyPressed(true);
    }
  };
  
  const handleUp = (event) => {
    if (event.key === targetKey) {
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    const currentTarget = targetRef.current || document

    currentTarget.addEventListener('keydown', handleDown);
    currentTarget.addEventListener('keyup', handleUp);

    return () => {
      currentTarget.removeEventListener('keydown', handleDown);
      currentTarget.removeEventListener('keyup', handleUp);
    }
  }, []);

  return keyPressed;
};

const Input = () => {
  const [value, setValue] = React.useState('');

  const inputRef = React.useRef(null);

  const pressA = useKeyPress(inputRef, 'a');
  const pressB = useKeyPress(inputRef, 'b');

  const handleChange = (event) => {
    if (pressA || pressB) {
      setValue(event.target.value)
    }
  }

  return (
    <input
      value={value}
      ref={inputRef}
      onChange={handleChange}
      placeholder="Press only 'a' or 'b' keys"
    />
  )
};

ReactDOM.render(<Input />, document.getElementById('custom'));
