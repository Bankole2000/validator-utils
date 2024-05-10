# Validator Utils

A Collection of utility functions to help with input validation both client and server side.

## Installation

```sh
npm install @neoncoder/validator-utils
```

## Usage

### Standalone usage

- Import and use any functions you need from the package - Available functions are in the [Functions list](#functions-list)

```ts
import express, {Request, Response} from 'express';
import {isValidDate} from '@neoncoder/validator-utils';
import {BadRequest, OK ServiceResponse} from '@neoncoder/service-response';

const app = express();

app.get("/search", (req: Request, res: Response) => {
  let sr: ServiceResponse;
  const {startDate, endDate} = req.query
  if(!isValidDate(startDate)) {
    sr = BadRequest({message: 'Invalid Start Date'})
    return res.status(sr.statusCode).send(sr);
  }
  const now = new Date(Date.now())
  const result = isValidDate(endDate) 
    && new Date(startDate) <= new Date(endDate)
    ? searchDataByDate(startDate, endDate) 
    : !isValidDate(endDate) && new Date(startDate) <= now 
    ? searchDataByDate(startDate, now)
    : null;
  sr = result ? OK({data: result}) : BadRequest({message: 'Invalid search dates'})
  return res.status(sr.statusCode).send(sr);
})
```

### Use with a validation Library (like [Zod](https://zod.dev/))

```ts
import {
  boolean, number, object, string,
} from 'zod';
import { isNotEmpty, isNumbersOnly, isValidObjectId } from '@neoncoder/validator-utils';

export const createAccountSchema = object({
  body: object({
    // using string instead of numbers allows the number to start with 0s (Zeros)
    accountNumber: string({
      required_error: 'Account number is required',
    })
      .min(10, 'Account number must be 10 digits long')
      .max(10, 'Account number must be 10 digits long')
      .refine((data) => isNumbersOnly(data), 'Account number must be numbers only'),
    // Ensures bankId is not only present, but is a valid mongodb Object Id
    bankId: string({
      required_error: 'Bank Id is required',
    }).refine((data) => isNotEmpty(data), 'Bank Id cannot be empty')
      .refine((data) => isValidObjectId(data), 'Invalid Bank Id'),
  })
});
```

## Functions list

- `isValidEmail`: Checks if entered email is valid
- `isBoolean`: Checks if a value is boolean (true or false) - returns true even if the value is false, as false is also a boolean
- `isNotEmpty`: Checks if a string is empty or not
- `isNumbersOnly`: Checks if a string is digits only
- `isOverDaysOld`: Checks if a timestamp is over a certain number of days from now
- `isValidAlphaNum`: Checks if a string is alphanumeric (contains only numbers and letters)
- `isValidDate`: Checks if a string is a valid date
- `isValidImage`: Checks if a file extension is a valid image
- `isValidName`: Checks if entered string is valid name i.e a-z,A-Z and dashes (-)
- `isValidPhone`: Checks if a string contains only numbers and dashes (like a phone number)
- `isValidString`: Checks if a string is not empty and doesn't contain only spaces
- `onlyOneTruthy`: Checks if an array of boolean object properties have only one true at a time
- `sanitizeData`: Extracts properties from an object and returns a new object with extracted properties
- `stripHTML`: Removes any html tags from a string
- `isValidObjectId`: Checks if a string is a valid 24 char hexString (like MongoDB ID)