import { extname } from 'path'

import { readCsv, writeCsv } from '@njam-data/tools/csv.js'
import { readJson, writeJson } from '@njam-data/tools/json.js'

export default async function convert ({ flags }) {
	let { inputFilepath, inputFormat, outputFilepath, outputFormat } = flags

	if (!inputFormat) {
		inputFormat = extname(inputFilepath).replace('.', '')
	}

	if (!outputFormat) {
		outputFormat = extname(outputFilepath).replace('.', '')
	}

	let inputContent
	if (inputFormat === 'csv') {
		inputContent = await readCsv(inputFilepath)
	} else if (inputFormat === 'json') {
		inputContent = readJson(inputFilepath)
	} else {
		console.error(`input format ${inputFormat} not supported`)
	}

	if (outputFormat === 'csv') {
		await writeCsv(outputFilepath, inputContent)
	} else if (outputFormat === 'json') {
		await writeJson(outputFilepath, inputContent)
	}
}
