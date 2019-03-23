const
    cards = require('deckofcards'),
    inquirer = require('inquirer')


async function discardPrompt(result) {
    const displayCards = result.map(card => {
        return { name: `${card.value} of ${card.suit}`, value: card.code }
    })

    return inquirer.prompt([{
        type: 'checkbox',
        message: 'select cards to throw away',
        name: 'cards',
        choices: displayCards,
        validate: cards => {
            if (cards.length > 4)
                return 'You may only discard up to 4 cards'
            else
                return true
        }
    }])
}

const findAndRemove = (current, throwaway) => {
    return current.filter(card => !throwaway.includes(card.code))
}

const print = (cards, remaining) => {
    console.log(`\n --- CARDS ---`)
    cards.forEach(card => {
        console.log(`${card.value} of ${card.suit}`)
    })
    console.log(`\n --- REMAINING CARDS ---`)
    console.log(remaining)
}

async function draw(shuffle = true, n = 5) {

}

async function play() {
    
}

module.exports = {
    draw,
    play
}