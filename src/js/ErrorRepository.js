const errorRegistry = new Map([
  [0, 'Type Error'],
  [1, 'Reference Error'],
  [2, 'Good Error'],
  [3, 'Bad Error'],
]);

class ErrorRepository {
  static description(number) {
    if (errorRegistry.has(number)) {
      return errorRegistry.get(number);
    }
    return 'Unknown Error';
  }
}

export default ErrorRepository;
