const calculadora = require("../../models/calculadora.js");

test("espero que 1 + 1 seja 2", () => {
  expect(calculadora.somar(1, 1)).toBe(2);
});

test("espero que 2 + 2 seja 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});
