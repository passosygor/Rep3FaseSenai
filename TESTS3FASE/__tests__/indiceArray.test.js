import { indiceArray } from "../src/indiceArray";

describe("Achar o numero pelo indice", () => {
    test("converter um numero com aspas", () => {
      expect(indiceArray(0)).toBe(4);
    });
  
    test("converter um string qualquer gere erro", () => {
      expect(indiceArray("alex")).toBe("Erro");
    });
  
    test("converter um objeto qualquer gere erro", () => {
      expect(indiceArray({})).toBe("Erro");
    });
  
    test("converter um array qualquer gere erro", () => {
      expect(indiceArray([])).toBe("Erro");
    });
  
    test("converter um array qualquer gere erro", () => {
      expect(indiceArray(undefined)).toBe("Erro");
    });
  
    test("converter um array qualquer gere erro", () => {
      expect(indiceArray(null)).toBe("Erro");
    });
  });