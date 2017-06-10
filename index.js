// /*# λAula01.(Como solucionar um problema)

// Provavelmente esse curso seja bem diferente do que você está acostumado, <br> 
// pois eu irei ensinar a você pensar de uma forma diferente para solucionar seus problemas.

// <br> 

// Quem sabe você ache chato no início mas bote fé que **eu garanto que você irá aprender!**<br>
// Por isso você vai ouvir **muitoooooo** uma palavra  durante esse curso: **inferir**.

// Creio que sua própria definição diz tudo:

// <br> 

// > "Deduzir; concluir por inferência ou dedução, partindo de indícios, fatos ou raciocínios"

// *fonte: [https://www.dicio.com.br/inferido/](https://www.dicio.com.br/inferido/)*

// <br> 

// ![](https://s-media-cache-ak0.pinimg.com/236x/e7/f0/c4/e7f0c4cda21af9a6c5562eec0811eead.jpg)

// <br>
// <br>

// Após o devido aviso venho por meio desta apresentar-lhe <br> 
// a Programação Funcional caso você **ainda** não tenha <br>  
// ouvido falar, o que acho **muito** difícil.

// <br>

// > Em ciência da computação, programação funcional é um <br>
// paradigma de programação que trata a computação como uma <br>
// avaliação de funções matemáticas e que evita estados ou <br>
// dados mutáveis. Ela enfatiza a aplicação de funções, em <br>
// contraste da programação imperativa, que enfatiza mudanças <br>
// no estado do programa.

// <br>

// > A definição de uma função descreve como a função<br> 
// será avaliada em termos de outras funções. 

// *fonte: [(https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_funcional](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_funcional)*

// <br>
// <br>

// Por exemplo:

// ```

// f(x) = x^2 + 2

// ```

// Ela é definida em termos de funções de exponenciação e adição.<br> 
// Do mesmo modo, a linguagem deve oferecer funções básicas que não requerem definições adicionais.

// ##### λLembrete 1

// Lembre dessa parte muito bem:

// > **"...a linguagem deve oferecer funções básicas que não requerem definições adicionais..."**

// <br>

// Logo mais você irá entender o porquê.


// ![](http://media2.giphy.com/media/TY7dLV4kDmZSU/giphy.gif)

// <br>
// <br>

// <br>
// <br>

// <hr>

// ![](https://i.ytimg.com/vi/21fYY_RqSmI/hqdefault.jpg)

// <br>
// <br>
// <hr>

// ## λProblema.(validar se um número é primo)

// <br>
// <br>

// > Fácil! Basta aplciar essa fórmula na programação, não tem segredo.

// **Você deve estar pensando:**

// <br>

// > \- **Lá vem o Suissa com esse papo de Matemática, pqp!**

// <br>

// ![](http://geradormemes.com/media/created/xecy3i.jpg)

// <br>
// <br>


// > Vou mostrar-lhe como resolver esse problema sem usar nada pronto, 
// > apenas nosso cérebro!

// > Eu acredito, IMHO, que para você ser um bom programador precisa ter 
// > no mínimo 2 coisas essênciais: 

// > - **Inglês** // SIM! É obrigatório! Ou você programa em Português?
// > - **Lógica** // Tanto a de Programação como Matemática

// <br><br>

// > **Duvido você encontrar algum programador FODA que não tenha esses 2.**

// <br><br>

// Vou usar esse problema **SUPER SIMPLES** para demonstrar uma forma
// <br> de como resolver problemas baseando-se em seus conceitos e 
// <br> isso serve para qualquer área da sua vida.

// <br>

// **O nosso problema é tão simples que só precisamos testar se os**<br> 
// **números 10.002 e 10.003 são primos.**

// <br>

// > Eu **SEMPRE** inicio meu pensamento para solucionar algo pelos conceitos envolvidos.

// <br>

// Exemplo:

// <br>

// > **O que é um número primo?**

// <br>

// > "...um número natural primo tem unicamente dois divisores naturais 
// <br>distintos: o número um e ele mesmo"

// fonte: [https://pt.wikipedia.org/wiki/N%C3%BAmero_primo](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)

// <br>

// Com isso podemos **inferir** que:

// > Ele só é divisível por ele mesmo e por 1.

// <br>

// Entao o algoritmo para sabermos isso eh BEM simples:

// ```

// Pego o número e testo se a divisao dele por TODOS seus
// antecessores, menos o 1, se o resto for 0 em algum momento
// é pq esse número tem divisor entre ele e o 1,

// Logo não é primo!

// **Se não achar nenhum é primo!**

// ```
// <br>

// Esse é um padrão que **SEMPRE** uso nas minhas funções de teste/validação.
// Quando vamos testar <br>
// se alguma coisa é algo esse teste só **deve** retornar `true` ou `false`.


// ##### λLembrete 2

// Por isso eu deixo todos os testes que **invalidem** o que queremos testar
// <br> no topo para que a última coisa que esse teste faça é retornar `true`
// <br> porque se ele passou pela bateria de testes nós garantimos que aquele
// <br> valor é realmente o que queremos.

// <br>

// Vejamos isso em JS imperativo:

// ```js

// function isPrime(num) { 
//   for (let i = num - 1; i > 1; i--) {
//     if(num % i === 0) {
//       console.log('\n')
//       console.log(num + ' é divisível por: ', i)
//       return false;
//     }
//   }
//   return true;
// }


// ```

// <br>

// Logo isso nos remete a outros dois conceitos numéricos, 
// <br>**um número pode ser par ou ímpar**, correto???

// Para um número ser par ele precisa ser o que?
// <br><br>

// > \- **Ser divisível por 2!**

// <br><br>

// Entao qualquer número par não pode...


// <br>
// <br>
// <br>

// > \- **não pode ser primo!**

// ![](http://cs319426.vk.me/v319426206/9e01/-Vmg1dwhz5c.jpg)

// <br>
// <br>
// <br>

// > TE ENGANEI! 
// > Nem todos.

// <br>

// Pense comigo: 

// > O 2 é divisível por ele e por 1. 
// > Logo **ele tb é primo!**


// <br>

// Levando isso em consideração já temos nossa primeira regra de validação
// <br> e não apenas de validação, me acompanhe.

// Se formormos testar dois números para isso:

// - 10.002
// - 10.003

// > **Para o 10.003 iremos fazer 10.000 operações!!!** 

// Lembrando que na verdade cada operação são 2:

// - a divisão/mod
// - a comparação

// Fora a decrementação.

// Adicionando essa regra no código imperativo:


// ```js

// function isPrime(num) { 
//   // se for par E não for 2
//   if ((num % 2) === 0 && num !== 2)
//   for (let i = num - 1; i >= 2; i--) {
//     if(num % i === 0) {
//       console.log('\n')
//       console.log(num + ' é divisível por: ', i)
//       return false;
//     }
//   }
//   return true;
// }


// ```

// <br>
// <br>

// **Agora quero apelar para o Linus Torvalds que existe dentro de você e te perguntar:**

// <br>

// > O que podemos fazer para otimizar nossa função???

// <br>

// Para clarear sua mente você pode imaginar todos esses números como um [CONJUNTO](https://pt.wikipedia.org/wiki/Conjunto)... 

// <br>

// Tááááááá não começarei com a Matemática (sua linda) agora, então pense 
// <br>que é um Array de 10.000 números, do 10.002 até o 2.

// <br>

// > Com certeza podemos diminuir esse *Array* não???

// <br>

// Podemos iniciar pela maior divisão inteira de algo.

// <br>
// <br>

// ![https://i.imgflip.com/hs5ac.jpg](https://i.imgflip.com/hs5ac.jpg)

// <br>
// <br>

// > \- **WTF tio Suissa?!!**

// <br>
// <br>

// > Se você  pegar um *Array* de dez elementos e quer separar ele em s**partes iguais que sejam as maiores possíveis**. 
// > O que fará???

// <br><br>

// **Logicamente dividir ele por 2. Correto?**

// <br><br>

// Perceba comigo que se você dividir **ALGO** pelo menor inteiro possível, de se dividir, o 2.<br>
// Então se você dividiu **ALGO** em duas partes iguais essas são necessariamente as maiores<br> possíveis. Bem lógico, né?

// <br>

// > Por que você acha que cheguei nesse ponto???

// <br><br>

// Vamos lá, me acompanhe:

// ```

// 10 / 9 = isInteger? false
// 10 / 8 = isInteger? false
// 10 / 7 = isInteger? false
// 10 / 6 = isInteger? false
// 10 / 5 = isInteger? true

// ```

// <br>

// > Agora ficou mais fácil de perceber???

// <br>

// Caso você ainda não tenha **inferido**, vou lhe ajudar. 

// <br>

// Podemos afirmar que:

// <br>

// > Um número **NUNCA** TEM UM DIVISOR INTEIRO QUE SEJA MAIOR QUE SUA METADE.

// *ps: nem precisamos pesquisar isso para saber que está certo, né?*

// <br>

// Adicionando essa regra no código imperativo:

// ```js

// function isPrime(num) { 
//   // se for par E não for 2
//   if ((num % 2) === 0 && num !== 2)
//     return false;

//   // Começaremos as divisões a partir da sua metade
//   for (var c = Math.floor(num / 2); c >= 1; c--) {
//     if(num % c === 0) {
//       console.log('\n')
//       console.log(num + ' é divisível por: ', i)
//       return false;
//     }
//   }
//   return true;
// }

// ```

// <br>

// **Porém, entretanto, contudo, todavia, ainda devemos adicionar mais**<br> 
// **uma validação em cima da nossa lógica.**

// <br>

// Para isso precisamos pensar em qual **operação matemática** pode nos fornecer<br> 
// uma parte inteira desse todo, pois se tivermos **uma parte inteira** isso<br> 
// significa que esse todo é divisível.

// Se usarmos o [conceito da divisibilidade](http://www.dicionarioinformal.com.br/divisibilidade/), ou seja, usar a operação da divisão,<br> 
// com isso podemos **inferir** que o próximo passo, subindo um nível de complexidade,<br> 
// **será...???**

// <br>

// Antes de lhe responder vou te lembrar de algo.


// <br>

// > Qual é a operação que está um nível acima da multiplicação?


// <br>

// > **É a potenciação**.


// <br>
// <br>

// Mais fácil eu demonstrar ela:

// ```

// // 3 elevado ao quadrado
// 9 = 3 * 3
// 9 = 3 ^ 2 

// // 3 elevado ao cubo
// 27 = 3 * 3 * 3
// 27 = 3 ^ 3 

// ```


// <br>

// Ou seja, a potenciação é uma sequência de multiplicações. 

// Sabendo que a divisão é a operação inversa da multiplicação, podemos então **inferir**<br>
// que **a operação que estamos buscando é...?**

// <br>
// <br>


// ![](https://media0.giphy.com/media/l41YvrjGiI4cCJZPW/giphy.gif)

// <br>
// <br>
// <br>
// <br>

// > **EXATAMENTE!** A [radiciação](https://pt.wikipedia.org/wiki/Radicia%C3%A7%C3%A3o) também conhecida como raíz.

// <br>
// <br>

// Vamos analisar como ela funciona.

// ```
// // raíz quadrada de 9
// √9 = 3 
// 9 = 3 * 3
// 9 / 3 = 3 

// // raíz cúbica de 27
// 3√27 = 3 
// 27 = 3 * 3 * 3
// 27 / 3 = 9

// ```

// <br>

// > **Agora ficou fácil não?**

// <br>

// Se um número tem uma **raíz inteira** isso significa que ele é <br>
// divisível por outro número menor do que a metade dele.

// <br>

// Podemos então adicionar essa regra no nosso código:


// ```js

// function isPrime(num) { 
//   // se for par E não for 2
//   if ((num % 2) === 0 && num !== 2)
//     return false;

//   // Se um número tem uma **raíz inteira** 
//   // isso significa que ele é divisível
//   if (Number.isInteger(Math.sqrt(num)))
//     return false;

//   // Começaremos as divisões a partir da sua metade
//   for (var i = Math.floor(num / 2); i >= 2; i--) {
//     if(num % i === 0) {
//       console.log('\n')
//       console.log(num + ' é divisível por: ', i)
//       return false;
//     }
//   }
//   return true;
// }

// ```


// ![](http://i.imgur.com/sb3ATGA.jpg)

// <br>
// <br>

// <hr>

// ### λRefatorando.(solução) 2


// Vamos iniciar com nosso código anterior para que possamos analisar quais partes <br>
// podem ser separadas, pois cada uma validação é um teste diferente, <br>
// logo tem responsabilidades diferentes.

// Já iremos entender com o código:

// ```js

// function isPrime(num) { 
//   // se for par E não for 2
//   if ((num % 2) === 0 && num !== 2)
//     return false;

//   // Se um número tem uma **raíz inteira** 
//   // isso significa que ele é divisível
//   if (Number.isInteger(Math.sqrt(num)))
//     return false;

//   // Começaremos as divisões a partir da sua metade
//   for (var i = Math.floor(num / 2); i >= 2; i--) {
//     if(num % i === 0) {
//       console.log('\n')
//       console.log(num + ' é divisível por: ', i)
//       return false;
//     }
//   }
//   return true;
// }

// ```

// <br>
// <br>

// Nosso próximo passo é retirar as funções que compõe o comportamento da <br> 
// função principal `isPrime`. Pois quando escrevemos uma função<br> 
// **ela deve fazer uma, e apenas uma coisa**. 

// <br>

//  ```js
// // se for par E não for 2
// const isEvenAndNot2 = ( num ) => 
//   ( ( num % 2 ) === 0 && num !== 2 )
//     ? true
//     : false

// // Se um número tem uma **raíz inteira** 
// // isso significa que ele é divisível
// const hasIntegerSquareRoot = ( num ) => 
//   ( Number.isInteger( Math.sqrt( num ) ) )
//     ? true
//     : false

// const isPrime = ( num) => { 

//   if ( isEvenAndNot2( num ) )
//     return false

//   if ( hasIntegerSquareRoot(num) )
//     return false
  
//   let i = Math.floor( num / 2 )
//   // Começaremos as divisões a partir da sua metade
//   for ( i; i >= 2; i-- ) {
//     if( num % i === 0 ) {
//       return false
//     }
//   }
//   return true
// }

// console.log('isPrime 2', isPrime(2))
// console.log('isPrime 3', isPrime(3))
// console.log('isPrime 4', isPrime(4))

// console.log('isPrime 100002', isPrime(100002))
// console.log('isPrime 100003', isPrime(100003))
// console.log('isPrime 100007', isPrime(100007))

// /**

// » node isPrime01.js 
// isPrime 2 true
// isPrime 3 true
// isPrime 4 false
// isPrime 100002 false
// isPrime 100003 true
// isPrime 100007 false


// */
// ```

// <br>

// Se os dois testes, `isEvenAndNot2` e `hasIntegerSquareRoot`, retornam `false` <br>
// podemos testa-los de uma só vez:

// ```js
// if ( isEvenAndNot2( num ) || hasIntegerSquareRoot( num ) )
//   return false

// ```
// <br>
// <br>

// ### λTécnica.(semantica)

// Você deve ter percebido que não usei o **`is`** na função `hasIntegerSquareRoot`<br>
// como é usado na `isEvenAndNot2` e na função nativa [isInteger](http://mdn.io/isInteger),<br> 
// pois sigo um conceito que tento aplicar o máximo possível nos meus códigos, que é a...

// ![](http://i.imgur.com/oXyfZOa.png)

// <br>
// <br>

// > "...**o componente do sentido das palavras**..."

// <br>
// <br>

// Eu acredito que para **Programação Funcional** é mais importante ainda pois ela **é declarativa**.

// <br>
// <br>

// > "... um programa é declarativo se descreve o que ele faz e não como seus procedimentos funcionam."

// *fonte: [https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_declarativa](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_declarativa)*

// <br><br>

// Logo para que você descreva algo necessariamente precisa da semântica,<br> 
// pois é ela que dará  sentido aos nomes que você escolhe para suas constantes e funções.

// Como estamos aprendendo baseando-se nos conceitos básicos precisamos entender<br> 
// essa diferença entre esses dois nomes utilizando, obviamente, seus conceitos.

// <br><br>

// > "Ação de ter; ato de receber ou de passar a possuir alguma coisa..."

// *fonte: [https://www.dicio.com.br/tem/](https://www.dicio.com.br/tem/)*

// <br>

// > "É vem do verbo ser. O mesmo que: acontece, está, existe, subsiste, sucede."

// *fonte: [https://www.dicio.com.br/e-4/](https://www.dicio.com.br/e-4/)*

// <br><br>

// > Agora ficou fácil de **inferir** o porquê dos nomes `hasIntegerSquareRoot` e `isEvenAndNot2`?

// <br>

// A tradução de `hasIntegerSquareRoot` é "TEM raíz quadrada inteira", logo precisamos de<br>
// *algo* para que ele possua a raíz quadrada inteira, por isso não utilizo o `is/é`.

// Entretanto na função `isEvenAndNot2`, "É par e não é 2", realmente estamos testando<br> 
// o que É esse *algo*.

// <br><br>

// > Será que ficou clara essa parte sobre a semântica dos nomes das funções?

// <br>

// <hr>

// ![](http://geradormemes.com/media/created/568115.jpg)

// <br><br><br>

// ### λRefatoração.λContinuaçao.(ainda tem aula pacas) 

// <br>
// <br>

// > Lembra dos dois testes que nomeamos semanticamente???

// <br>
// <br>

// No nosso caso essas duas funções retornam `false` então devemos agrupa-las:

// ```js

// if ( isEvenAndNotTwo( num ) || 
//     hasIntegerSquareRoot( num ) )
//   return false

// ```

// <br>

// Continuando nessas funções, porém agora nas suas definições lá no início do código.

// ```js

// const isEvenAndNotTwo = ( num ) => 
//   ( ( num % 2 ) === 0 && num !== 2 )
//     ? true
//     : false

// //hasIntegerSquareRoot

// ```

// <br>

// Podemos retirar o `true` e `false` pois o próprio teste lógico retornará isso.

// ```js

// const isEvenAndNotTwo = ( num ) => 
//   ( ( num % 2 ) === 0 && num !== 2 )

// const hasIntegerSquareRoot = ( num ) => 
//   ( Number.isInteger( Math.sqrt( num ) ) )

// ```

// <br>

// Depois disso nos sobrou separar o teste da divisão o qual precisamos tomar cuidado<br>
// para não fazer merda, pois precisamos ajeitar o contador do `for` que está assim:

// ```js

// let i = Math.floor( num / 2 )
// // Começaremos as divisões a partir da sua metade
// for ( i; i >= 2; i-- ) {

// ```

// <br>
// <br>

// > Qual o problema disso??

// <br>
// <br>

// Se você ainda não **inferiu** o problema eu vou lhe contar sobre outro conceito de PF, chamado<br>
// de **[efeitos colaterais](https://en.wikipedia.org/wiki/Side_effect_(computer_science))**

// <br>
// <br>

// Esse conceito é simples porém bem importante para sua sanidade e do seu projeto.
// Vejamos o que a Wikipedia nos diz:

// > In computer science, a function or expression is said to have<br> 
// a side effect if it modifies some state outside its scope or has <br>
// an observable interaction with its calling functions or the outside<br> 
// world besides returning a value. For example, a particular function<br> 
// might modify a global variable or static variable, modify one of its<br> 
// arguments, raise an exception, write data to a display or file,<br> 
// read data, or call other side-effecting functions. 

// <br>
// <br>

// Quero que você se foque nessa parte:

// > "...**have a side effect if it modifies some state outside its scope**..."

// <br>
// <br>

// Pois agora irei lhe mostrar onde esta esse famigerado<br> 
// "efeito colateral" no nosso código.

// ```js

// let i = Math.floor( num / 2 )
// for ( i; i >= 2; i-- ) {
//  // ... 
// }

// ```

// Nosso problema aí é que o `i` existe apenas fora do contexto do `for`, porém<br> 
// seu valor é modificado internamente no `for`, ou seja, modifica algo fora do<br>  
// seu escopo, porém para corrigir isso é bem simples, basta colocarmos o `i` dentro do `for`.

// ![](https://media3.giphy.com/media/tMPSeKEplOfK0/giphy.gif)

// ```js

// const hasDivisor = ( num ) => {
//   for ( let i = Math.floor( num / 2 ); i >= 2; i-- ) {
//     if( ( num % i ) === 0 ) 
//       return true
//   }
//   return false
// }

// const isPrime = ( num ) => { 

//   if ( isEvenAndNotTwo( num ) || 
//       hasIntegerSquareRoot( num ) )
//     return false

//   // Vamos separar o teste da divisao
//   if ( hasDivisor( num ) )
//     return false
    
//   return true
// }

// ```

// <br>

// Obviamente você ja sabe o que devemos fazer na sequência, né?

// <br>

// > \- **Claro pow!** Agrupar `hasDivisor` no `if` acima, desse jeito:

// <br>

// ```js

// const isPrime = ( num ) => { 

//   if ( isEvenAndNotTwo( num ) || 
//       hasIntegerSquareRoot( num ) ||
//       hasDivisor( num ) )
//     return false
    
//   return true
// }

// ```

// <br>

// > Examente!!! Entretanto ainda podemos refatorar para isso:

// ```js

// const isPrime = ( num ) => { 
//   // Se nós temos 2 retornos podemos
//   // retornar com um IF ternário
//   return ( isEvenAndNotTwo( num ) || 
//           hasIntegerSquareRoot( num ) ||
//           hasDivisor( num ) )
//             ? false
//             : true
// }

// ```

// <br>
// <br>

// **Deixei o melhor para o final**

// <br>
// <br>

// ```js

// const isPrime = ( num ) => 
//   ( isEvenAndNotTwo( num ) || 
//     hasIntegerSquareRoot( num ) ||
//     hasDivisor( num ) )
//       ? false
//       : true

// ```

// <br>


// ### λTécnica.(arrow function)

// Como você percebeu troquei todas `function` por *[arrow functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)* que por hora<br> 
// ainda não entrarei em maiores detalhes pois você só verá ela daqui para frente.

// No código acima transformamos ela em uma função que eu gosto de <br>
// chamar de: *one line function*.

// Pois nós só conseguimos retirar o `return` de `isPrime` porque ela<br>
// **"possui apenas uma linha que ja esta sendo retornada"**


// [![](http://i.imgur.com/VZxtCya.png)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


// <br>
// <br>

// **Entrarei em maiores detalhes sobre isso na próxima aula.**


// <br>
// <br>

// ### λTécnica.(if ternário)

// <br>

// > Percebeu que retornamos o resultado do teste de um *if* ternário?

// <br>

// Só conseguimos retornar diretamente na *arrow function* pois esse *if* possui<br> 
// o `return` implícito, como visto abaixo, não existe nenhum `return`!

// ```js

// const isPrime = ( num ) => 
//   ( isEvenAndNotTwo( num ) || 
//     hasIntegerSquareRoot( num ) ||
//     hasDivisor( num ) )
//       ? false
//       : true

// ```

// ### λTécnica.(função de validação)

// Como vimos no código anterior se eu invertesse sua lógica poderia utilizar assim:

// ```js

// const isPrime = ( num ) => 
//   ( !isEvenAndNotTwo( num ) && 
//     !hasIntegerSquareRoot( num ) &&
//     !hasDivisor( num ) )

// ```

// Porém, IMHO, não fica tao claro o que ela faz em comparaçao a outra que tem o<br>
// retorno de `false` e `true` denotando que ela possui uma "bateria de testes"<br>
// a serem feitos para garantir o valor final e somente depois de passar por<br> 
// todos os testes que ele ira retornar `true`, com isso confirmando que é<br>
// o valor que desejamos.

// Você esta livre para utilizar qualquer uma delas, mas se utilizar essa última você<br>
// tera que explicar o porquê ela fez mais sentido para o seu contexto.

// > Nesse curso você tera total liberdade de *codar* diferente do definido, só tera<br>
// > que explicar o porquê e essa explicaçao **DEVE** ser melhor que a minha.

// <br> 

// ## λConclusão

// Antes de finalizarmos essa aula quero lhe perguntar algo:

// <br>

// > Você percebeu que **todas** nossas funções não possuem efeito colateral **e**<br>
// > além disso sempre produz o mesmo resultado quando dados os mesmos parâmetros.

// O conceito de sempre produzir o mesmo resultadocom os mesmos parâmetros<br> 
// chama-se: **Transparência Referencial**


// > "Uma função é considerada pura se possui transparência referencial e<br> 
// > é livre de efeitos colaterais."


// Porém nós não vimos nada sobre **transparência referencial** ainda e fiz isso<br>
// exatamente para passar como exercício.

// <br> 
// <hr>

// ### λExercício

// Nessa aula teremos dois tipos de exercícios.

// Na Pesquisa você deverá dissertar sobre os assuntos pedidos e o que entendeu sobre.

// <br> 

// #### λPesquisa

// Disserte sobre o conceito de **transparência referencial**, de como é utilizada<br>  
// e como ela agrega com outros conceitos que você com certeza irá encontrar quando pesquisar.

// <br>

// ![](http://www.cprogramming.com/c++11/lambda.png)

// <br>
// <br>

// > Você sabe o que é significa essa letra grega acima?

// <br>

// Se você já sabe, entao terá menos trabalho para fazer esse exercício<br>
// e não esqueça de colocar exemplos que defendam sua ideia.

// <br>

// #### λRefatoração

// Use um código seu ou procure na Internet podendo ser **QUALQUER**<br> 
// cálculo que possua um *loop* pelo menos. 

// Coloque ele como enunciado do exercício e logo após o seu código refatorado.
// <br>
// **POR FAVOR SIGA ESSE PADRÃO**

// <hr>


// <br><br>


// # Aula 01 - Exercício

// ## Código original:

// ```js

// // code zuado aqui

// ```

// ## Código refatorado:

// ```js

// // code da hora aqui

// ```

// ## λAviso.(MUITO IMPORTANTE)

// ### Fiz essa aula com um exemplo matemático para que você abstraia todos esses 
// ## conceitos que passei e consiga implementa-los futuramente

// ### O curso é sobre refatoraçao entao daqui para frente só veremos
// ### situações e códigos reais e por favor mandem os seus
// ### códigos na SUA ISSUE para que eu possa analisar.*/
