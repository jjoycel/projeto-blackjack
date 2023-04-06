/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Boas vindas ao jogo BlackJack! II')

if(confirm("Bem-vindo ao jogo de BlackJack! Deseja iniciar nova rodada?")){
    
    
   const cartaUsuario = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaUsuario3 = comprarCarta()

   const somaUsuario = cartaUsuario.valor+cartaUsuario2.valor
   
   const maisCartaUsuario = comprarCarta()
   const somaMaisCartaUsuario = cartaUsuario.valor+cartaUsuario2.valor+cartaUsuario3.valor


   const cartaComputador = comprarCarta()
   const cartaComputador2 = comprarCarta()
   const cartaComputador3 = comprarCarta()

   const somaComputador = cartaComputador.valor+cartaComputador2.valor

      console.log(`As cartas do computador são: ${cartaComputador.texto} e ${cartaComputador2.texto}, ${somaComputador} pontos.`)
      console.log(`Suas cartas são: ${cartaUsuario.texto} e ${cartaUsuario2.texto}, ${somaUsuario} pontos.`)

      if(confirm("Deseja comprar uma nova carta?")){
         console.log(cartaUsuario3.texto)
         console.log(`Você tem ${somaMaisCartaUsuario} pontos.`)
//          console.log(`Sua carta ${cartaUsuario3.texto}, ${cartaUsuario3.valor} pontos.`)
//       ole.log("Computador ganhou!")

//       } if(cartaUsuario.valor+cartaComputador.valor+cartaUsuario3.valor >21){
//          cons
//          }else if(cartaUsuario.valor+cartaUsuario2.valor+cartaUsuario3.valor === 21){
//             console.log("você ganhou!")

//             }   else if(confirm("Deseja comprar mais uma carta?")){

// } else {
//    console.log("fim de Jogo.")
 }
   

     
}