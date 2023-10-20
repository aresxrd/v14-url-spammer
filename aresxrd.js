const { Client,Events, GatewayIntentBits, Partials } = require("discord.js");
const config = require("./aresxrd_config"); 

const client = new Client({ 
intents:Object.keys(GatewayIntentBits),
partials:Object.keys(Partials) 
});

const { VanityClient } = require("discord-url");
const urlClient = new VanityClient(config.selfBotToken,config.guildId,true); 

client.on(Events.GuildUpdate,async (oldGuild,newGuild) => { 
if(oldGuild.id == config.guildId && oldGuild.vanityURLCode !== newGuild.vanityURLCode) {

urlClient.setVanityURL(config.vanityUrlCode);    
}
});


urlClient.on("VanitySuccess", async(res) => {

console.log(`Sunucunun urlsi [${res.vanityURL}] olarak değiştirili!`);
})
    
urlClient.on('VanityError', async(err) => {

   
console.log(`Sunucu URL'si ayarlanırken bir hata oluştu`);
})


client.login(config.botToken);
