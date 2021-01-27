

function acaoBotao(params) {
 
   var numero, fatorial, 
   numero = prompt ("digite o numero para calcula o fatorial :")
   fatorial = 1
   
   for (var contador = 1; contador <= numero; contador++) {
       fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "o fatorial de "+ numero + " é: "+ fatorial
}    
