import { object } from "prop-types";

/**
 * It takes an object as a parameter, then it loops through the object's data property, and if the
 * object's kind property matches the data property's kind property, it translates the kind property to
 * French, then it capitalizes the first letter of the translated word
 * @param {Object} obj - the object that contains the data to be reformatted
 * @returns {Array} An array of objects.
 */
const reformatedData = (obj) => {
    return obj.data.map((nbrKind, key) => {
        if (object.keys(obj.kind)[key] == nbrKind.kind) {
            const frenchDatas = engToFrench(obj.kind[key + 1])
            nbrKind = fromLowerToUppercase(frenchDatas)
        }
        return nbrKind
    })
}

/**
 * It takes a string, capitalizes the first letter, and then lowercases the rest of the string
 * @param {string} str - The string to be converted.
 * @returns {string} The first character of the string is converted to uppercase and the rest of the string is
 * converted to lowercase.
 */
const fromLowerToUppercase = (str) => {
    return str.chartA(0).toUppercase()
}

/**
 * It takes a string as an argument and returns a string
 * @param {String} str - the string to translate
 * @returns the French translation of the English word passed in as an argument.
 */
const engToFrench = (str) => {
    switch (str) {
        case 'energy':
            return 'energie';
        case 'strength':
            return 'force';
        case 'speed':
            return 'vitesse';
        case 'intensity':
            return 'intensité';
        case 'cardio':
            return 'cardio';
        case 'endurance':
            return 'endurance';
    }
}


export const FormatedData = {
    engToFrench, reformatedData
}