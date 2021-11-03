#!/usr/bin/env node

import * as path from 'path'
import * as fs from 'fs/promises'

import mri from 'mri'
import dedent from 'dedent'
import slugify from 'slugify'

import { parseXlsx } from '@njam-data/tools/xlsx.js'
import { writeCsv } from '@njam-data/tools/csv.js'

import lint from './commands/lint.js'

const flags = mri(process.argv.slice(2), {
  alias: {
    help: 'h',
    filepath: 'f',
    outputDirectory: 'o'
  },
  default: {

  }
})

const args = flags._
const cmd = args.shift()

async function main () {
  if (cmd === 'help' || args.help) {
    const message = dedent`
      help

      COMMANDS
      njam xlsx-to-csv -f input.xlsx -o path/to/directory/
    `

    console.log(message)
    process.exit()
  }

  if (cmd === 'lint') {
    await lint({ args, flags })
    process.exit()
  }

  if (cmd === 'xlsx-to-csv') {
    const buffer = await fs.readFile(flags.filepath)
    const sheets = await parseXlsx(buffer)
    const parsedFilepath = path.parse(flags.filepath)

    if (!sheets.length) {
      console.error(`no sheets found in ${flags.filepath}`)
      process.exit(1)
    }

    if (sheets.length === 1) {
      const outputFilename = parsedFilepath.name + '.csv'
      const outputFilepath = path.join(process.cwd(), flags.outputDirectory, outputFilename)
      await writeCsv(outputFilepath, sheets[0].data, { headers: true })
    } else {
      for (const sheet of sheets) {
        const outputFilename = parsedFilepath.name + `${slugify(sheet.name.toLowerCase())}.csv`
        const outputFilepath = path.join(process.cwd(), flags.outputDirectory, outputFilename)
        await writeCsv(outputFilepath, sheet.data, { headers: true })
      }
    }
  }
}

main()
