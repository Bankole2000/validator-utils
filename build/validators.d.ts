export declare const isValidEmail: (email: string) => boolean;
export declare const isValidUserName: (userName: string) => boolean;
export declare const isValidName: (name: string) => boolean;
export declare const stripHTML: (html: string) => string;
export declare const isNumbersOnly: (numLike: string) => boolean;
export declare const isValidPhone: (phone: string) => boolean;
export declare const isValidString: (str: string) => boolean;
export declare const isValidAlphaNum: (str: string) => boolean;
export declare const isValidDate: (datelike: string) => boolean;
export declare const isBoolean: (val: any) => boolean;
export declare const isNotEmpty: (stringLike: string) => boolean;
export declare const onlyOneTruthy: (...a: any[]) => boolean;
export declare const isValidImage: (mimetype: string) => string | false;
export declare const isOverDaysOld: (date: string, days: number) => boolean;
export declare const isOfAge: (dateOfBirth: string, requiredAge: number) => boolean;
export declare const sanitizeData: (fields: string[], data: any) => {
    [key: string]: any;
};
