
import {sumar , multiplica } from './controller.js'
import chalk from 'chalk';

const  suma1= sumar(1,2)
const  suma2 = sumar(4,5)

const multi = multiplica(suma1,suma2)

console.log(chalk.green(multi))



