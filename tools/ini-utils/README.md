# StarCitizen INI Utils

[![INI Utils - Build and Publish](https://github.com/Dymerz/StarCitizen-Localization/actions/workflows/ini-utils-ci.yaml/badge.svg)](https://github.com/Dymerz/StarCitizen-Localization/actions/workflows/ini-utils-ci.yaml)
[![npm version](https://img.shields.io/npm/v/@dymerz/starcitizen-ini-utils.svg)](https://www.npmjs.com/package/@dymerz/starcitizen-ini-utils)
[![Node.js Version](https://img.shields.io/node/v/@dymerz/starcitizen-ini-utils)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

`@dymerz/starcitizen-ini-utils` is a specialized utility tool designed for working with Star Citizen localization files in INI format. This tool offers commands to validate and merge INI files, making it easier to manage and maintain localization data.

### Key Features

- **Validation**: Check if all entries from a reference file exist in source files and verify placeholder consistency
- **Merging**: Combine multiple INI files intelligently to create updated localization files
- **Placeholder Validation**: Ensures that special placeholders (% and ~ format) match between reference and translated content
- **CI/CD Integration**: Can be used in continuous integration workflows with the `--ci` flag

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/)

## Installation Options

### Option 1: Use directly with npx (No Installation Required)

The easiest way to use this tool is directly with npx:

```sh
npx @dymerz/starcitizen-ini-utils
```

### Option 2: Install as a project dependency

```sh
npm install @dymerz/starcitizen-ini-utils --save-dev
```

### Option 3: Local development setup
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

4. **Run tests:**

  ```sh
  npm test
  ```

## Usage

### Command: `validate`

Verifies that all entries from a reference INI file are present in the source files and checks that the placeholders match properly.

```sh
npx @dymerz/starcitizen-ini-utils validate <files...> [options]
```

#### Parameters:

- `<files...>`: Paths to the INI files to validate

#### Options:

| Option | Description | Default |
|--------|-------------|---------|
| `--reference-type <type>` | Type of reference: "github", "local", or "url" | "github" |
| `--github-branch <branch>` | GitHub branch to use | "main" |
| `--github-repository <repo>` | GitHub repository path | "Dymerz/StarCitizen-Localization" |
| `--github-file-path <path>` | Path to file within repository | "data/Localization/english/global.ini" |
| `--local-path <path>` | Path to local reference file | (required when reference-type is "local") |
| `--ci` | Run in CI mode with GitHub Actions annotations and exit code | false |

#### CI Mode Features

When running with the `--ci` flag:

- Uses machine-readable output format optimized for CI environments
- Generates GitHub Actions compatible annotations (`::error::` and `::notice::`)
- Groups output for better readability in GitHub Actions logs
- Returns non-zero exit code (1) when validation fails
- Provides concise error summaries at the end of execution

#### Examples:

```sh
# Validate against main branch on GitHub (default)
npx @dymerz/starcitizen-ini-utils validate ../../data/Localization/german_(germany)/global.ini

# Validate against PTU branch
npx @dymerz/starcitizen-ini-utils validate ../../data/Localization/german_(germany)/global.ini --github-branch ptu

# Validate against local reference file
npx @dymerz/starcitizen-ini-utils validate ../../data/Localization/german_(germany)/global.ini \
  --reference-type local --local-path ../../data/Localization/english/global.ini

# Run in CI mode with GitHub Actions annotations
npx @dymerz/starcitizen-ini-utils validate ../../data/Localization/**/global.ini \
  --reference-type local --local-path ../../data/Localization/english/global.ini --ci
  --reference-type local \
  --local-path ../../data/Localization/english/global.ini

### Command: `merge`

Merges multiple INI files, taking values from files in order of priority, and saves the result to a new file.

```sh
npx @dymerz/starcitizen-ini-utils merge <referenceFilePath> <sourceFilePath> <replacementFilePath> <outputFilePath>
```

#### Parameters:

- `<referenceFilePath>`: Path to the reference INI file (provides the structure and fallback values)
- `<sourceFilePath>`: Path to the source INI file (first priority for values)
- `<replacementFilePath>`: Path to the replacement INI file (second priority for values)
- `<outputFilePath>`: Path to save the merged INI file

#### Example:

```sh
npx @dymerz/starcitizen-ini-utils merge \
  ./english/global.ini \
  ./french_old/global.ini \
  ./french_updates/global.ini \
  ./french_merged/global.ini
```

## Technical Details

- Written in TypeScript with strong typing
- Creates UTF-8 files with BOM (Byte Order Mark) for proper encoding
- Handles special characters in INI files by properly escaping semicolons and hash symbols
- Validates both percent placeholders (`%name`) and tilde placeholders (`~name(parameter)`)
- Supports case-insensitive placeholder validation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[ISC License](LICENSE)

---
Developed and maintained by [Dymerz](https://github.com/Dymerz)
