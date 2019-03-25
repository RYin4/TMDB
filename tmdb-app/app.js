const
    tmdb = require('tmdb-module'),
    inquirer = require('inquirer'),
    superagent = require('superagent')

const searchWithParams = (sq) => {

    tmdb.search(sq)
        .then(results => {

            let available = []
            results.array.forEach(element => {
                available.push(`${element.show.name} (${element.show.id})`)
            });

            inquirer.prompt([{
                type:'list',
                message: 'Select a show to view its details',
                name:'showName',
                choices:available
            }])
            .then(choice => {
                console.log(`\n${choice.ShowName}\n`)
                let selection = choice.ShowName.split("(")[1].slice(0,-1)
                tmdb.fetch_by_id(selection)
                .then(showObject => {
                    display(showObject)
                })
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

const singleSearch = (ss) => {
    tmdb.singleSearch(ss)
    .then(res => {
        display(res);
    })
    .catch(err => console.log(err))
}

function display(show){
    console.log(`Name: ${show.name}`)


    rl.question('Would you like to view show\'s episodes? [Y/N]', (answer) => {
      if(answer.toLowerCase() === 'y'){
         showSeasons(show.id)
      }
      rl.close();
    });
}

module.exports = {
    searchWithParams
}






// async function searchPrompt(matches) {
//     return inquirer.prompt([{
//         type:'list',
//         message:"select the tv show you are searching for",
//         name: 'tv',
//         choices: matches,
//         validate: tv => {
//             if (tv.length == 0) {
//                 return 'You must select a tv show'
//             } else {
//                 return true;
//             }
//         }
//     }])
// }

// async function search() {
    
// }

    
