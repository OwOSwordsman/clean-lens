// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let enableMessage = vscode.commands.registerCommand('clean-editor.enableMessage', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const configurationName = "errorLens.enabled";
		const configuration = vscode.workspace.getConfiguration(configurationName);
		const currentValue = configuration.get("globalValue");
		if (!(currentValue || currentValue === undefined)) {
			vscode.commands.executeCommand("errorLens.toggle");
		}
		console.log(configuration.get("globalValue"));
	});

	let disableMessage = vscode.commands.registerCommand('clean-editor.disableMessage', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const configurationName = "errorLens.enabled";
		const configuration = vscode.workspace.getConfiguration(configurationName);
		const currentValue = configuration.get("globalValue");
		if (currentValue || currentValue === undefined) {
			vscode.commands.executeCommand("errorLens.toggle");
		}
		console.log(configuration.get("globalValue"));
	});

	context.subscriptions.push(enableMessage);
	context.subscriptions.push(disableMessage);
}

// this method is called when your extension is deactivated
export function deactivate() { }
