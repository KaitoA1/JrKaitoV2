const { cyan } = require('../../utils/scripts/colors.json');

const { MessageEmbed } = require("discord.js") ;
const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

module.exports = {
    config: {
        name: "botinfo",
        description: "Information about the bot",
        usage: "N/A",
        category: "client",
        accessableby: "N/A",
        aliases: ["info"],
        ownerOnly: false,
        userPerms: [], 
        clientPerms: [],
    },
    run: async (bot, message, args) => {
        cpuStat.usagePercent(function(err, percent, seconds) {

        if (err) { return console.log(err); }
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new MessageEmbed()
            .setAuthor(bot.user.username)
            .setTitle("__**Stats:**__")
            .setColor(cyan)
            .addField("� Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("� Uptime ", `${duration}`, true)
            .addField("Developers", `Chadthew#3968`, true)
            .addField("� Users", `${bot.users.cache.size.toLocaleString()}`, true)
            .addField("� Servers", `${bot.guilds.cache.size.toLocaleString()}`, true)
            .addField("� Channels ", `${bot.channels.cache.size.toLocaleString()}`, true)
            .addField("� Discord.js", `Version - ${version}`, true)
            .addField("� Node", `${process.version}`, true)
            .addField("� CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("� CPU usage", `\`${percent.toFixed(2)}%\``, true)
            .addField("� Arch", `\`${os.arch()}\``, true)
            .addField("� Platform", `\`\`${os.platform()}\`\``, true)
            .addField("API Latency", `${Math.round(bot.ws.ping)}ms`);
    
            message.channel.send(embedStats)
        });
    }
}