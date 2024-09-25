    //alguns erros
    let numero = 12 //JavaScript é sensível ao CapsLock
    // console.log(numero) //erro de declaração, variável não declarada 

    // console.log(numero  //erro de sintaxe, aqui, falta de parenteses

    //tratamento de erros
        //console.error("There is something wrong with the code.") //Declara um erro para outro usuário

    const idadeMinima = 18
    let idadeCliente = 17

    if(idadeCliente >= idadeMinima){
        console.log('Pócomprapô')
    } else{
        console.log('Nananinanão')
    }

        //valor ternário
        idadeCliente = 20
            //modo ternário,  _______ <= _______ ? -------- : -------
            //modo ternário,  _______ == _______ ? -------- : -------
            console.log(idadeCliente >= idadeMinima ? 'Pócomprapô' : 'Nananinanão')
                //uso com cautela
//template
    const nome = Mygano
    const idade = 19
    const cidadeNascimento = 'Baldur'

    const apresentação = "Meu nome é " + nome + " tenho " + idade + " anos e nasci em " + cidadeNascimento

        //templateString
            const apresentação2 = `Sou o ${nome} e tenho ${idade} anos de idade. Nasci em ${cidadeNascimento}`
        
