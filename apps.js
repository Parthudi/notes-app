//const add = require('./util.js')
//const ass = add(4,6)
//console.log(ass)

/*const par = require('./util.js')
const mul = par(5,6)
console.log(mul)

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg) */

/*const valid = require('validator')
console.log(valid.isEmail('parth@gma.com'))
console.log(valid.isURL('https://p.io')) */

/*const color = require('chalk')
const varp = color.green.inverse.bold('success!.....')
const getcolue = color.blue('Hello') + ' World' + color.red('!')
const mastcolor = color.red('Error' + 'msg')
console.log(varp)
console.log(getcolue)
console.log(mastcolor)
console.log(process.argv)*/

const color = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({

    command: 'add',
    describe: 'adding notes',
    builder:{
                title: {
                                describe: 'notes title',
                                demandOption: true,
                                type: 'string'
                        },
                body:  {
                                describe: 'notes body',
                                demandOption: true,
                                type: 'string'
                } 
    },
    handler(argv){
                notes.addnotes(argv.title, argv.body)
    }
})
yargs.command({
        command: 'remove',
        describe: 'remove notes',
        builder: {
                        title: {
                                 describe: 'remove title',
                                 demandOption: true,
                                 type: 'string'
                        }
        },
        handler(argv){
            notes.removenotes(argv.title)
        }
})
yargs.command({
        command: 'list',
        describe: 'list notes',
        handler(argv){
                notes.listnotes()
        }
})
yargs.command({
        command: 'read',
        describe: 'read notes',
        builder: {
                        title: {
                                        describe: 'read notes',
                                        demandOption: true,
                                        type: 'string'
                        }
        },
        handler(argv){
                notes.readnotes(argv.title)
        }
})


yargs.parse()

