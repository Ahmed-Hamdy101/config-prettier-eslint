
<div align="center">

<h1> Eslint and Prettier Step by Step </h1>
</div>

## 1 - 🎨 installation Nodejs

- windows

  - install <a href="https://nodejs.org/en" />Nodejs</a>
  - choose LTS Version
    (Long Term Support)
- macos
or linux

  - ```bash
        brew update && brew upgrade node
        # or linux
        sudo apt-get update && upgrade node
    ```

## 2 - 🎇 how to initial npm package

- create folder project eslint-prettier step by step

- init npm
package in this directory
with the following command:

   - ```bash
     $npm init --yes
     #  or 
     $yarn init — yes
     ```

## 🐱‍🚀 Prettier step by step

#### .2 - 📦 Install prettier

```bash
$ yarn add prettier
# or with npm
$ npm i prettier
```

### 2 - 🌴Create `.prettierrc`
- on linux or mac
  - ```bash
        touch .prettierrc
    ```
- on windows or create new file and name it `.prettierrc` or from `cmd`

   - ```cmd
     echo  "" > .prettierrc
     ```
- to test prettier open `terminal/cmd` were `package.json` is

   - ```cmd
     npm run prettier
     ```

### 3 - 🔥 Add config of your .prettierrc file

```json
{
"printWidth":80 ,
"tabWidth":2 ,"useTabs":false,"semi":true,"singleQuote": true
}
```

### 🔝 Update scripts section in package json

```json
"scripts":{
"format":"prettier --write \"src/**/*.{ts,tsx}\""//update format script
},
```

## 🎂 Installation eslint and prettier

```ps
npm i --save-dev eslint @typescript-eslint/parser typescript \
eslint-config-prettier eslint-plugin-import eslint-plugin-node \
eslint-plugin-promise eslint-plugin-react eslint-plugin-jsx-a11y \
eslint-plugin-standard prettier
```

## Create .eslintrc file in root directory of project with the following content

```json
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

```
