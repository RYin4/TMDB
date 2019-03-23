//ClI using yargs for search command
//ex: node cli.js search -k keyword

const
    app = require('./app'),
    yargs = require('yargs')

//node cli.js search --help

const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'search for a tv show',
        handler: () => app.search()
    })
    .help('help')
    .argv
        
