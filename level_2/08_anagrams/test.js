const anagrams = require('./index.js');

test('"hello"は"llohe"のアナグラムである', () => {
  expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!"は"Hi! Whoa!のアナグラムである"', () => {
  expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One"は"Two two two"のアナグラムではない', () => {
  expect(anagrams('One One', 'Two two two')).toBeFalsy();
});

test('"One one"は"One one c"のアナグラムではない', () => {
  expect(anagrams('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench"は"A tree, a fence, a yard"のアナグラムではない', () => {
  expect(
    anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});
