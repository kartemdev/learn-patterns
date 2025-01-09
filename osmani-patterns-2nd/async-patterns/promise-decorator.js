const makeRequest = (url) => {
  return new Promise((resolve, reject) => (
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  ));
};

const fetchLogger = (fn) => {
  return (...args) => {
    console.log('LOG: Starting fetch function');
    return fn(...args)
      .then((result) => {
        console.log('LOG: Successfully completed');

        return result;
      })
      .catch((error) => {
        console.log('LOG: Unsuccessfully completed');

        return error;
      })
  }
};

const makeRequestWithLogger = fetchLogger(makeRequest);

makeRequestWithLogger('https://jsonplaceholder.typicode.com/todos/1').then(() => {
  makeRequestWithLogger('https://example.com/logger');
});
