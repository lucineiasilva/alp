# Olá, na aula de hoje você irá realizar prática de programação, para isso, você irá desenvolver os seguintes programas (Sim todos eles):

## 1 - Índice de Massa Corporal (IMC)
### Veja como o IMC pode ser cobrado na sua prova de Matemática

### Crie um programa que utilizando o peso (em quilogramas) e a altura (em metros) de uma pessoa e calcule o seu IMC. O IMC é calculado pela fórmula acima. 

### Após o cálculo, exiba o valor do IMC no console.

_Veja também: https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal_

## Dicas:

É necessário se atentar à ordem dos operadores para realizar a operação corretamente
A operação de elevar um valor ao quadrado pode ser implementada por simplesmente por realizar a multiplicação do valor por ele mesmo
Veja a página da Wikipedia para entender melhor sobre o que cada valor calculado pelo IMC significa
2 - Nota necesária para Exame Final
O IFRO possui uma regra bastante complexa para definir se alguém ficará de Exame final. Se soubermos qual a Média da disciplina (MD) e quisermos descobrir a nota necessária no Exame Final (EF) é necessário utilizamos a fórmula:


### Onde:
MD = Média da disciplina
EF = Nota do Exame Final
Basicamente conforme a nota da média da disciplina (MD) for se aproximando de 60 a nota necessária no exame final fica menor, e o contrário também é verdade, sendo que para notas de média da disciplina (MD) baixas o suficiente poderia acontecer de ser impossível passar no exame final pois seria necessário mais que 100 pontos para passar.

Faça seu programa receber do usuário uma Média da disciplina (MD) e então exibir qual será a nota mínima necessária para passar no Exame Final.


## Dicas:
Primeiro analise com calma como funciona o cálculo do exame final, e faça na mão a conta antes de começar o código
Veja a planilha com os valores pré-calculados e compare com os resultados do seu código para saber se está certo.
3 - Cédulas
Considere que você vai ao caixa de banco e solicita um saque de 175 reais, considerando que todas as notas estão disponíveis e o menor número de notas é provido, será ejetado as notas de 100, 50, 20 e 5 reais, totalizando R$ 175,00 (Basicamente primeiro se elimina o máximo das notas maiores para então ir para notas menores)

### Faça um programa que receba um valor que será sacado e então exiba a decomposição deste valor em cédulas de 100, 50, 20, 10, 5, 2 e 1 reais (Sim, finja que existem notas de 1 real).

`Exemplo de execução:`

`Irá sacar: 576`
 - 5 nota(s) de R$ 100,00
 - 1 nota(s) de R$ 50,00
 - 1 nota(s) de R$ 20,00
 - 0 nota(s) de R$ 10,00
 - 1 nota(s) de R$ 5,00
 - 0 nota(s) de R$ 2,00
 - 1 nota(s) de R$ 1,00`
## Dicas:
- É possível resolver utilizando apenas operações sucessivas de divisão e resto da divisão, analise com calma o problema e como resolveria na mão antes de começar o código.
- Utilize Math.floor(a/b) para obter o resultado da divisão inteira entre números a e b, pois removerá as casas decimais após a divisão
- Comece com apenas as notas de 1 e 2 reais, e então após conseguir fazer a lógica funcionar adicione as outras opções
