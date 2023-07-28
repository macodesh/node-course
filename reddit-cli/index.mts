#! /usr/bin/env node
// O shebang acima habilita a execução de scripts no terminal
import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

const { argv } = yargs(process.argv)

// Definindo a interface de dados para os posts do Reddit
type Data = {
  data: {
    children: [
      {
        data: {
          title: string,
          permalink: string
        }
      }
    ]
  }
}

// Realiza uma requisição para obter os posts da comunidade "typescript" no Reddit
const res = await fetch('https://www.reddit.com/r/typescript.json')
const data = await res.json() as Data
const children = data.data.children

// Seleciona aleatoriamente um post dos obtidos
const randomPost = children[Math.floor(Math.random() * children.length)]
const link = `https://www.reddit.com${randomPost.data.permalink}`

// Verifica se o argumento "--print" foi passado ao executar o script
if ((argv as any).print || (argv as any).p) {
  // Se o argumento "--print" foi passado, imprime o título do post e o link
  console.log(`
    title: ${randomPost.data.title}
    link: ${link}
  `)
} else {
  // Caso contrário, abre o link do post no navegador padrão
  open(link)
}

// Esse arquivo precisa ser transpilado para poder ser executado.
