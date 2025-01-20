const Title = (props) => {
  return props.render();
};

const App = () => {
  return (
    <div className="App">
      <h1>Default render prop</h1>
      <Title
        render={() => (
          <h3>
            <span role="img" aria-label="emoji">
              ✨
            </span>
            I am a render prop!{" "}
            <span role="img" aria-label="emoji">
              ✨
            </span>
          </h3>
        )}
      />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('default'));
