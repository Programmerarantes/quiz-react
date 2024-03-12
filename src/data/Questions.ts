import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: 'Qual é a função do método .map() em JavaScript?',
        options: [
            "Ordenar os elementos de um array",
            "Criar um novo array com os resultados de uma função aplicada a cada elemento do array original",
            "Filtrar os elementos de um array com base em uma condição fornecida",
            "Adicionar novos elementos ao final de um array"
        ],
        answer: 1
    },
    {
        question: 'Qual método do JavaScript é comumente usado para fazer requisições HTTP assíncronas para consumir dados de uma API no front-end?',
        options: [
            ".fetch()",
            ".get()",
            ".request()",
            ".ajax()"
        ],
        answer: 0 
    }
]