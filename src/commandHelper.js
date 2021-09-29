const fs = require('fs');
const path = require('path');

const getCommands = (dirname) => {
    dirname = !!dirname ? dirname : "./commands";
    const commandFiles = fs.readdirSync(path.resolve(__dirname, dirname)).filter(file => file.endsWith('.js'));
    return commandFiles.map(file => require(`${dirname}/${file}`))
}

module.exports = {
    getCommands
}