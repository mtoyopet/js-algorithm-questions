const capitalize = require('./index');

test('capitalize関数が定義されている', () => {
  expect(typeof capitalize).toEqual('function');
});

test('全ての言葉の最初の文字を大文字にする', () => {
  expect(capitalize('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('全ての言葉の最初の文字を大文字にする', () => {
  expect(capitalize('I have a pen. i have an apple. Un! Apple pen!')).toEqual(
    'I Have A Pen. I Have An Apple. Un! Apple Pen!'
  );
});
