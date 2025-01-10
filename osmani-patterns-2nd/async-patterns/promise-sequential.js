const apiUrlTodos = 'https://jsonplaceholder.typicode.com/todos/1';
const apiUrlPosts = 'https://jsonplaceholder.typicode.com/posts/1';

const makeRequest = (url) => {
  return new Promise((resolve, reject) => (
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  ));
};

const printResults = (results) => {
  console.log(JSON.stringify(results, null, 2));
};

const results = [];

Promise.resolve()
  .then(() => makeRequest(apiUrlTodos))
  .then((data) => {
    results.push(data);
    return makeRequest(apiUrlPosts);
  })
  .then((data) => {
    results.push(data);
    printResults(results);
  })
  .catch((error) => {
    console.error(error);
  });
