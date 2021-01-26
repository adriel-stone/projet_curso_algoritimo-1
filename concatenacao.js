/*
Var
// Seção de Declarações das variáveis 
  nome: caractere
  numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  escreval("digite o nome :")
   leia (nome)
  escreval ("digite o nuemro :")
   leia (numero)
   
  escreval (nome, " : ", numero, 21, 22, 23)

Fimalgoritmo
*/

var  nome,numero 

nome = prompt("digite o seu nome: ")
numero = prompt("digite o numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero