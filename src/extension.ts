import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.openCi3View', async () => {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showInformationMessage('No active editor');
            return;
        }

        const currentFilePath = editor.document.uri.fsPath;
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(vscode.Uri.file(currentFilePath));

        if (!workspaceFolder) {
            vscode.window.showInformationMessage('No workspace folder found');
            return;
        }

        const workspaceFolderPath = workspaceFolder.uri.fsPath;

        const document = editor.document;
        const position = editor.selection.active;
        const line = document.lineAt(position.line);
        const lineText = line.text;

        const regex = /\$this->load->view\(['"]([^'"]+)['"](,.*)?\);?/;
        const match = lineText.match(regex);

        if (match) {
            const viewPath = match[1];
            await openFiles(viewPath, workspaceFolderPath);
        } else {
            vscode.window.showInformationMessage('No view found in the current line');
        }
    });

    context.subscriptions.push(disposable);
}

async function openFiles(viewPath: string, workspaceFolderPath: string) {
    const viewFolders = ['application/views']; // Add the folders you want to search here
    let filesFound = false;

    for (const folder of viewFolders) {
        const searchPattern = new vscode.RelativePattern(workspaceFolderPath, `${folder}/**/${viewPath}.php`);
        const files = await vscode.workspace.findFiles(searchPattern);

        if (files.length > 0) {
            filesFound = true;
            for (const file of files) {
                const document = await vscode.workspace.openTextDocument(file);
                await vscode.window.showTextDocument(document, { preview: false });
            }
        }
    }

    if (!filesFound) {
        vscode.window.showInformationMessage(`View files for ${viewPath}.php not found in specified folders`);
    }
}

export function deactivate() {}
