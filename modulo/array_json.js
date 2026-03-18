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
const listaDeNomes = ['José', 'Maria filomena', 'Maria', 'Maria', 'João', 'andré', 'Allan', 'Alex', 'Carlos', 'Ana', 'Bruna', 'Jake',]
const listaDeClientes = ['']
const listaDeFornecedores = []

const verificarItem = function (nome) {
    return listaDeNomes.includes(nome)
}

const quantidadeItens = function (nome) {
    let cont = 0

    listaDeNomes.forEach(function (item) {
        if (String(item).toUpperCase() == String(nome).toUpperCase()) {
            cont += 1
        }
    })
    return cont
}

const exibirDados = function () {
    //Exibe o objeto Array e seu conteúdo
    console.log(listaDeNomes)

    //Exibe o objeto Array em formato de tabela com seus indices
    console.table(listaDeNomes)

    //Exibe apenas o valor do respectivo indice do array
    console.log(listaDeNomes[2])

    //retorna o tipo de daods de um indice do array
    console.log(typeof (listaDeNomes[4]))


    console.log(`o nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[4]}`)

    //Estruturas de repetição
    //while

    console.log('\n******** WHILE *********')
    let cont = 0

    while (cont < 5) {
        console.log(`o nome do cliente é: ${listaDeNomes[cont]}`)
        cont++
    }

    console.log('\n********* FOR **********')
    for (let contador = 0; contador < 5; contador++) {
        console.log(`o nome do cliente é: ${listaDeNomes[contador]}`)
    }

    //Retorna o conteúdo de cada elemento através de um CALL BACK
    console.log('\n******* FOR EACH *******')
    listaDeNomes.forEach(function (cliente) {
        console.log(`o nome do cliente é: ${cliente}`)

    })

    //Retorna o indice do elemento, e será preciso colocar dentro do objeto do array
    //Ex: listaDeNomes[item]
    //Praticamente igual ao for e WHILE
    console.log('\n******** FOR IN ********')
    for (item in listaDeNomes) {
        console.log(`o nome do cliente é: ${listaDeNomes[item]}`)
    }

    //Percorre o array e retorna somente o conteúdo de cada indice, sendo muito parecido com ForEach
    console.log('\n******** FOR OF ********')
    for (cliente of listaDeNomes) {
        console.log(`O nome do cliente é:${cliente}`)
    }

    console.log(listaDeNomes.length)

}

const manipularDados = function () {
    //Adicionando valores novos no array através dos indices
    listaDeClientes[0] = 'josé da silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'João da Silva'
    listaDeClientes[4] = 'Luan da Silva'

    console.log(listaDeClientes)

    //Permite adicionar novos valores no array sempre no FINAL da lista
    listaDeFornecedores.push('Luizinho da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Marinho da Silva', 'Amandinha da Silva', 'Carlos de Silva')


    // Permite adicionar elementos no array sempre no INICIO da lista
    listaDeFornecedores.unshift('Ana Carolina')
    console.table(listaDeFornecedores)

    //Permite remover elementos do FINAL da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover elementos do INICO da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    //Splice() -> Permite remover um elemento baseado no indice da lista (o item "2" neste caso)
    //splice(indice, quantidade de elementos)  
    listaDeFornecedores.splice(2, 1)//a partir do indice 2 apagar 1 item neste caso
    console.table(listaDeFornecedores)

    //Splice() -> Permite adcionar um novo elemento em um eterminado lugar do array (indice)
    //indice, 0-> significa que não será removido ninguém, Novo conteúdo  
    listaDeFornecedores.splice(2, 0, 'Carlos jonkit')
    console.table(listaDeFornecedores)

    listaDeFornecedores[1] = 'novo conteudo'
    console.table(listaDeFornecedores)
}

const removerItem = function (nome) {

    //Retorna o indice de um elemento fazendo a busca pelo valor
    //Se o indexOf não encontrar o conteudo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    if (indice != -1) {
        listaDeNomes.splice(indice, 1)
        return true
    } else {
        return false
    }
    console.log(indice)


    //listaDeNomes.splice(indice,1)

    //       for(indice in listaDeNomes){
    //          if(listaDeNomes[indice] == nome){
    //             listaDeNomes.splice(indice, 1)
    //         }
    //     }
    console.table(listaDeNomes)
}
const criandoDadosJSON = function () {
    let aluno = {
        "nome": 'Joseph',
        "ra": 123456,
        "telefone": "965456846",
        "email": "josephlandin@gmail.com"
    }
    //Exibindo o objeto JSON completo            
    console.log(aluno)
    console.table(aluno)

    //exibindo apenas um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.ra)

    //adiciona um novo atributo no JSON
    aluno.sexo = 'Masculino'
    console.log(aluno)

    //Remove um atibuto do JSON
    delete aluno.telefone
    console.log(aluno)




}

const cadastroDeProdutos = function () {
    let cores = [
        { "id": 1, "cor": "Branco" },//indice 0
        { "id": 2, "cor": "preto" },//indice 1
        { "id": 3, "cor": "Azul" },//indice 2
        { "id": 4, "cor": "rosa" },//indice 3
        { "id": 5, "cor": "cinza" } //indice 4
    ]

    let marcas = [
        { "id": 1, "marca": "LG", "telefone": "19841LG1565", "email": "elege@gmail.com" },
        { "id": 2, "marca": "Dell", "telefone": "198DELL1565", "email": "dell@gmail.com" },
        { "id": 3, "marca": "Lenovo", "telefone": "198LEN0V031565", "email": "lenovo@gmail.com" },
        { "id": 4, "marca": "Apple", "telefone": "1984PPL3565", "email": "apple@gmail.com" },
        { "id": 5, "marca": "Razer", "telefone": "198R4Z3R565", "email": "razer@gmail.com" },
        { "id": 6, "marca": "Logitech", "telefone": "14L0G1T3CH65", "email": "logitech@gmail.com" },
        { "id": 7, "marca": "Multilaser", "telefone": "1MUL7L453R65", "email": "multilaser@gmail.com" },
    ]

    let produtos = [
        {
            "id": 1,
            "nome": "monitor",
            "descricao": "27 polegadas",
            "marca": [marcas[1].marca],
            "qtde": 20,
            "cor": [
                cores[4],
                cores[1]
            ],
            "valor": 800.50
        },

        {
            "id": 2,
            "nome": "teclado",
            "descricao": "teclado mecanico RGB",
            "marca": [
                marcas[5].marca
            ],
            "qtde": 200,
            "cor": cores,
            "valor": 150
        },


        {
            "id": 3,
            "nome": "mouse",
            "descricao": "sem fio",
            "marca": [
                marcas[1].marca,
                marcas[4].marca,
                marcas[5].marca
            ],
            "qtde": 200,
            "cor": cores,
            "valor": 150
        }


    ]




    // console.log(produtos)

    // //percorre o objeto de produto para trazer os dados de cada produto
    // produtos.forEach(function (itemProduto) {
    //     console.log(`produto: ${itemProduto.nome}`)

    //     //percorre o objeto de marca dentro de cada produto para trazer as marcas
    //       itemProduto.marca.forEach(function(itemMarca){
    //          console.log(`marca: ${itemMarca}`)
    //       })

    //     //percorre o objeto de cor dentro de cada produto para trazer as cores
    //     itemProduto.cor.forEach(function(itemCor){
    //         console.log(`cor: ${itemCor.cor}`)
    //     })

    // })

    //Pesquisando um produto pelo NOME
    console.log(`************PESQUISANDO PRODUTOS PELO NOME***************`)
    let nome = `mouse`
    let status = false

    produtos.forEach(function (itemProduto) {
        if (String(itemProduto.nome).toUpperCase() == String(nome).toUpperCase()) {
            console.log(itemProduto)
            status = true
        }
        
    })


    //Pesquisar um produto pela cor
    console.log(`************PESQUISANDO PRODUTOS PELA COR***************`)
    let cor = 'Azul'
    

    produtos.forEach(function (itemProduto) {
        itemProduto.cor.forEach(function (itemCor) {
            if (String(itemCor.cor).toUpperCase() == String(cor).toUpperCase()) {
                console.log(itemProduto)
                status = true
            }
        })

    })
    if(!status)
        console.log(`Item pesquisado não foi encontrado`)


    //console.log(cores[2].cor)



    // produtos[0].cor.forEach(function(nomeCor){
    //     console.log(produtos)
    // })

}



//exibirDados()
//manipularDados()
// let resposta = removerItem('Marasdia')
// if (resposta)
//     console.log('item removido com sucesso')
// else
// console.log('não foram encontrados itens para ser removido')
// removerItem('Bruna')

// console.log(verificarItem('alla'))
// console.log(quantidadeItens('maria'))
// criandoDadosJSON()
cadastroDeProdutos()