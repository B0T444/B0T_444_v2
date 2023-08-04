const {TwitterApi} = require("twitter-api-v2")

const client = new TwitterApi({
    appKey:'fSo6J7yRla7rETNXs1r2BMCB7',
    appSecret:'Cuk8nwn27VYsUBxFbzWpskPkrZXyBypbknO5iOR9e7tyZ4aLst',
    accessToken:'1497243966596599808-faDAIvA0IbDAVDSZUab8R2J1GOEvvr',
    accessSecret:'GbXmjyMmfRawYyyLP8YXVFWii1IW6C1xKts4DcsHLkxhN',
    clientId:'YkItalo3VEhGR1hlbVRfOHUtaHg6MTpjaQ',
    clientSecret:'GKUUioY9mp9pxlW-hlQSikY3LJXJMTgP0b7xv9oB6TRo0zn3PN',
    Baerer:'AAAAAAAAAAAAAAAAAAAAAJEIZwEAAAAAw0c3jtT%2BCuyAnBuPNG9rhMrFzaE%3Dr1fTsMr09dc0VeH5eNmzZI0F3xSKEYa9lueZfUPh8KeHlvOrQN',
})


const rwClient = client.readWrite

module.exports = rwClient
