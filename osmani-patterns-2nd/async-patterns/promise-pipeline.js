const apiUrlTodos = 'https://jsonplaceholder.typicode.com/todos';

const makeRequest = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    });
};

const pipeline = (value) => Promise.resolve(value);

const transformTitle = (data) => {
  return data.map((todo) => ({ ...todo, title: todo.title.toUpperCase() }))
};

const transformFilter = (data) => {
  return data.filter((todo) => todo.completed);
};

const transformDeleteUser = (data) => {
  return data.map((todo) => {
    delete todo.userId;
    return todo;
  })
};

makeRequest(apiUrlTodos)
  .then((data) => {
    return pipeline(data)
      .then(transformTitle)
      .then(transformFilter)
      .then(transformDeleteUser);
  })
  .then((transformedData) => console.log(transformedData))
  .catch((error) => console.error(error))
