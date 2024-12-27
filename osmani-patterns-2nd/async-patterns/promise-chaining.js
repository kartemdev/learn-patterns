const apiUrl = 'https://jsonplaceholder.typicode.com/todos/10';

const processData = (data) => {
  return data.filter((item) => item.completed); 
};

const makeRequest = (url) => {
  return new Promise((resolve, reject) => (
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  ));
};

makeRequest(apiUrl)
  .then((data) => processData(data))
  .then((processedData) => console.log(processedData))
  .catch((error) => console.error(error))
