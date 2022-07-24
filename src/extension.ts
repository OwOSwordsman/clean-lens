import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// disable error lens
	const enableLens = vscode.commands.registerCommand('clean-editor.enableLens', () => {
		const configuration = vscode.workspace.getConfiguration("errorLens.enabled");
		const currentValue = configuration.get("globalValue");
		if (!(currentValue || currentValue === undefined)) {
			vscode.commands.executeCommand("errorLens.toggle");
		}
	});

	// enable error lens
	const disableLens = vscode.commands.registerCommand('clean-editor.disableLens', () => {
		const configuration = vscode.workspace.getConfiguration("errorLens.enabled");
		const currentValue = configuration.get("globalValue");
		if (currentValue || currentValue === undefined) {
			vscode.commands.executeCommand("errorLens.toggle");
		}
	});

	context.subscriptions.push(enableLens);
	context.subscriptions.push(disableLens);
}

export function deactivate() { }
