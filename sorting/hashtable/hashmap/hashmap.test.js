const duplicate = require('./duplicate');


test('Duplicate word should be found', () => {
  const input = 'apple orange banana apple';
  const result = duplicate(input);
  expect(result).toBe('apple');
});


test('No duplicate word should be found', () => {
  const input = 'one two three four';
  const result = duplicate(input);
  expect(result).toBeUndefined();
});

test('Case should be ignored when finding duplicates', () => {
  const input = 'Dog cat Dog Bird';
  const result = duplicate(input);
  expect(result).toBe('dog');
});
