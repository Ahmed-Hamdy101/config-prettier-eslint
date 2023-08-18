import fs from 'fs'
// run node
import { log } from 'console'
import path, { join } from 'path'

import data from './test/data.js'

data.names.forEach((element) => {
  console.log({ element })
})

// const google = "test";
// log(google);

// run js2 commonJS
// const user = require('./data/data')
// const Auth = "jhon";
// if (Auth == user.username.names[0])
// log(true,user.username.names[0])
// else
// log("error")

// ES6
// import data from './data/data.js';
// log(data);

// module sytstem
// import f from './data/fileSystem.js';
// log(f);

// core modules
// - file system
// console.log(path.dirname('C:\\Users\\'.split('\\').join('/')));

// join creata dir
const macPath = join('ahmed', 'lol', 'cherry', 'applications')
  .split('\\')
  .join('/')
log(macPath)

// remove dots , converte double to  single-slash
const normalize = path.normalize('')

log(normalize)
// resolve get the absolute path
const resolve = path.resolve('')
log(resolve)

// event loop
/**
 * setTimeOut
 * setInterval
 * Console()
 * FileSysyem
 * setImedite
 * nextTick
 */
// setInterval((word="shut up")=>{log('repeat'+word)},7000);

// fist phase
log(' -----no event loop 1 without-------- ')
// next proccss
process.nextTick(() => {
  log('next: 6s ')
}, 6)

setTimeout(() => {
  log('setTime1: 3st 7s')
}, 7)

setTimeout(() => {
  log('setTime2: 4st  50000s')
}, 50000)

// file system
fs.readFile(path.basename('./'), () => {
  // fist phase
  log(' -----no event loop with -------- ')
  // next proccss
  process.nextTick(() => {
    log('fs = > next: 6s ')
  }, 6)

  setTimeout(() => {
    log('fs = > setTime1: 3st 10s')
  }, 10)

  setTimeout(() => {
    log('fs = > setTime2: 4st  1s')
  }, 1)
})

// utility lib
/**
 * how to install eslint
 * how to config eslint with prettier
 * how to config plugins
 */

/** finished **
 * how to install prettier
 *
 *
 */
