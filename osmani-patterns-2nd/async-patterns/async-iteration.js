async function* createAsyncIterable() {
  yield 1;
  yield 2;
  yield 3;
};

const iteration = async () => {
  for await (const value of createAsyncIterable()) {
    console.log(value);
  }
}

iteration();
