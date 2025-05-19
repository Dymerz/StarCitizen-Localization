# ini-utils

`@dymerz/starcitizen-ini-utils` is a utility tool for working with Star Citizen INI localization files. It provides commands to merge and validate INI files.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/)

## Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Dymerz/StarCitizen-Localization.git
    cd tools/ini-utils
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
npx @dymerz/starcitizen-ini-utils validate <files...> [options]
npx @dymerz/starcitizen-ini-utils merge <referenceFilePath> <sourceFilePath> <replacementFilePath> <outputFilePath>
```

### Using directly from GitHub repository

You can also use this tool directly with npx without cloning the repository:

```sh
npx github:Dymerz/StarCitizen-Localization/tools/ini-utils
```

Or with a specific command:

```sh
npx github:Dymerz/StarCitizen-Localization/tools/ini-utils validate <files...> [options]
npx github:Dymerz/StarCitizen-Localization/tools/ini-utils merge <referenceFilePath> <sourceFilePath> <replacementFilePath> <outputFilePath>
```

### Installing as a dependency

You can add this tool as a dependency to your project:

```sh
npm install @dymerz/starcitizen-ini-utils
```

### Validate INI Files

To validate INI files, use the `validate` command. This command checks if all entries from a reference file are present in the source files and if the placeholders match.

  ```sh
  npx @dymerz/starcitizen-ini-utils validate <files...> [options]
  ```

  - `<files...>`: Paths to the INI files to validate.
  - `[options]`:
    - `--reference-type <type>`: Type of reference: "github" or "local" (default: "github")
    - `--github-branch <branch>`: GitHub branch to use (default: "main")
    - `--github-repository <repository>`: GitHub repository path (default: "Dymerz/StarCitizen-Localization")
    - `--github-file-path <path>`: Path to file within repository (default: "english/global.ini")
    - `--local-path <path>`: Path to local reference file (required when reference-type is "local")
    - `--ci`: Run in CI mode

Examples:

  ```sh
  # Validate against main branch on GitHub (default)
  npx @dymerz/starcitizen-ini-utils validate ../../data/Localization/french_(france)/global.ini

  # Validate against PTU branch
  npx @dymerz/starcitizen-ini-utils validate ../../data/Localization/french_(france)/global.ini --github-branch ptu

  # Validate against local reference file
  npx @dymerz/starcitizen-ini-utils validate ../../data/Localization/french_(france)/global.ini --reference-type local --local-path ../../data/Localization/english/global.ini

  # Validate against custom URL
  npx @dymerz/starcitizen-ini-utils validate ../../data/Localization/french_(france)/global.ini --reference-type url --url-path https://example.com/path/to/reference.ini
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
