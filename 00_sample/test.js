const sample = require('./index');

test('sample関数が定義されている', () => {
  expect(sample).toBeDefined();
});

test('nが５の時は、５回ログに表示される', () => {
  sample(5);

  expect(console.log.mock.calls.length).toEqual(5);
});

test('nが5の時は、10回ログに正解となる値が表示される', () => {
  sample(5);

  expect(console.log.mock.calls[0][0]).toEqual("こんにちは、これはサンプルです");
  expect(console.log.mock.calls[1][0]).toEqual("こんにちは、これはサンプルです");
  expect(console.log.mock.calls[2][0]).toEqual("こんにちは、これはサンプルです");
  expect(console.log.mock.calls[3][0]).toEqual("こんにちは、これはサンプルです");
  expect(console.log.mock.calls[4][0]).toEqual("こんにちは、これはサンプルです");
});

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});
