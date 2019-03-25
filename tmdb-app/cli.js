const
    app = require('./app'),
    yargs = require('yargs')

const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: '--sq <query> search for a tv show',
        builder: (yargs) => {
            return yargs.options('softQuery', {
                alias: 'sq',
                describe: 'find your tv show using query'
            })
        },
        handler: (argv) => {app.searchWithParams(argv.sq)}
    })
    .help('help')
    .argv
        
