"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHex = exports.addOrdinal = exports.maskWithChar = exports.arrayToObjectByField = exports.makeKeyRemover = exports.arraysEquals = exports.sortByStringProperty = exports.sortByNumericalProperty = exports.sortArray = exports.sortObjectArrayByFunction = exports.getObjectKeys = exports.isValidObjectId = exports.sanitizeData = exports.isOfAge = exports.isOverDaysOld = exports.isValidImage = exports.onlyOneTruthy = exports.isNotEmpty = exports.isBoolean = exports.isValidDate = exports.isValidUrl = exports.isValidAlphaNum = exports.isValidString = exports.isValidPhone = exports.isNumbersOnly = exports.stripHTML = exports.isValidName = exports.isValidUserName = exports.isValidEmail = void 0;
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
const isValidEmail = (email) => (email ? emailRegex.test(email) : false);
exports.isValidEmail = isValidEmail;
/**
* @desc Checks if entered string is valid username - i.e. a to z, 0 to 9, and underscores (_)
* @param {String} userName - string to validate if is valid username or not
* @returns {Boolean}
*/
const isValidUserName = (userName) => (userName ? userNameRegex.test(userName) : false);
exports.isValidUserName = isValidUserName;
/**
* @desc Checks if entered string is valid name i.e a-z,A-Z and dashes (-)
* @param {String} name - string to validate if valid name or not
* @returns {Boolean}
*/
const isValidName = (name) => (name ? nameRegex.test(name) : false);
exports.isValidName = isValidName;
/**
* @desc Removes any html tags from a string
* @param {String} html - html to be stripped of tags
* @returns {String} string stripped of any html
*/
const stripHTML = (html) => html.replace(htmlRegex, '');
exports.stripHTML = stripHTML;
/**
* @desc Checks if a string is digits only
* @param {String} numLike - string to be validated
* @returns {Boolean}
*/
const isNumbersOnly = (numLike) => (numLike ? numOnlyRegex.test(numLike) : false);
exports.isNumbersOnly = isNumbersOnly;
/**
* @desc Checks if a string contains only numbers and dashes (like a phone number)
* @param {String} phone - string to be validated
* @returns {Boolean}
*/
const isValidPhone = (phone) => (phone ? phoneRegex.test(phone) : false);
exports.isValidPhone = isValidPhone;
/**
* @desc Checks if a string is not empty and doesn't contain only spaces
* @param {String} str - string to be validated
* @returns {Boolean}
*/
const isValidString = (str) => (str ? validStringRegex.test(str) : false);
exports.isValidString = isValidString;
/**
* @desc Checks if a string is alphanumeric (contains only numbers and letters)
* @param {String} str - string to be validated
* @returns {Boolean}
*/
const isValidAlphaNum = (str) => (str ? alphaNumRegex.test(str) : false);
exports.isValidAlphaNum = isValidAlphaNum;
/**
* @desc Checks if a string is a valid url
* @param {String} urlLike - string to be validated
* @returns {Boolean}
*/
const isValidUrl = (urlLike) => {
    try {
        new URL(urlLike);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidUrl = isValidUrl;
/**
* @desc Checks if a string is a valid date
* @param {String} dateLike - string to be validated
* @returns {Boolean}
*/
const isValidDate = (datelike) => new Date(datelike) instanceof Date && !Number.isNaN(datelike) && typeof datelike !== 'boolean' && new Date(datelike).toString() !== 'Invalid Date' && !(0, exports.isValidUrl)(datelike);
exports.isValidDate = isValidDate;
/**
* @desc Checks if a value is boolean (true or false) - returns true even if the value is false, as false is also a boolean
* @param {String} val - value to be validated
* @returns {Boolean}
*/
const isBoolean = (val) => Boolean(val) === val;
exports.isBoolean = isBoolean;
/**
* @desc Checks if a string is empty or not
* @param {String} stringLike - string to be validated
* @returns {Boolean}
*/
const isNotEmpty = (stringLike) => validStringRegex.test(stringLike);
exports.isNotEmpty = isNotEmpty;
/**
* @desc Checks if an array of boolean object properties have only one true at a time
* @param {[Object]} Array of boolean objects to be validated
* @returns {Boolean}
*/
const onlyOneTruthy = (...a) => !!(a.reduce((a, b) => a + !!b, 0) - 1);
exports.onlyOneTruthy = onlyOneTruthy;
/**
* @desc Checks if a file extension is a valid image
* @param {String} mimetype - file extention to be validated
* @returns {Boolean}
*/
const isValidImage = (mimetype) => {
    const validMimeTypes = {
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
exports.isValidImage = isValidImage;
/**
* @desc Checks if a timestamp is over a certain number of days from now
* @param {String} date - date to check the number of days from
* @param {Number} days - number to check if the date is greater than number of days
* @returns {Boolean}
*/
const isOverDaysOld = (date, days) => {
    if (!date)
        return false;
    if (Date.parse(date.toString()) >= Date.now())
        return false;
    if (Date.parse(date.toString())) {
        const dateDiff = new Date(Date.now() - Date.parse(date));
        const dateDiffInDays = Math.abs(dateDiff.getUTCDate() - 1);
        return dateDiffInDays >= days;
    }
    return false;
};
exports.isOverDaysOld = isOverDaysOld;
/**
* @desc Checks if a date of birth is over a certain number of years
* @param {String} dateOfBirth - date to check the current age of
* @param {Number} requiredAge - number to check if the given dateOfBirth is greater than that age
* @returns {Boolean}
*/
const isOfAge = (dateOfBirth, requiredAge) => {
    if (!dateOfBirth)
        return false;
    if (Date.parse(dateOfBirth.toString()) > Date.now())
        return false;
    if (Date.parse(dateOfBirth.toString())) {
        const dob = new Date(dateOfBirth);
        const ageDiff = new Date(Date.now() - dob.getTime());
        const age = Math.abs(ageDiff.getUTCFullYear() - 1970);
        return age >= requiredAge;
    }
    return false;
};
exports.isOfAge = isOfAge;
/**
* @desc Extracts properties from an object and returns a new object with extracted properties
* @param {[String]} fields[] - properties you wish to extract
* @param {Object} data - Object with the properties you wish to extract from
* @returns {Object}
*/
const sanitizeData = (fields, data) => {
    const sanitizedData = {};
    fields.forEach((field) => {
        if ((0, exports.isBoolean)(data[field])) {
            sanitizedData[field] = data[field];
            return;
        }
        if (typeof (data[field]) === 'number') {
            sanitizedData[field] = data[field];
            return;
        }
        if (data[field]) {
            sanitizedData[field] = data[field];
            if ((0, exports.isValidDate)(data[field])) {
                sanitizedData[field] = new Date(data[field]);
            }
        }
    });
    return sanitizedData;
};
exports.sanitizeData = sanitizeData;
/**
* @desc Checks if a string is a valid 24 char hexString (like MongoDB ID)
* @param {String} idLike - string to validate as hexString 24 char
* @returns {Boolean}
*/
const isValidObjectId = (idLike) => hexStringRegex.test(idLike);
exports.isValidObjectId = isValidObjectId;
/**
* @desc Gets object keys in the types that they are in, giving a list of properties
* @param {Object} obj - Object to get keys from
* @returns {[String]}
*/
const getObjectKeys = (obj) => Object.keys(obj);
exports.getObjectKeys = getObjectKeys;
const sortObjectArrayByFunction = (array, compareFn) => {
    return array.slice().sort(compareFn);
};
exports.sortObjectArrayByFunction = sortObjectArrayByFunction;
const sortArray = (arr, compareFn) => arr.sort(compareFn);
exports.sortArray = sortArray;
const sortByNumericalProperty = (items, dateFieldName, reverse = false) => items.sort((a, b) => reverse ? b[dateFieldName] - a[dateFieldName] : a[dateFieldName] - b[dateFieldName]);
exports.sortByNumericalProperty = sortByNumericalProperty;
const sortByStringProperty = (items, stringProperty, reverse = false) => items.sort((a, b) => reverse ? b[stringProperty].localeCompare(a[stringProperty]) : a[stringProperty].localeCompare(b[stringProperty]));
exports.sortByStringProperty = sortByStringProperty;
const arraysEquals = (a, b, compareFn) => {
    a.sort(compareFn);
    b.sort(compareFn);
    return (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => JSON.stringify(val) === JSON.stringify(b[index])));
};
exports.arraysEquals = arraysEquals;
/**
* @function {@link makeKeyRemover} returns a function to remove specified keys from an object
* @param {[String]} keys - Array of keys for the function to remove
* @example
* const keyRemover = makeKeyRemover(["a", "b"])
* const newObject = keyRemover({a: 1, b: 2, c: 3})
* // newObject === {c: 3} - properties "a" and "b" have been removed
*/
const makeKeyRemover = (keys) => (obj) => {
    return {};
};
exports.makeKeyRemover = makeKeyRemover;
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
const arrayToObjectByField = (arr, key) => arr.reduce((a, b) => (Object.assign(Object.assign({}, a), { [b[key]]: b })), {});
exports.arrayToObjectByField = arrayToObjectByField;
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
const maskWithChar = ({ str, num, mask = "*", reverse = false }) => {
    return reverse
        ? `${str}`.slice(0, (`${str}`.length - num)).padEnd(`${str}`.length, mask)
        : `${str}`.slice(num).padStart(`${str}`.length, mask);
};
exports.maskWithChar = maskWithChar;
/**
 * @function {@link addOrdinal} returns a string with ordinal suffix (i.e. 1st, 2nd, 3rd)
 * @param {number} n - Number to get ordinal string of
 * @example
 * addOrdinal(1) // 1st
 * addOrdinal(12) // 12th
 * addOrdinal(22) // 22nd
 */
const addOrdinal = (n) => `${n}${[, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'}`;
exports.addOrdinal = addOrdinal;
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
const rgbToHex = ({ r = 0, g = 0, b = 0 }) => `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
exports.rgbToHex = rgbToHex;
