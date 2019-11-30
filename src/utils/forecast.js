const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/16c839362cff372e7cac393eb4c8bd35/' + latitude + ',' + longitude + '?units=si'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect')
        }
        else if (body.error) {
            callback('unable to find location darksky')
        }
        else {
            const data = body.currently
            console.log(data)
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + data.temperature + ' degrees out. There is a ' + data.precipProbability + '% chance of rain.'
                                + ' The nearest storm is ' + data.nearestStormDistance + ' kilometers away.')
        }
    })
}

module.exports = forecast