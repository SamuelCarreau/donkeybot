const axios = require('axios').default;
const baseUrl = 'https://api.picarto.tv/api/v1'

const getChannelInfoByName =  (name) => axios.get(`${baseUrl}/channel/name/${name}`)
const getChannelInfoById = (id) => axios.get(`${baseUrl}/channel/id/${id}`)

module.exports = {
    getChannelInfoByName,
    getChannelInfoById
}