import {urlValidation} from "../js/urlValidation";

describe('Test check Url functionality',()=>{
    test('Testing if it return false for invalid url',()=>{
        expect(urlValidation('www.google')).toBe(false);
    })

    test('Testing if it return true for valid url',()=>{
        expect(urlValidation('www.google.com')).toBe(true);
    })
})