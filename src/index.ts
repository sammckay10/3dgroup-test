interface IError {
  readonly statusCode: 400 | 404 | 504;
  readonly message: string;
}

interface IErrorMethods {
  [name: string]: (message?: string) => IError;
}

/**
 * It's not necessary to specify the return type here but I'd keep it
 * in as safety in case this function was ever worked on in the future.
 *
 * I could have probably returned an array.reduce() here to avoid an
 * unnecessary variable declaration but I thought this option was more readable.
 */
function createErrorMethods(
  errorMethods: Array<{ name: string } & IError>,
): IErrorMethods {
  let errors: IErrorMethods = {};

  for (const method of errorMethods) {
    errors[method.name] = (message: string = method.message) => ({
      statusCode: method.statusCode,
      message,
    });
  }

  return errors;
}

const { badRequest, notFound, gatewayTimeout } = createErrorMethods([
  { name: "badRequest", statusCode: 400, message: "Bad Request" },
  { name: "notFound", statusCode: 404, message: "Not Found" },
  { name: "gatewayTimeout", statusCode: 504, message: "Gateway Timeout" },
]);

// Examples of TypeScript errors:
// badRequest().statusCode = 400;
// badRequest().message = "Test";

// Working Examples:
console.log("Bad Request Default: ", badRequest());
console.log("Bad Request Custom: ", badRequest("Overritten Message"));

console.log("Not Found Default: ", notFound());
console.log("Not Found Custom: ", notFound("Overritten Message"));

console.log("Gateway Timeout Default: ", gatewayTimeout());
console.log("Gateway Timeout Custom: ", gatewayTimeout("Overritten Message"));
