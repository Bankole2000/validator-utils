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
