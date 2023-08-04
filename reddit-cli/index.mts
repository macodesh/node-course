#! /usr/bin/env node
import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

const { argv } = yargs(process.argv)

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

const res = await fetch('https://www.reddit.com/r/typescript.json')
const data = await res.json() as Data
const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]
const link = `https://www.reddit.com${randomPost.data.permalink}`

if ((argv as any).print || (argv as any).p) {
  console.log(`
    title: ${randomPost.data.title}
    link: ${link}
  `)
} else {
  open(link)
}
