const reverseInt = require('./index');

test('ReverseInt関数が定義されている', () => {
  expect(reverseInt).toBeDefined();
});

test('0の時は0を返す', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('正数の時は、逆順にした正数を返す', () => {
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
});

test('負の数の時は逆順にした負の数を返す', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
});
