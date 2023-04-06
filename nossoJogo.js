// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */
//     
console.log('Boas vindas ao jogo BlackJack!')

if(confirm("Deseja iniciar nova rodada?")){


    const cartaUsuario = comprarCarta()
    const cartaUsuario2 = comprarCarta()
    const somaUsuario = cartaUsuario.valor+cartaUsuario2.valor

        console.log(`Suas cartas: ${cartaUsuario.texto} e ${cartaUsuario2.texto}, totalizando ${somaUsuario} pontos.`)

    const cartaComputador = comprarCarta()
    const cartaComputador2 = comprarCarta()
    const somaComputador = cartaComputador.valor+cartaComputador2.valor

        console.log(`Cartas do computador: ${cartaComputador.texto} e ${cartaComputador2.texto}, totalizando ${somaComputador} pontos.`)
        
        
        if(somaUsuario>somaComputador){
            console.log('Você venceu!!')

        } else if(somaComputador>somaUsuario) {
            console.log('Computador venceu!!')
        } else {
            console.log ("Empate!!")
        }
} else {
    console.log ("Fim de Jogo")
}


