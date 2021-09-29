const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('carrot')
        .setDescription('Give a carrot to the donkey.'),
    async execute(interaction) {
        await interaction.reply('Hee haw!!!')
    }
}