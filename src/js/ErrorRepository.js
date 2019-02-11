class ErrorRepository {
  constructor() {
    this.errorRegistry = new Map([
      [0, 'Type Error'],
      [1, "Reference Error"],
      [2, 'Good Error'],
      [3, 'Bad Error']
    ]);
  }
  get description(number) {
    if (this.errorRegistry.has(number)) {
      return this.errorRegistry.number;
    } else {
      return 'Unknown error'
    }
  }
}

export default ErrorRepository;