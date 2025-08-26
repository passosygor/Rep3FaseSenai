import { Positivo } from "../src/Positivo.js";

test("retorna true para número positivo", () => {
  expect(Positivo(4)).toBe(true);
});

test("retorna false para número negativo", () => {
  expect(Positivo(-5)).toBe(false);
});