import { executarOperacao } from '../src/operacoes';

describe('funcao somar', () => {
  test(`espero que a soma de dois 
    numeros inteiros esteja correta`, () => {
    expect(executarOperacao(1, 2, "soma")).toBe(3);
  });

  test(`espero que a soma de dois 
    numeros decimais esteja correta`, () => {
    expect(executarOperacao(1.5, 2.5, "soma")).toBe(4);
  });

  test(`espero que a soma de dois 
    numeros negativos esteja correta`, () => {
    expect(executarOperacao(-2, -3, "soma")).toBe(-5);
  });

  test(`espero que ao tentar somar letras
    retorne uma mensagem de erro`, () => {
    expect(executarOperacao("a", "b", "soma")).toBe("Erro");
  });

  test(`espero que ao tentar somar dois objetos
    retorne uma mensagem de erro`, () => {
    expect(executarOperacao({}, {}, "soma")).toBe("Erro");
  });

  test(`espero que ao tentar somar dois arrays
    retorne uma mensagem de erro`, () => {
    expect(executarOperacao([], [], "soma")).toBe("Erro");
  });

  test(`espero que ao tentar somar um array e um numero
    retorne uma mensagem de erro`, () => {
    expect(executarOperacao([], 10, "soma")).toBe("Erro");
  });
});

describe('funcao dividir', () => {
    test(`espero que a divisão de dois 
      numeros inteiros esteja correta`, () => {
      expect(executarOperacao(10, 2, "divisao")).toBe(5);
    });
  
    test(`espero que a divisão de dois 
      numeros decimais esteja correta`, () => {
      expect(executarOperacao(1.5, 2.5, "divisao")).toBe(0.6);
    });
  
    test(`espero que a divisão de dois 
      numeros negativos esteja correta`, () => {
      expect(executarOperacao(-10, -2, "divisao")).toBe(5);
    });
  
    test(`espero que ao tentar dividir letras
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao("a", "b", "divisao")).toBe("Erro");
    });
  
    test(`espero que ao tentar dividir dois objetos
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao({}, {}, "divisao")).toBe("Erro");
    });
  
    test(`espero que ao tentar dividir dois arrays
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], [], "divisao")).toBe("Erro");
    });
  
    test(`espero que ao tentar dividir um array e um numero
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], 10, "divisao")).toBe("Erro");
    });

    test(`espero que ao tentar dividir um zero e um numero
        retorne uma mensagem de erro`, () => {
        expect(executarOperacao(0, 10, "divisao")).toBe("Erro");
      });

    test(`espero que ao tentar dividir um zero e um numero
        retorne uma mensagem de erro`, () => {
        expect(executarOperacao(10, 0, "divisao")).toBe("Erro");
      });
  });

describe('funcao multiplicação', () => {
    test(`espero que a multiplicação de dois 
      numeros inteiros esteja correta`, () => {
      expect(executarOperacao(10, 2, "multiplicacao")).toBe(20);
    });
  
    test(`espero que a multiplicação de dois 
      numeros decimais esteja correta`, () => {
      expect(executarOperacao(1.5, 2.5, "multiplicacao")).toBe(3.75);
    });
  
    test(`espero que a multiplicação de dois 
      numeros negativos esteja correta`, () => {
      expect(executarOperacao(-10, -2, "multiplicacao")).toBe(20);
    });
  
    test(`espero que ao tentar multiplicar letras
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao("a", "b", "multiplicacao")).toBe("Erro");
    });
  
    test(`espero que ao tentar multiplicar dois objetos
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao({}, {}, "multiplicacao")).toBe("Erro");
    });
  
    test(`espero que ao tentar multiplicar dois arrays
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], [], "multiplicacao")).toBe("Erro");
    });
  
    test(`espero que ao tentar multiplicar um array e um numero
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], 10, "multiplicacao")).toBe("Erro");
    });
  });

describe('funcao subtração', () => {
    test(`espero que a subtração de dois 
      numeros inteiros esteja correta`, () => {
      expect(executarOperacao(4, 2, "subtracao")).toBe(2);
    });
  
    test(`espero que a subtração de dois 
      numeros decimais esteja correta`, () => {
      expect(executarOperacao(1.5, 2.5, "subtracao")).toBe(-1);
    });
  
    test(`espero que a subtração de dois 
      numeros negativos esteja correta`, () => {
      expect(executarOperacao(-2, -3, "subtracao")).toBe(1);
    });
  
    test(`espero que ao subtrair somar letras
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao("a", "b", "subtracao")).toBe("Erro");
    });
  
    test(`espero que ao tentar subtrair dois objetos
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao({}, {}, "subtracao")).toBe("Erro");
    });
  
    test(`espero que ao tentar subtrair dois arrays
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], [], "subtracao")).toBe("Erro");
    });
  
    test(`espero que ao tentar subtrair um array e um numero
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], 10, "subtracao")).toBe("Erro");
    });
  });
  