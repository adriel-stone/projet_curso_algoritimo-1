/*

Var numero, fatorial, contador : inteiro
 
escreval("digite o numero para calcula o fatorial :")
leia (numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
fimpara
   
escreval("o fatorial de ", numero, " é: ", fatorial)

*/

function acaoBotao(params) {
 
   var numero, fatorial, 
   numero = prompt ("digite o numero para calcula o fatorial :")
   fatorial = 1
   
   for (var contador = 1; contador <= numero; contador++) {
       fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "o fatorial de "+ numero + " é: "+ fatorial
}    
