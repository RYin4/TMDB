const config = require('./config');
const superagent = require('superagent');

//helper function, underscore to make it "private"
const _fetch = command => {
    return superagent.get(`${config.url}/${command}`)
                //may be in repsonse.text
                .then(response => response.body)
                //error maybe located somewhere else depending on the API. Check your api 
                .catch(error => error.response.body)
}

//export
// const deck = shuffle => {
//     if (shuffle) {
//         //get the shuffle cards
//         //it is hardcoded, yours should not be hardcoded
//         return _fetch('deck/new/shuffle?deck_count=1')
        
//     } else {
//         //fetch the unshuffled deck 
//         return _fetch('deck/new?deck_count=1')
//     }
// }

// const draw = (deckID, count) => {
//     //draw cards 
//     return _fetch(`deck/${deckId}/draw/?count=${count}`)
// }

const search = search => {
    if (search) {
        return _fetch();
    } else {
        return _fetch();
    }
}
const fetch = () => {
    return _fetch();
}

