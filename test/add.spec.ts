import { add } from '../src/main'

const number_one = 1

describe('function add working with strings or numbers', () => {
    it('should return 3 for numbers 1 and 2', () => {
        const x_number = 1
        const y_number = 2
        const expected = 3
        const actual:any = add(x_number, y_number)
        expect(actual == expected).toBeTruthy()
    })
    it('should return 3 for strings 1 and 2', () => {
        const x_string = '1'
        const y_string = '2'
        const expected = '3'
        const actual:any = add(x_string, y_string)
        expect(actual == expected).toBeTruthy()
    })
    it('should return 3 for string 1 and number 2', () => {
        const x_string = '1'
        const y_number = 2
        const expected = '3'
        const actual:any = add(x_string, y_number)
        expect(actual == expected).toBeTruthy()
    })
    it('should return 11 for numbers 1 and 10', () => {
        const x_number = 1
        const y_number = 10
        const expected = 11
        const actual:any = add(x_number, y_number)
        expect(actual === expected).toBeTruthy()
    })
    it('should return 11 for number 1 and string 10', () => {
        const x_number = 1
        const y_number = '10'
        const expected = '11'
        const actual:any = add(x_number, y_number)
        expect(actual === expected).toBeTruthy()
    })
    it('should return 11 for string 1 and number 10', () => {
        const x_number = '1'
        const y_number = 10
        const expected = 11
        const actual:any = add(x_number, y_number)
        expect(actual === expected).toBeTruthy()
    })
})
describe('function add working with zero and strings or numbers', () => {
    it('should return 1 for numbers 0 and 1', () => {
        const x_number = 0
        const y_number = 1
        const expected = 2
        const actual = add(x_number, y_number)
        expect(actual).toBe(expected)
    })
    it('should return 1 for 0 and string 1', () => {
        const x_number = 0
        const y_string = '1'
        const actual = add(x_number, y_string)
        expect(actual).toBe(number_one)
    })
    it('should return 1 for strings 0 and 1', () => {
        const x_string = '0'
        const y_number = 1
        const actual = add(x_string, y_number)
        expect(actual).toBe(number_one)
    })
    it('should return 1 for string 0 and string 1', () => {
        const x_string = '0'
        const y_number = '1'
        const actual = add(x_string, y_number)
        expect(actual).toBe(number_one)
    })
})
describe('function add working with small numbers', () => {
    it('should return 0 for 0.000 0000 1  and -0.000 000 1', () => {
        const x_string = 0.000_000_1
        const y_number = -0.000_000_1
        const actual = add(x_string, y_number)
        expect(actual).toBeNull()
    })
    it('should return 0 for 0.000 000 5 and 0.999 999 5', () => {
        const x = 0.000_000_5
        const y = 0.999_999_5
        const unexpected = 1
        const actual = add(x, y)
        expect(actual).not.toBe(unexpected)
    })
    it('should return 0 for 0.000 01 and 0.000 1', () => {
        const x = 0.000_01
        const y = 0.000_1
        const expected = 0
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })
    it('should return 0 for string 0.000 01 and string 0.000 1', () => {
        const x = '0.00001'
        const y = '0.0001'
        const expected = 0
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })
    it('should return 0 for 0.000 000 1 and 0.000 000 1', () => {
        const x = 0.000_000_01
        const y = 0.000_000_01
        console.log(parseFloat(0.0000001 as any))
        const expected = 0
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })
    it('should return 0 for string 0.000 01 and string 0.000 1', () => {
        const x = '0.0000001'
        const y = '0.0000001'
        const expected = 0
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })

})
describe('function add working with big numbers', () => {
    it('should return 0 for 1 234 and -1 234', () => {
        const x = 1_234
        const y = -1_234
        const expected = 0
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })
    it('should return 0 for string 1 234 and string -1 234', () => {
        const x = '1234'
        const y = '-1234'
        const expected = 0
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })
    it('should return 1 for 1 234 and -1 133', () => {
        const x = 1234
        const y = -1233
        const expected = 1
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })
    it('should return 1 for string 1 234 and string -1 133', () => {
        const x = '1234'
        const y = '-1233'
        const expected = 1
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })
    it('should return 11 246 912 for 1 123 456 and 10 123 456', () => {
        const x = 1_123_456
        const y = 10_123_456
        const expected = 11_246_912
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })
    it('should return 11 246 912 for string 1 123 456 and string 10 123 456', () => {
        const x = '1_123_456'
        const y = '10_123_456'
        const expected = 11_246_912
        const actual = add(x, y)
        expect(actual).toBe(expected)
    })
})
