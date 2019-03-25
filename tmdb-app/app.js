const 
    tmdb = require('tmdb-module'),
    inquirer = require('inquirer')

async function searchPrompt(newshowList) {
    return inquirer.prompt([{
        type: 'list',
        message: 'Please select the tv show you are searching for.',
        name: 'show',
        choices: newshowList,
        validate: show => {
            if (show.length == 0) 
                return 'You must select a show!'
            else 
                return true
        }
    }])
}

async function search(name) {

    const newshowList = []

    const tvshow = await tmdb.search(name)
    
    const showlist = tvshow.results

    // console.log(showlist)

    showlist.forEach(function(element) {
        newshowList.push(element.name)
    })

    // console.log(newshowList)

    const foundShow = await searchPrompt(newshowList)

    // console.log(foundShow)

   //get value of show property. Example = { show: 'Friends' }
   const nameOfShowString = foundShow.show
  
   let showID = 0;

    for (let i = 0; i < showlist.length; i++ ) {
        if ( nameOfShowString === `${showlist[i].name}` ) {
            showID = showlist[i].id
            // console.log(showID)
            break
        }
    }
    
    const showInfo = await tmdb.fetch_by_id(showID)

    // console.log(showInfo)

    print(showInfo)
}

const print = (showInfo) => {
    // console.log(showInfo)

    console.log('==========SHOW INFORMATION==========')

    console.log(`Show Name: ${showInfo.name}`)
    console.log('')
    console.log(`Popularity: ${showInfo.popularity}`)
    console.log('')
    console.log(`Original Language: ${showInfo.original_language}`)
    console.log('')
    console.log(`Country of Origin: ${showInfo.origin_country}`)
    console.log('')
    console.log(`First Air Date: ${showInfo.first_air_date}`)
    console.log('')
    console.log(`Overview: ${showInfo.overview}`)
    console.log('')

    console.log('===============END===============')
}

module.exports = {
    search
}