/*funções
  Trecho de código independente, não depende de partes do código
  função possui uma entrada de dados (processamento)e saída de dados (retorno)
*/

//Declarando um função
//o nome precisa ser sem caracteres especiais, ou se for composto de dois nomes, ser camelCase
function gravidade() {
    console.log("A gravidade do planeta Terra é: ");
    console.log(9.81);
} 
//A função somente terá uso quando for chamada
gravidade();

//Outros exemplos de função
function somar(n1, n2) {
  let resultado = n1 + n2;
    console.log("Resultado: " + resultado); 
//As variáveis n1 e n2 estão inseridas somente no contexto da função 
}
somar(10, 15);
 
function nomeCompleto (nome, sobrenome) {
    //Template String
    console.log(`${nome} ${sobrenome}`);  
}
//O código da função pode ser utilizado diversas vezes
nomeCompleto("Silvio", "Luís");
nomeCompleto("Luciano", "do Valle");
nomeCompleto("Oliveira", "Andrade");


