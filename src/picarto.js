const { getChannelInfoByName, getChannelInfoById } = require('./api/channel')



getChannelInfoByName('aruu').then(res => {
    const channelInfo = res.data;
    console.log(`[id: ${channelInfo.user_id}][name:${channelInfo.name}][online:${channelInfo.online}]`)
}).catch(e => console.log(e));