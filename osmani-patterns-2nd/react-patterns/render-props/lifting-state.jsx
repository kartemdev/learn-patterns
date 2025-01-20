const Input = (props) => {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Temp in °C"
      />
      {props.render ? props.render(value) : props.children?.(value)}
    </div>
  );
};

const Kelvin = ({ value = 0 }) => {
  return <div className="temp">{Number(value) + 273.15}K</div>
};

const Fahrenheit = ({ value = 0 }) => {
  return <div className="temp">{Number(value * 9) / 5 + 32}°F</div>
};

const App = () => {
  return (
    <div className="App">
      <h1>Lifting state & render prop (Temperature converter)</h1>

      <h2>With prop</h2>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
      <hr />
      <h2>With children</h2>
      <Input>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('lifting'));
