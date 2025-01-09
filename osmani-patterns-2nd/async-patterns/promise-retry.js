
const makeRequestWithRetry = (url) => {
  let attempts = 0;
  
  const makeRequest = () => {
    return new Promise((resolve, reject) => (
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    ));
  };
  
  const retry = () => {
    attempts++;

    if (attempts >= 3) {
      throw new Error('Request failed after 3 attempts.');
    }
  
    console.log(`Retrying request: attempt ${attempts}`);
  
    return makeRequest().catch(retry)
  };

  return makeRequest().catch(retry);
}

makeRequestWithRetry('https://example.com/retry');
