const {getCommands} = require('./commandHelper')
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('../config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});
client.commands = new Collection();
getCommands()
.forEach(command => client.commands.set(command.data.name,command));

client.once('ready', () => {
    console.log(`Logged in as "${client.user.tag}" !`);
});

client.on('interactionCreate',async interation => {
    if(!interation.isCommand()) return;
    const command = client.commands.get(interation.commandName);
    if(!command) return;
    try{
        await command.execute(interation);
    }catch(error){
        console.log(error);
        await interation.reply({content: 'There was an error while executing this command!',ephemeral: true});
    }
})

client.login(token);