const palindrome = require('./index');

test('"aba"の時はtrueを返す', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba"の時はfalseを返す', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba "の時はfalseを返す', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"やすいいすや"の時はfalseを返す', () => {
  expect(palindrome('やすいいすや')).toBeTruthy();
});

test('"greetings"の時はfalseを返す', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"たしかにかした"の時はfalse返す', () => {
  expect(palindrome('たしかにかした')).toBeTruthy();
});

test('"たしかに、かした"の時はfalse返す', () => {
  expect(palindrome("たしかに、かした")).toBeFalsy();
});

test('"1000000001"の時はtrueを返す', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif"の時はfalseを返す', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep"の時はtrueを返す', () => {
  expect(palindrome('pennep')).toBeTruthy();
});
