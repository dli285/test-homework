import { celsiusToFahrenheit } from "../utils/celsiusToFahrenheitConverter";

test('0 цельсиа это 32 фаренгейта', () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
})