const DogImages = (props) => {
  const { data, isHovering } = props;

  return (
    <div>
      {isHovering && <div>Hovering over the Dog Images</div>}
      {data.message.map((dog, index) => (
        <img src={dog} alt={`dog-${index}`} key={dog} />
      ))}
    </div>
  )
};

const withLoader = (Component, url) => {
  const ComponentWithLoader = (props) => {
    const [data, setData] = React.useState(null);
    const [isFetching, setIsFetching] = React.useState(false);

    const fetchData = React.useCallback(async () => {
      setIsFetching(true);

      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data)

        setData(data);
      } catch (error) {
        console.error(error)
      } finally {
        setIsFetching(false);
      }
    }, []);

    React.useEffect(() => {
      fetchData();
    }, []);

    if (isFetching || !data) {
      return <div>Loading...</div>;
    }

    return <Component {...props} data={data} />
  }

  return ComponentWithLoader;
};

const withHover = (Component) => {
  const ComponentWithHover = (props) => {
    const [isHovering, setIsHovering] = React.useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Component {...props} isHovering={isHovering} />
      </div>
    )
  }

  return ComponentWithHover;
}

const ComposedComponent = withLoader(
  withHover(DogImages),
  "https://dog.ceo/api/breed/labrador/images/random/6",
)

ReactDOM.render(<ComposedComponent />, document.getElementById('root'));
