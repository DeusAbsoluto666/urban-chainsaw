//funções

let x = 'nada'
    console.log(x)
x = 'oi'
    imprimeTexto(x)
    console.log(x)

//declara uma função
    //estrutura nomeDaFunção (parâmetros) {funcionalidade}
        function imprimeTexto(texto){
    console.log(texto)
        }
            imprimeTexto('sou aluno de front-end')

        function soma(){
    return 2+2
        }
            imprimeTexto(soma(100, 100))

    //console.log(soma())
        function somaDeNumeros(numero01, numero02){
    return numero01 + numero02
        }
            imprimeTexto(somaDeNumeros(10, 8))

        function divisaoDeNumeros(numero01, numero02){
    return numero01 / numero02
        }
            imprimeTexto(divisaoDeNumeros(10, 2))
            imprimeTexto(divisaoDeNumeros(2, 10))
        
    //ordem de parametros
        function apresentacao(nome, idade){
            return `meu nome é ${nome} e tenho ${idade} anos.`
        }
            imprimeTexto(apresentacao('Bane', 23))
            imprimeTexto(apresentacao(25, 'Bane')) //A ordem dos parâmetros é importante.

        function multiplicacao (n1 = 1, n2 = 1) // para que a função comece com um parâmetro pré-definido
        {
            return n1 * n2
        }
            imprimeTexto(multiplicacao(10, 10))
        
