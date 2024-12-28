const apiUrlTodos = 'https://jsonplaceholder.typicode.com/todos/1';
const apiUrlPosts = 'https://jsonplaceholder.typicode.com/posts/1';

const cache = new Map();

const memoizedMakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    if (cache.has(url)) {
      resolve(cache.get(url));
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        cache.set(url, { ...data, isCache: true });
        resolve(data);
      })
      .catch((error) => reject(error))
  })
};

memoizedMakeRequest(apiUrlTodos)
  .then((data) => console.log(data))
  .then(() => {
    memoizedMakeRequest(apiUrlTodos).then((data) => console.log(data))
  })

memoizedMakeRequest(apiUrlPosts)
  .then((data) => console.log(data))
  .then(() => {
    memoizedMakeRequest(apiUrlPosts).then((data) => console.log(data))
  })
