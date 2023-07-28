import { readFile, writeFile } from 'fs/promises'

// Lê o conteúdo do arquivo de modelo 'test.html' de forma assíncrona e o armazena na variável 'template'
let template = await readFile(new URL('./test.html', import.meta.url), 'utf-8')

// Objeto de dados com os valores a serem substituídos no modelo
const data = {
  title: 'My new file',
  body: 'I wrote this file to disk using node'
}

// Percorre todas as entradas do objeto de dados para substituir as chaves no modelo pelos valores correspondentes
for (const [key, val] of Object.entries(data)) {
  // Substitui todas as ocorrências da chave delimitada por {chave} pelo valor correspondente
  template = template.replace(`{${key}}`, val)
}

// Grava o conteúdo do modelo modificado no arquivo 'index.html'
await writeFile(new URL('./index.html', import.meta.url), template)
