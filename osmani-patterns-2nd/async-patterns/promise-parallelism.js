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

Promise.all([
  makeRequest(apiUrlTodos),
  makeRequest(apiUrlPosts),
]).then(([data1, data2]) => {
  console.log(data1, data2)
})
