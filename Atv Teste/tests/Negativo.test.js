import { Negativo } from "../src/Negativo.js";

test("retorna true para número negativo", () => {
  expect(Negativo(-4)).toBe(true);
});

test("retorna false para número positivo", () => {
  expect(Negativo(5)).toBe(false);
});