export default class CustomError extends Error {
  statusCode: number;
  errorMessage: string;
  field: string;

  constructor(
    message: string,
    statusCode: number,
    errorMessage: string,
    field: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
    this.field = field;
  }
}
