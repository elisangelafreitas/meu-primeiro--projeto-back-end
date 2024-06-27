const express = require ("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Elisangela Freitas',
        imagem: 'c:\Users\ElisangelaCristinada\OneDrive - BBNK SOLUCOES TECNOLOGICAS\Área de Trabalho\Pessoal\Elis\foto eli2.png',
        minibio: 'mulher, mãe e dev'
    },
    {   
        nome: 'Iana Chan' ,
        imagem: 'c:\Users\ElisangelaCristinada\OneDrive - BBNK SOLUCOES TECNOLOGICAS\Área de Trabalho\Pessoal\Elis\foto eli2.png',
        minibio: 'Fundadora'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'c:\Users\ElisangelaCristinada\OneDrive - BBNK SOLUCOES TECNOLOGICAS\Área de Trabalho\Pessoal\Elis\foto eli2.png',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
} 

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta,mostraPorta)