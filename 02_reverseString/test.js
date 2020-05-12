const reverse = require('./index');

test('reverse関数が定義されている', () => {
  expect(reverse).toBeDefined();
});

test('文字を逆さまにして返す', () => {
  expect(reverse('apple')).toEqual('elppa');
});

test('文字を逆さまにして返す', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('文字を逆さまにして返す', () => {
  expect(reverse('おはようございます')).toEqual('すまいざごうよはお');
});
