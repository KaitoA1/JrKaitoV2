module.exports = (bot) => {
    console.log(`${bot.user.username} is now ONLINE!`);

    bot.user.setActivity("Development",
    {type: "WATCHING"});
}