# ini-utils

`ini-utils` is a utility tool for working with INI files. It provides commands to merge and validate INI files.

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

### Validate INI Files

To validate INI files, use the `validate` command. This command checks if all entries from a reference file are present in the source files and if the placeholders match.

  ```sh
  node ./dist/src/index.js validate <source> [files...]
  ```

  - `<source>`: Path to the english INI file.
  - `[files...]`: Paths to the INI files to validate.

Example:

  ```sh
  node ./dist/src/index.js validate data/Localization/english/global.ini data/Localization/french_(france)/global.ini
  ```
