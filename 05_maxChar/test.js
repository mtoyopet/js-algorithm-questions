const maxChar = require('./index');

test('maxChar関数が定義されている', () => {
  expect(typeof maxChar).toEqual('function');
});

test('最も使用されている文字を返す', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
  expect(maxChar('あいうえおああかかかかかか')).toEqual('か');
});

test('文字列に数字が含まれている場合も文字として扱う', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});
