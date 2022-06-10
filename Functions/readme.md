
This repository contains activities of the Course of *Functions in JavaScript*, part of the **[Santander Bootcamp FullStack Developer](https://app.becas-santander.com/pt-BR/program/bolsas-santander-tecnologia-santander-bootcamp-2022)** organized by *[Digital Innovation One](https://www.dio.me/en)* and taught by *[Stephany Nusch](https://github.com/stebsnusch)*.

___

#### Atividade 1: Alunos Aprovados
1. Crie uma função que recebe o array alunos e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
---

#### Atividade 2: This
Dada a função `calculaIdade`, utilize os métodos `call` e `apply` para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

>function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
