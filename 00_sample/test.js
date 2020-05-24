const sample = require('./index');

test('sample関数が定義されている', () => {
  expect(sample).toBeDefined();
});

test('aがbよりも小さい', () => {
  expect(sample(1, 2)).toBeTruthy();
});

test('aはbよりも大きい', () => {
  expect(sample(3, 2)).toBeFalsy();
});

test('aがbよりも小さい', () => {
  expect(sample(4, 15)).toBeTruthy();
});