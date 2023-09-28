import { generateRandomNumber } from "../utils/randomNumberGenerator";

describe('Генератор чисел', () => {
  test('число больше 1', () => {
    const number = generateRandomNumber(1, 100);
    expect(number).toBeGreaterThan(1);
  });

  test('число меньше 100', () => {
    const number = generateRandomNumber(1, 100);
    expect(number).toBeLessThan(100);
  });
});