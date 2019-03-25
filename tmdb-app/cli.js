const 
    yargs = require('yargs'),
    app = require('./app')

const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'search for your tv show',
        builder: (yargs) => {
            return yargs.options('q', {
                alias: 'query',
                describe: 'find your tv show using a query'
            })
        },
        handler: (argv) => {
            app.search(argv.query)
        }
    })
    .help('help')
    .argv