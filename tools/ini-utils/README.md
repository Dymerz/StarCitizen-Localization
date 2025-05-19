# ini-utils

`@dymerz/starcitizen-ini-utils` is a utility tool for working with Star Citizen INI localization files. It provides commands to merge and validate INI files.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/)

## Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Dymerz/StarCitizen-Localization.git
    cd <repository-directory>/tools/ini-utils
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Build the project:**

    ```sh
    npm run build
    ```

## Usage

### Using with npx from GitHub Packages (Recommended)

You can use this tool directly with npx from GitHub Packages:

```sh
npx @dymerz/starcitizen-ini-utils
```

Or with a specific command:

```sh
npx @dymerz/starcitizen-ini-utils validate <source> [files...]
npx @dymerz/starcitizen-ini-utils merge <referenceFilePath> <sourceFilePath> <replacementFilePath> <outputFilePath>
```

### Using directly from GitHub repository

You can also use this tool directly with npx without cloning the repository:

```sh
npx github:Dymerz/StarCitizen-Localization/tools/ini-utils
```

Or with a specific command:

```sh
npx github:Dymerz/StarCitizen-Localization/tools/ini-utils validate <source> [files...]
npx github:Dymerz/StarCitizen-Localization/tools/ini-utils merge <referenceFilePath> <sourceFilePath> <replacementFilePath> <outputFilePath>
```

### Installing as a dependency

You can add this tool as a dependency to your project:

```sh
npm install @dymerz/starcitizen-ini-utils
```

Then configure your `.npmrc` file to use GitHub Packages:

```
@dymerz:registry=https://npm.pkg.github.com
```

### Validate INI Files

To validate INI files, use the `validate` command. This command checks if all entries from a reference file are present in the source files and if the placeholders match.

  ```sh
  npx @dymerz/starcitizen-ini-utils validate <source> [files...]
  ```

  - `<source>`: Path to the english INI file.
  - `[files...]`: Paths to the INI files to validate.

Example:

  ```sh
  npx @dymerz/starcitizen-ini-utils validate ../../data/Localization/english/global.ini ../../data/Localization/french_(france)/global.ini
  ```

### Merge INI Files

To merge INI files, use the `merge` command:

  ```sh
  npx @dymerz/starcitizen-ini-utils merge <referenceFilePath> <sourceFilePath> <replacementFilePath> <outputFilePath>
  ```

  - `<referenceFilePath>`: Path to the reference INI file.
  - `<sourceFilePath>`: Path to the source INI file.
  - `<replacementFilePath>`: Path to the replacement INI file.
  - `<outputFilePath>`: Path to save the merged INI file.
