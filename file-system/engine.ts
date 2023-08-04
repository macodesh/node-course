import { readFile, writeFile } from 'fs/promises'

let template = await readFile(new URL('./test.html', import.meta.url), 'utf-8')

const data = {
  title: 'My new file',
  body: 'I wrote this file to disk using node'
}

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val)
}

await writeFile(new URL('./index.html', import.meta.url), template)
