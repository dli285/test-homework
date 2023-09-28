import { isEven } from "../utils/isEven";

test('7 это не четное число', () => {
    expect(isEven(7)).toBe(false)
})