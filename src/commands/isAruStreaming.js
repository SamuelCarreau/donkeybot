const { SlashCommandBuilder } = require('@discordjs/builders');
const { getChannelInfoByName, getChannelInfoById } = require('../api/channel')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('is_aru_streaming')
        .setDescription('Check if Aru is streaming.'),
    async execute(interaction) {
        getChannelInfoById(222670)
            .then(res => {
            const channelInfo = res.data;
            const message = channelInfo.online ? "Aru is streaming on : https://picarto.tv/Aruu :relaxed:": "Aru is not streaming :sob:";
            interaction.reply(message)
            })
            .catch(e => console.log(e));   
    }
}