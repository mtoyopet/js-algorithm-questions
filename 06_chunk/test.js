const chunk = require('./index');

test('chunkが定義されている', () => {
  expect(typeof chunk).toEqual('function');
});

test('10個の要素をサイズ2の配列に分割する', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('3個の要素をサイズ1の配列に分解する', () => {
  const arr = [1, 2, 3];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('5個の要素をサイズ3の配列に分解する', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
});

test('13個の要素をサイズ5の配列に分解する', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk(arr, 5);

  expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
});
