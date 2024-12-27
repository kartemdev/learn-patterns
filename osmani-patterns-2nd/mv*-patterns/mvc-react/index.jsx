// Model
const photos = [
  { caption: 'Sample Photo 1', src: 'https://via.placeholder.com/300x200?text=Sample+Photo+1', metadata: 'Some metadata for photo 1' },
  { caption: 'Sample Photo 2', src: 'https://via.placeholder.com/300x200?text=Sample+Photo+2', metadata: 'Some metadata for photo 2' },
];

// View
const Photo = (props) => {
  const { photo } = props;

  return (
    <li className='photo'>
      <h2>{photo.caption}</h2>
      <img className="source" src={photo.src} />
      <div className="metadata">{photo.metadata}</div>
    </li>
  );
};

// Controller
const PhotoList = (props) => {
  const { photos } = props;

  return (
    <ul>
      {photos.map((photo, index) => (
        <Photo key={index} photo={photo} />
      ))}
    </ul>
  );
};

ReactDOM.render(<PhotoList photos={photos} />, document.getElementById('root'));
