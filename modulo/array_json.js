/******************************************************
 * Objetivo: Maniplar dados utilizando Array e JSON
 * Data: 05/03/2025
 * Autor: Allan
 * Versão: 1.0 
 ********************************************************/


/*
[]  -> representa uum objeto do tipo ARRAY
{}  -> representa um objeto do tipo JSON

    Array -> É um objeto na memória que permite trabalhar com vários valores em um unico objeto

    nome1 = 'José'
    nome2 = 'Maria'
    nome3 = 'João'

            INDICE     0        1        2
    let nome   =   ['José' , 'João' , 'Maria']


    JSON  -> É um objeto na memória que permite trabalhar com CHAVE E VALOR
    
    let nome = 'josé'
    let telefone = '235872093'
    let email    =  'josemail@email.com'

    let cliente = {"nome" : 'josé', "telefone":'235872093', "email": 'josemail@email.com' }
    */

    //Formas de criar um ARRAY
    const listaDeNomes        = ['José', 'Maria', 'João', 'andré', 'Allan']
    const listaDeClientes     = ['']
    const listaDeFornecedores = []

    /*const exibirDados = function(){
        //Exibe o objeto Array e seu conteúdo
        console.log(listaDeNomes)

        //Exibe o objeto Array em formato de tabela com seus indices
        console.table(listaDeNomes)

        //Exibe apenas o valor do respectivo indice do array
        console.log(listaDeNomes[2])

        //retorna o tipo de daods de um indice do array
        console.log(typeof(listaDeNomes[4]))


        console.log(`o nome do cliente é: ${listaDeNomes[0]}`)
        console.log(`o nome do cliente é: ${listaDeNomes[1]}`)
        console.log(`o nome do cliente é: ${listaDeNomes[2]}`)
        console.log(`o nome do cliente é: ${listaDeNomes[3]}`)
        console.log(`o nome do cliente é: ${listaDeNomes[4]}`)

        //Estruturas de repetição
        //while

        console.log('\n******** WHILE *********')
        let cont = 0

        while(cont < 5){
            console.log(`o nome do cliente é: ${listaDeNomes[cont]}`)
            cont ++
        }

        console.log('\n********* FOR **********')
        for(let contador = 0; contador < 5; contador++){
            console.log(`o nome do cliente é: ${listaDeNomes[contador]}`)
        }
        
        //Retorna o conteúdo de cada elemento através de um CALL BACK
        console.log('\n******* FOR EACH *******')
        listaDeNomes.forEach(function(cliente){
            console.log(`o nome do cliente é: ${cliente}`)

        })

        //Retorna o indice do elemento, e será preciso colocar dentro do objeto do array
        //Ex: listaDeNomes[item]
        //Praticamente igual ao for e WHILE
        console.log('\n******** FOR IN ********')
        for(item in listaDeNomes){
            console.log(`o nome do cliente é: ${listaDeNomes[item]}`)
        }
        
        //Percorre o array e retorna somente o conteúdo de cada indice, sendo muito parecido com ForEach
        console.log('\n******** FOR OF ********')
        for(cliente of listaDeNomes){
            console.log(`O nome do cliente é:${cliente}`)
        }

        console.log(listaDeNomes.length)

    }*/

    const manipularDados = function(){
        //Adicionando valores novos no array através dos indices
        listaDeClientes[0] = 'josé da silva'
        listaDeClientes[1] = 'Maria da Silva'
        listaDeClientes[2] = 'João da Silva'
        listaDeClientes[4] = 'Luan da Silva'

        console.log(listaDeClientes)

        //Permite adicionar novos valores no array sempre no final da lista
        listaDeFornecedores.push('Luizinho da Silva')
        listaDeFornecedores.push('Zezinho da Silva')
        listaDeFornecedores.push('Huguinho da Silva')
        listaDeFornecedores.push('Marinho da Silva', 'Amandinha da Silva', 'Carlos de Silva')
        
        console.log(listaDeFornecedores)
    }
    //exibirDados()
    manipularDados()