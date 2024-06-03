const htmlRegex = /<\/?[^>]+(>|$)/gi;
const emailRegex = /^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;
const userNameRegex = /^[a-z0-9_]+$/;
const nameRegex = /^[a-z-]+$/i;
const phoneRegex = /^[0-9-+]+$/i;
const validStringRegex = /([^\s])/;
const alphaNumRegex = /^[a-z0-9]+$/i;
const numOnlyRegex = /^[0-9]+$/i;
const hexStringRegex = /^[a-f0-9]{24}$/i;

 /**
 * @desc Checks if entered email is valid
 * @param {String} email - string to validate if email or not
 * @returns {Boolean}
 */
export const isValidEmail = (email: string) => (email ? emailRegex.test(email) : false);
 /**
 * @desc Checks if entered string is valid username - i.e. a to z, 0 to 9, and underscores (_)
 * @param {String} userName - string to validate if is valid username or not
 * @returns {Boolean}
 */
export const isValidUserName = (userName: string) => (userName ? userNameRegex.test(userName) : false);
 /**
 * @desc Checks if entered string is valid name i.e a-z,A-Z and dashes (-)
 * @param {String} name - string to validate if valid name or not
 * @returns {Boolean}
 */
export const isValidName = (name: string) => (name ? nameRegex.test(name) : false);
 /**
 * @desc Removes any html tags from a string
 * @param {String} html - html to be stripped of tags
 * @returns {String} string stripped of any html
 */
export const stripHTML = (html: string) => html.replace(htmlRegex, '');
 /**
 * @desc Checks if a string is digits only
 * @param {String} numLike - string to be validated
 * @returns {Boolean}
 */
export const isNumbersOnly = (numLike: string) => (numLike ? numOnlyRegex.test(numLike) : false);
 /**
 * @desc Checks if a string contains only numbers and dashes (like a phone number)
 * @param {String} phone - string to be validated
 * @returns {Boolean}
 */
export const isValidPhone = (phone: string) => (phone ? phoneRegex.test(phone) : false);
 /**
 * @desc Checks if a string is not empty and doesn't contain only spaces
 * @param {String} str - string to be validated
 * @returns {Boolean}
 */
export const isValidString = (str: string) => (str ? validStringRegex.test(str) : false);
 /**
 * @desc Checks if a string is alphanumeric (contains only numbers and letters)
 * @param {String} str - string to be validated
 * @returns {Boolean}
 */
export const isValidAlphaNum = (str: string): boolean => (str ? alphaNumRegex.test(str) : false);
 /**
 * @desc Checks if a string is a valid date
 * @param {String} dateLike - string to be validated
 * @returns {Boolean}
 */
export const isValidDate = (datelike: string): boolean => new Date(datelike) instanceof Date && !Number.isNaN(datelike) && typeof datelike !== 'boolean' && new Date(datelike).toString() !== 'Invalid Date';
 /**
 * @desc Checks if a value is boolean (true or false) - returns true even if the value is false, as false is also a boolean
 * @param {String} val - value to be validated
 * @returns {Boolean}
 */
export const isBoolean = (val: any): boolean => Boolean(val) === val;
 /**
 * @desc Checks if a string is empty or not
 * @param {String} stringLike - string to be validated
 * @returns {Boolean}
 */
export const isNotEmpty = (stringLike: string): boolean => validStringRegex.test(stringLike);
 /**
 * @desc Checks if an array of boolean object properties have only one true at a time
 * @param {[Object]} Array of boolean objects to be validated
 * @returns {Boolean}
 */
export const onlyOneTruthy = (...a: any[]): boolean => !!(a.reduce((a, b) => a + !!b, 0) - 1)
 /**
 * @desc Checks if a file extension is a valid image
 * @param {String} mimetype - file extention to be validated
 * @returns {Boolean}
 */
export const isValidImage = (mimetype: string): string | boolean => {
  const validMimeTypes: { [key: string]: string } = {
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    png: 'image/png',
    svg: 'image/svg+xml',
    webp: 'image/webp',
    bmp: 'image/bmp'
  };
  return mimetype ? validMimeTypes[mimetype.split('/')[1]] : false;
};

 /**
 * @desc Checks if a timestamp is over a certain number of days from now
 * @param {String} date - date to check the number of days from
 * @param {Number} days - number to check if the date is greater than number of days
 * @returns {Boolean}
 */
export const isOverDaysOld = (date: string, days: number): boolean => {
  if (!date) return false;
  if (Date.parse(date.toString()) >= Date.now()) return false;
  if (Date.parse(date.toString())) {
    const dateDiff = new Date(Date.now() - Date.parse(date));
    const dateDiffInDays = Math.abs(dateDiff.getUTCDate() - 1);
    return dateDiffInDays >= days;
  }
  return false;
};

 /**
 * @desc Checks if a date of birth is over a certain number of years
 * @param {String} dateOfBirth - date to check the current age of
 * @param {Number} requiredAge - number to check if the given dateOfBirth is greater than that age
 * @returns {Boolean}
 */
export const isOfAge = (dateOfBirth: string, requiredAge: number): boolean => {
  if (!dateOfBirth) return false;
  if (Date.parse(dateOfBirth.toString()) > Date.now()) return false;
  if (Date.parse(dateOfBirth.toString())) {
    const dob = new Date(dateOfBirth);
    const ageDiff = new Date(Date.now() - dob.getTime());
    const age = Math.abs(ageDiff.getUTCFullYear() - 1970);
    return age >= requiredAge;
  }
  return false;
};
 /**
 * @desc Extracts properties from an object and returns a new object with extracted properties
 * @param {[String]} fields[] - properties you wish to extract
 * @param {Object} data - Object with the properties you wish to extract from
 * @returns {Object}
 */
export const sanitizeData = <T extends Record<string, any> = any>(fields: string[], data: Partial<T>): Partial<T> => {
  const sanitizedData: Partial<T> = {};
  fields.forEach((field) => {
    if (isBoolean(data[field])) {
      sanitizedData[field as keyof T] = data[field];
      return;
    }
    if (typeof(data[field]) === 'number'){
      sanitizedData[field as keyof T] = data[field];
      return;
    }
    if (data[field]) {
      sanitizedData[field as keyof T] = data[field];
      if (isValidDate(data[field] as string)) {
        sanitizedData[field as keyof T] = new Date(data[field] as string) as unknown as any;
      }
    }
  });
  return sanitizedData;
};
 /**
 * @desc Checks if a string is a valid 24 char hexString (like MongoDB ID)
 * @param {String} idLike - string to validate as hexString 24 char
 * @returns {Boolean}
 */
export const isValidObjectId = (idLike: string): boolean => hexStringRegex.test(idLike);

 /**
 * @desc Gets object keys in the types that they are in, giving a list of properties
 * @param {Object} obj - Object to get keys from
 * @returns {[String]}
 */
export const getObjectKeys = <T extends {}>(obj: T): Array<keyof T> => Object.keys(obj) as Array<keyof T>;

export const sortObjectArrayByFunction = <T extends {}>(array: T[], compareFn?: (a: T, b: T) => number): T[] => {
  return array.slice().sort(compareFn);
}

export const sortArray = <K extends Record<string, any>>(
  arr: K[], 
  compareFn: (a: K, b: K) => number
): K[] => arr.sort(compareFn);

export const sortByNumericalProperty = <K extends string, T extends Record<K, number>>(
  items: T[],
  dateFieldName: K,
  reverse = false,
) => items.sort((a: T, b: T) => reverse ? b[dateFieldName] - a[dateFieldName] : a[dateFieldName] - b[dateFieldName])

export const sortByStringProperty = <K extends string, T extends Record<K, string>>(
  items: T[],
  stringProperty: K,
  reverse = false,
) => items.sort((a: T, b: T) => reverse ? b[stringProperty].localeCompare(a[stringProperty]) : a[stringProperty].localeCompare(b[stringProperty]))


export const arraysEquals = <K extends Record<string, any>>(a: K[], b: K[], compareFn: (a: K, b: K) => number) => {
  a.sort(compareFn);
  b.sort(compareFn);
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => JSON.stringify(val) === JSON.stringify(b[index]))
  );
};
