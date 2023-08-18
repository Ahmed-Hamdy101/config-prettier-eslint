
<div align="center">

<h1> Eslint and Prettier Step by Step </h1>
</div>

## 1  🎨 installation Nodejs

- 1.1 windows
  - install <a href="https://nodejs.org/en" />Nodejs</a>
  - choose LTS Version (Long Term Support)

- 1.2 mac or linux

  - ```bash
           brew update && brew upgrade node
           # or linux
           sudo apt-get update && upgrade node
        ```

## 2  🎇 how to initial npm package

- 2.1  create folder project eslint-prettier step by step

- 2.2  init npm package in this directory with the following command

  - ```bash
             $npm init --yes
             #  or 
             $yarn init — yes
         ```

## 3 🐱‍🚀 Prettier & config step by step

- 3.1 📦 Install prettier

  - ```bash
       $ yarn add prettier
       # or with npm
       $ npm i prettier
       ```

- 3.2 🌴Create `.prettierrc`
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

- 3.3 🚑 Add this config of your `.prettierrc` file

  - ```json
         {
         "printWidth":80 ,
         "tabWidth":2 ,
         "useTabs":false,
         "semi":true,
         "singleQuote": true
         }
       ```

- 3.4 ⚡ Update scripts section in `package.json`

  - ```json
        //update format script
        "scripts":{
        "format":"prettier --write \"src/**/*.{ts,tsx}\""
        },
     ```

## 4 🔥 Installation config for eslint with prettier

- run this in your terminal

  - ```ps
      npm i --save-dev eslint @typescript-eslint/parser typescript \
      eslint-config-prettier eslint-plugin-import eslint-plugin-node \
      eslint-plugin-promise eslint-plugin-react eslint-plugin-jsx-a11y \
      eslint-plugin-standard prettier
      ```

## 5 🚀 Create eslint file be sure `eslint installed`

- `automatic` : file will generated

  - run this in your terminal

    - ```shell
          npx eslint init
        ```

  - if  $eslint` installed `global` run this it will ask u some question

    - ```ps
          eslint --init
       ```

- `manually` : you will create the file and config
  - run this in your terminal

    - ```shell
          npx eslint init
       ```

  - if  <code> eslint </code> installed `global` run this it will ask u some question

    - ```ps
          eslint --init
      ```
