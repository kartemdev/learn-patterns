const apiUrlTodos = 'https://jsonplaceholder.typicode.com/todos/1';
const apiUrlPosts = 'https://jsonplaceholder.typicode.com/posts/10';

const makeRequest = (url) => {
  return new Promise((resolve, reject) => (
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  ));
};

Promise.race([
  makeRequest(apiUrlTodos),
  makeRequest(apiUrlPosts),
]).then(data => {
  console.log(data)
});
