/**
* @desc Checks if entered email is valid
* @param {String} email - string to validate if email or not
* @returns {Boolean}
*/
export declare const isValidEmail: (email: string) => boolean;
/**
* @desc Checks if entered string is valid username - i.e. a to z, 0 to 9, and underscores (_)
* @param {String} userName - string to validate if is valid username or not
* @returns {Boolean}
*/
export declare const isValidUserName: (userName: string) => boolean;
/**
* @desc Checks if entered string is valid name i.e a-z,A-Z and dashes (-)
* @param {String} name - string to validate if valid name or not
* @returns {Boolean}
*/
export declare const isValidName: (name: string) => boolean;
/**
* @desc Removes any html tags from a string
* @param {String} html - html to be stripped of tags
* @returns {String} string stripped of any html
*/
export declare const stripHTML: (html: string) => string;
/**
* @desc Checks if a string is digits only
* @param {String} numLike - string to be validated
* @returns {Boolean}
*/
export declare const isNumbersOnly: (numLike: string) => boolean;
/**
* @desc Checks if a string contains only numbers and dashes (like a phone number)
* @param {String} phone - string to be validated
* @returns {Boolean}
*/
export declare const isValidPhone: (phone: string) => boolean;
/**
* @desc Checks if a string is not empty and doesn't contain only spaces
* @param {String} str - string to be validated
* @returns {Boolean}
*/
export declare const isValidString: (str: string) => boolean;
/**
* @desc Checks if a string is alphanumeric (contains only numbers and letters)
* @param {String} str - string to be validated
* @returns {Boolean}
*/
export declare const isValidAlphaNum: (str: string) => boolean;
/**
* @desc Checks if a string is a valid url
* @param {String} urlLike - string to be validated
* @returns {Boolean}
*/
export declare const isValidUrl: (urlLike: string) => boolean;
/**
* @desc Checks if a string is a valid date
* @param {String} dateLike - string to be validated
* @returns {Boolean}
*/
export declare const isValidDate: (datelike: string) => boolean;
/**
* @desc Checks if a value is boolean (true or false) - returns true even if the value is false, as false is also a boolean
* @param {String} val - value to be validated
* @returns {Boolean}
*/
export declare const isBoolean: (val: any) => boolean;
/**
* @desc Checks if a string is empty or not
* @param {String} stringLike - string to be validated
* @returns {Boolean}
*/
export declare const isNotEmpty: (stringLike: string) => boolean;
/**
* @desc Checks if an array of boolean object properties have only one true at a time
* @param {[Object]} Array of boolean objects to be validated
* @returns {Boolean}
*/
export declare const onlyOneTruthy: (...a: any[]) => boolean;
/**
* @desc Checks if a file extension is a valid image
* @param {String} mimetype - file extention to be validated
* @returns {Boolean}
*/
export declare const isValidImage: (mimetype: string) => string | boolean;
/**
* @desc Checks if a timestamp is over a certain number of days from now
* @param {String} date - date to check the number of days from
* @param {Number} days - number to check if the date is greater than number of days
* @returns {Boolean}
*/
export declare const isOverDaysOld: (date: string, days: number) => boolean;
/**
* @desc Checks if a date of birth is over a certain number of years
* @param {String} dateOfBirth - date to check the current age of
* @param {Number} requiredAge - number to check if the given dateOfBirth is greater than that age
* @returns {Boolean}
*/
export declare const isOfAge: (dateOfBirth: string, requiredAge: number) => boolean;
/**
* @desc Extracts properties from an object and returns a new object with extracted properties
* @param {[String]} fields[] - properties you wish to extract
* @param {Object} data - Object with the properties you wish to extract from
* @returns {Object}
*/
export declare const sanitizeData: <T extends Record<string, any> = any>(fields: string[], data: Partial<T>) => Partial<T>;
/**
* @desc Checks if a string is a valid 24 char hexString (like MongoDB ID)
* @param {String} idLike - string to validate as hexString 24 char
* @returns {Boolean}
*/
export declare const isValidObjectId: (idLike: string) => boolean;
/**
* @desc Gets object keys in the types that they are in, giving a list of properties
* @param {Object} obj - Object to get keys from
* @returns {[String]}
*/
export declare const getObjectKeys: <T extends {}>(obj: T) => Array<keyof T>;
export declare const sortObjectArrayByFunction: <T extends {}>(array: T[], compareFn?: (a: T, b: T) => number) => T[];
export declare const sortArray: <K extends Record<string, any>>(arr: K[], compareFn: (a: K, b: K) => number) => K[];
export declare const sortByNumericalProperty: <K extends string, T extends Record<K, number>>(items: T[], dateFieldName: K, reverse?: boolean) => T[];
export declare const sortByStringProperty: <K extends string, T extends Record<K, string>>(items: T[], stringProperty: K, reverse?: boolean) => T[];
export declare const arraysEquals: <K extends Record<string, any>>(a: K[], b: K[], compareFn: (a: K, b: K) => number) => boolean;
/**
* @function {@link makeKeyRemover} returns a function to remove specified keys from an object
* @param {[String]} keys - Array of keys for the function to remove
* @example
* const keyRemover = makeKeyRemover(["a", "b"])
* const newObject = keyRemover({a: 1, b: 2, c: 3})
* // newObject === {c: 3} - properties "a" and "b" have been removed
*/
export declare const makeKeyRemover: <Key extends string>(keys: Key[]) => <Obj>(obj: Obj) => Omit<Obj, Key>;
/**
* @function {@link arrayToObjectByField} convert an object array to object indexed by a selected property
* @param {[Object]} arr - Array of objects which all have property K with unique value
* @param {string} key - property with unique value common to all objects
* @example
* const arr = [
*  { id: '1', name: 'Alpha', gender: 'Male' },
*  { id: '2', name: 'Bravo', gender: 'Male' },
*  { id: '3', name: 'Charlie', gender: 'Female' },
* ]
* arrayToObjectByField(arr, "id")
* // returns
* // {
* // '1': { id: '1', name: 'Alpha', gender: 'Male' },
* // '2': { id: '2', name: 'Bravo', gender: 'Male' },
* // '3': { id: '3', name: 'Charlie', gender: 'Female' },
* //  }
*/
export declare const arrayToObjectByField: <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K) => Record<string, T>;
type maskArgs = {
    str: string;
    num: number;
    mask?: string;
    reverse?: boolean;
};
/**
* @function {@link maskWithChar} convert an object array to object indexed by a selected property
* @param {...maskArgs} maskObj - {@link maskArgs} objects of masking details
* @param {(string | number)} maskObj.str - string or number to be masked
* @param {number} maskObj.num - number of characters to mask
* @param {string} [maskObj.mask] - string to use for masking (default = "*")
* @param {boolean} [maskObj.reverse] - mask from str start or end (default = false)
* @example
* // masks the first 4 characters with "*" // ****567890
* maskWithChar({str: 1234567890, num: 4, mask: '*'});
* // masks the last 5 characters with "x" // 12345xxxxx
* maskWithChar({str: 1234567890, num: 5, mask: 'x', reverse: true});
*/
export declare const maskWithChar: ({ str, num, mask, reverse }: maskArgs) => string;
/**
 * @function {@link addOrdinal} returns a string with ordinal suffix (i.e. 1st, 2nd, 3rd)
 * @param {number} n - Number to get ordinal string of
 * @example
 * addOrdinal(1) // 1st
 * addOrdinal(12) // 12th
 * addOrdinal(22) // 22nd
 */
export declare const addOrdinal: (n: number) => string;
type RGBInput = {
    r?: number;
    g?: number;
    b?: number;
};
/**
 * @function {@link rgbToHex} converts rgb color to hex value
 * @param {...rgbInput} rgbObj - {@link RGBInput} Object of rgb color values
 * @param {number} rgbObj.r - r color value
 * @param {number} rgbObj.g - g color value
 * @param {number} rgbObj.b - b color value
 * @example
 * rgbToHex({r: 0, g: 255, b: 255}) // '#00ffff'
 * rgbToHex({}) // '#000000'
 */
export declare const rgbToHex: ({ r, g, b }: RGBInput) => string;
export type TDateFormatOptions = {
    dateLike: string;
    locales?: Intl.LocalesArgument;
    options?: Intl.DateTimeFormatOptions;
};
/**
 * Utilit function to help format dates
 * @function {@link dateFormatter} helps format dateTimes
 * @param {...TDateFormatOptions} dfObj - {@link TDateFormatOptions} Object of dateFormatting options
 * @param {string} dfObj.dateLike - Date string to be formatted
 * @param {Intl.LocalesArgument} [dfObj.locales] - {@link Intl.LocalesArgument} format locale (default ['en-US'])
 * @param {Intl.DateTimeFormatOptions} [dfObj.options] - {@link Intl.DateTimeFormatOptions} formatting options
 * @example
 * dateFormatter({dateLike: `${new Date()}`})
 * // 'Sun, 09 Jun 2024, 02:30 am'
 */
export declare const dateFormatter: ({ dateLike, locales, options, }: TDateFormatOptions) => string | null;
/**
 * Get time difference between two dates in seconds
 * @function {@link timeDiffInSecs} get time difference in seconds
 * @param {string} start - start Date
 * @param {string} [end] - end Date
 * @example
 * const start = String(new Date())
 * const end = String(new Date(Date.now() + 360000))
 * timeDiffInSecs(end, start) // 360000
 * // start is past so diff is +ive, end will count UP away from start
 * timeDiffInSecs(start, end) // -360000
 * // end is future so diff is -ive, start will count DOWN to end
 * Math.abs(timeDiffInSecs(start, end)) // 360000
 * // return diff as +ve integer regardless of direciton
 * @returns {number}
 */
export declare const timeDiffInSecs: (start: string, end?: string) => number;
export type TTimeFormatOptions = {
    wk?: string | null;
    d?: string | null;
    hr?: string | null;
    min?: string | null;
    sec?: string | null;
};
/**
 * Format time difference in 1wk 2ds 3hrs 4m 5s
 * @function {@link timeTillFormatter} get time difference in seconds
 * @param {number} timeDifference - length of time in milliseconds
 * @param {TTimeFormatOptions} [ttfOptObj] - {@link TTimeFormatOptions} Object
 * @param {string} [ttfOptObj.wk] - week formatting (default wk | wks)
 * @param {string} [ttfOptObj.d] - day formatting (default d | ds)
 * @param {string} [ttfOptObj.hr] - hour formatting (default hr | hrs)
 * @param {string} [ttfOptObj.min] - minute formatting (default m)
 * @param {string} [ttfOptObj.sec] - second formatting (default s)
 * @example
 * const timeDiff = 300000 // 5 minutes in milliseconds
 * timeTillFormatter(timeDiff, {}) // 05m 00
 * timeTillFormatter(timeDiff * 45, {}) // 3hrs 45m 00
 * @returns {string}
 */
export declare const timeTillFormatter: (timeDifference: number, { wk, d, hr, min, sec }: TTimeFormatOptions) => string;
export declare const MILLISECONDS: 1000;
export declare const TIME_IN_SECONDS: {
    readonly s: 1;
    readonly sec: 1;
    readonly secs: 1;
    readonly second: 1;
    readonly seconds: 1;
    readonly m: number;
    readonly min: number;
    readonly mins: number;
    readonly minute: number;
    readonly minutes: number;
    readonly h: number;
    readonly hr: number;
    readonly hrs: number;
    readonly hour: number;
    readonly hours: number;
    readonly d: number;
    readonly day: number;
    readonly days: number;
    readonly week: number;
    readonly month: number;
    readonly months: number;
    readonly y: number;
    readonly yr: number;
    readonly yrs: number;
    readonly year: number;
    readonly years: number;
};
export {};
