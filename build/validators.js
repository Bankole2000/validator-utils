"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeData = exports.isOfAge = exports.isOverDaysOld = exports.isValidImage = exports.onlyOneTruthy = exports.isNotEmpty = exports.isBoolean = exports.isValidDate = exports.isValidAlphaNum = exports.isValidString = exports.isValidPhone = exports.isNumbersOnly = exports.stripHTML = exports.isValidName = exports.isValidUserName = exports.isValidEmail = void 0;
const htmlRegex = /<\/?[^>]+(>|$)/gi;
const emailRegex = /^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;
const userNameRegex = /^[a-z0-9_]+$/;
const nameRegex = /^[a-z-]+$/i;
const phoneRegex = /^[0-9-+]+$/i;
const validStringRegex = /([^\s])/;
const alphaNumRegex = /^[a-z0-9]+$/i;
const numOnlyRegex = /^[0-9]+$/i;
const isValidEmail = (email) => (email ? emailRegex.test(email) : false);
exports.isValidEmail = isValidEmail;
const isValidUserName = (userName) => (userName ? userNameRegex.test(userName) : false);
exports.isValidUserName = isValidUserName;
const isValidName = (name) => (name ? nameRegex.test(name) : false);
exports.isValidName = isValidName;
const stripHTML = (html) => html.replace(htmlRegex, '');
exports.stripHTML = stripHTML;
const isNumbersOnly = (numLike) => (numLike ? numOnlyRegex.test(numLike) : false);
exports.isNumbersOnly = isNumbersOnly;
const isValidPhone = (phone) => (phone ? phoneRegex.test(phone) : false);
exports.isValidPhone = isValidPhone;
const isValidString = (str) => (str ? validStringRegex.test(str) : false);
exports.isValidString = isValidString;
const isValidAlphaNum = (str) => (str ? alphaNumRegex.test(str) : false);
exports.isValidAlphaNum = isValidAlphaNum;
const isValidDate = (datelike) => new Date(datelike) instanceof Date && !Number.isNaN(datelike) && typeof datelike !== 'boolean' && new Date(datelike).toString() !== 'Invalid Date';
exports.isValidDate = isValidDate;
const isBoolean = (val) => Boolean(val) === val;
exports.isBoolean = isBoolean;
const isNotEmpty = (stringLike) => validStringRegex.test(stringLike);
exports.isNotEmpty = isNotEmpty;
const onlyOneTruthy = (...a) => !!(a.reduce((a, b) => a + !!b, 0) - 1);
exports.onlyOneTruthy = onlyOneTruthy;
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
