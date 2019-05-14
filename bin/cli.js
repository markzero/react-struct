#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs-extra')
const path = require('path')
const program = require('commander')
const { spawn } = require('child_process')
const colors = require('colors')

program
  .option('-n, --name <name>', 'name of your project', 'react-struct')

const packageDir = `${path.join(__dirname, '../')}package`
program.parse(process.argv)
const projectPath = `${process.cwd()}/${program.name}`

const cp = spawn('cp', ['-r', packageDir, projectPath])

cp.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})

cp.on('close', (code) => {
  const pjson = fs.readFileSync(`${packageDir}/package.json.tmpl`, 'utf8')
  const par = JSON.parse(pjson)
  par.name = program.name
  fs.writeFileSync(`${projectPath}/package.json`, JSON.stringify(par, null, 2))
  console.log(`Created project with name ${program.name}.`.green)
  spawn('rm', [`${projectPath}/package.json.tmpl`])
  console.log('Now install NPM modules: '.dim, `cd ${program.name} && npm i`.yellow.bold)
  console.log(colors.gray(`Child process exited with code ${code}.`))
})
