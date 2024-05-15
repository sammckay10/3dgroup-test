# 3D Group - TypeScript assessment

## Setup

We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage the required node version. Once you have nvm available on your computer, run the following command to install the correct node version provided in `.nvmrc`:

```sh
nvm install
```

Once the correct node version is installed, you can run the following command to use this version:

```sh
nvm use
```

## Task overview

This is a TypeScript task, where the objective is to implement the correct types and functionality for the `createErrorMethods` function located in `src/index.ts`.

The `createErrorMethods` function should take a single argument (a config object/array), and return an object of methods.

## Usage examples

Here is an example of the `createErrorMethods` function being used:

```ts
const errorMethods = createErrorMethods(/* your config here */);
const { badRequest, notFound } = errorMethods;

badRequest(); // => { statusCode: 400, message: "Bad Request" }
badRequest("Overriden bad request message."); // => { statusCode: 400, message: "Overriden bad request message" }
notFound(); // => { statusCode: 404, message: "Not Found" }
notFound("This is an override message for the 'Not Found' method."); // => { statusCode: 404, message: "This is an override message" }
```

Note that each method returns an object of the same shape; a `statusCode` where the type is an exact number (e.g. `badRequest().statusCode` is `400`, `notFound().statusCode` is `404`...) and a `message` where the type is a string.

## Further TypeScript details

The user should not be able to modify the returned object's values. For example:

```ts
badRequest().message = "A different bad request message"; // TypeScript Error: Cannot assign to 'message' because it is a read-only property.
badRequest().statusCode = 400; // TypeScript Error: Cannot assign to 'statusCode' because it is a read-only property.
```

The IDE should be able to pick up on the exact number for each object's `statusCode`. For example, in VS Code, if I hover my mouse over `badRequest()`, I should see that the status code is `400`, not `number`.

The type implementation should be flexible enough to accept more config items over time, without having to change the underlying types or function body.

## The config parameter

The config can be any shape you would like it to be, whether it's an array or object.

Each "item" in the config should contain three pieces of information: the method name (e.g. `badRequest`), the status code (e.g. `400`) and the default message (e.g. `Bad Request`).

## Testing

We have included two commands in `package.json` that you can use for type checking (`npm run typecheck`) and running the TypeScript code to see the output in the console (`npm run code`).

## Compilation

You do not need to compile the code to JavaScript.

## What should you do once you have completed the task?

Please upload the code to your GitHub account and provide us with a link.

We would like you to complete the task to the best of your abilities, and even if you can't complete all aspects of the task, we would still like to see the result. 

## Final notes

We are interested in seeing correct types along with a clean and easy to read implementation. Use comments where you deem it appropriate.

Good luck!
