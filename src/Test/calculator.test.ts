import { add, subtract } from "../utils/calculator";

describe ('Калькулятор', () => {
    test('сумма 2 и 3 равна 5', () => {
        expect(add(2,3)).toBe(5)
    })
    test('Разность 3 и 2 равна 1', () => {
        expect(subtract(3,2)).toBe(1)
    })
})