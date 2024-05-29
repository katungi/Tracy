// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { readFile, readFileSync } from 'fs';
import { get } from 'http';
import * as vscode from 'vscode';

function getTypeOccurrences(data: string) {
	const typeRegex = /type|interface/g;
	const occurrences = data.match(typeRegex);
	return occurrences?.length;
}

function getCalculateComplexity(data: string, regex: RegExp) {
	const traceData = [
		{ "pid": 1, "tid": 1, "ph": "E", "cat": "parse", "ts": 233691.50006771088, "name": "createSourceFile", "args": { "path": "/home/hw/projects/ts-diag-transform/src/index.ts" } },
		{ "pid": 1, "tid": 1, "ph": "X", "cat": "program", "ts": 237192.29996204376, "name": "resolveModuleNamesWorker", "dur": 22697.200059890747, "args": { "containingFileName": "/home/hw/projects/ts-diag-transform/src/index.ts" } },
	]
}

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tracy" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('tracy.analyzeFile', () => {
		// get current file
		// globbing npm package - glob fs-extra
		// vscode might have something
		const currentFile = vscode.window.activeTextEditor?.document.fileName;
		const data = readFileSync(currentFile!, 'utf-8');
		const occurrences = getTypeOccurrences(data);
		vscode.window.showInformationMessage('Analyzing file...', currentFile!);
		vscode.window.showInformationMessage(`Number of types/interfaces: ${occurrences}`);
	})

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
