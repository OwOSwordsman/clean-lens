import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// disable error lens
	const enableMessage = vscode.commands.registerCommand('clean-editor.enableMessage', () => {
		const configuration = vscode.workspace.getConfiguration("errorLens.enabled");
		const currentValue = configuration.get("globalValue");
		if (!(currentValue || currentValue === undefined)) {
			vscode.commands.executeCommand("errorLens.toggle");
		}
	});

	// enable error lens
	const disableMessage = vscode.commands.registerCommand('clean-editor.disableMessage', () => {
		const configuration = vscode.workspace.getConfiguration("errorLens.enabled");
		const currentValue = configuration.get("globalValue");
		if (currentValue || currentValue === undefined) {
			vscode.commands.executeCommand("errorLens.toggle");
		}
	});

	context.subscriptions.push(enableMessage);
	context.subscriptions.push(disableMessage);
}

export function deactivate() { }
