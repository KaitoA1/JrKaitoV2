colorERROR

const { MessageEmbed } = require('discord.js');

module.exports.notOwner = (message) => {
    const embed = new MessageEmbed()
    .setColor(colorERROR)
    .setTitle("Sorry, but you are not the bot owner.");

    message.channel.send(embed);
}