const config = require('./config')
const superagent = require('superagent')

const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}`)
        .then(response => response.body)
}

exports.search = (sq) => {
    return _fetch(`search/tv?api_key=c261880f23d34ae50288c921b209df51&query=${sq}`)
}

exports.fetch_by_id = (id) => {
    return _fetch(`tv/${id}?api_key=c261880f23d34ae50288c921b209df51`)
}


