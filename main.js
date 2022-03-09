'use strict'

// assíncrona: que não ocorre em tempo real, é atemporal. o emissor envia a mensagem, mas não necessariamente o receptor irá recebê-la imediatamente.
const pesquisarCep = async (cep) => {

    const url = `https://viacep.com.br/ws/${cep}/json/`
    // await: esperar o fetch buscar no servidor
    // Uma função que pedi URL para fazer requisições
    const response = await fetch(url)

    const data = await response.json()

    console.log(data)

}

pesquisarCep('06693600')