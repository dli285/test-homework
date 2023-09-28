import { isPalindrome } from "../utils/isPalindrome";

test('Snake is not Palindrome', () => {
    expect(isPalindrome('Snake')).toBe(false)
})