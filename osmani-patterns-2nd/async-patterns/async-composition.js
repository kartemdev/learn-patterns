const makeRequest = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const processData = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return `Processed data: ${data.title}`;
};

const compositionRequests = async () => {
  try {
    const data = await makeRequest('https://jsonplaceholder.typicode.com/posts/1');
    const processedData = await processData(data);

    console.log(processedData);
  } catch {
    console.log('Fetch error!')
  }
};

compositionRequests();
