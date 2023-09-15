class ApiError extends Error {
  statusCode: number;

  constructor(statucCode: number, message: string | undefined, stack = '') {
    super(message);
    this.statusCode = statucCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
