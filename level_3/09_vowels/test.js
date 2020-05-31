const vowels = require('./index');

test('vowels関数が定義されている', () => {
  expect(typeof vowels).toEqual('function');
});

test('使用されている母音の数を返す', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('使用されている母音の数を返す（大文字の場合）', () => {
  expect(vowels('AEIOU')).toEqual(5);
});

test('使用されている母音の数を返す', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('使用されている母音の数を返す', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});
