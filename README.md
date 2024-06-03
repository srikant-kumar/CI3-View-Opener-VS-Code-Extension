# CI3 View Opener : VS Code Extension

CI3 View Opener is a VS Code extension designed to streamline the development process in the CodeIgniter 3 framework. This extension allows you to quickly open view files directly from your controllers, enhancing your productivity and simplifying navigation within your project.

## Features

- **Open CI3 View**: Quickly open the view files referenced in your controller with a simple keyboard shortcut.
- **Keybinding**: Use `Alt+O` to open the corresponding view file when your cursor is on a line that loads a view.

## How It Works

CI3 View Opener uses a regular expression to find instances where a view is being loaded in a CodeIgniter 3 controller. The regular expression used is:

```javascript
const regex = /\$this->load->view\(['"]([^'"]+)['"](,.*)?\);?/;
```

This regex captures the view file name from the $this->load->view('view_name') statement. When the cursor is on a line that matches this pattern, the extension extracts the view name and opens the corresponding file in the views directory of your CodeIgniter 3 project.

## Development

To set up the development environment:

1. Clone the repository.
2. Install Typecript `npm install -g typescript`
3. Run `npm install` to install the dependencies.
4. Use `npm run watch` to start the TypeScript compiler in watch mode.

## Scripts

- `npm run compile`: Compiles the TypeScript code.
- `npm run watch`: Compiles the TypeScript code in watch mode.
- `npm run lint`: Runs ESLint on the src directory.
- `npm run test`: Runs tests using the VS Code Test Runner.

## Installation

### From VSIX File

**Create the VSIX file:**

- Clone the repository.
- Open the terminal and navigate to the project directory.
- Run the following command to install dependencies and create the VSIX file:

  ```sh
  npm install -g vsce
  npm install
  npm run compile
  vsce package
  ```

- This will generate a .vsix file in the project directory.

**Install the VSIX file:**

- Open VS Code.
- Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window or by pressing Ctrl+Shift+X.
- Click on the ellipsis (...) at the top right corner of the Extensions view and select Install from VSIX....
- Navigate to the generated .vsix file and select it to install.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## Acknowledgements

This extension was created to improve the workflow of developers working with the CodeIgniter 3 framework by providing a quick and easy way to navigate between controllers and view files.

## License

This project is licensed under the MIT License.
