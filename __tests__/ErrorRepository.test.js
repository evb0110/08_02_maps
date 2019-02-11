import ErrorRepository from '../src/js/ErrorRepository';

test('test 0, should return Type Error', () => {
  const result = ErrorRepository.description(0);

  expect(result).toBe('Type Error');
});

test('test 5, should return Unknown Error', () => {
  const result = ErrorRepository.description(5);

  expect(result).toBe('Unknown Error');
});
