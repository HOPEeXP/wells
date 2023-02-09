const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();
module.exports = {
    name: "help",
    alias: ["h","menu","hope"],
    desc: "List all command",
    category: "General",
    react:"🔮",
    start: async(client, m, { commands, args, prefix, text, toUpper }) => {
        
       
   const { pushName , sender } = m
        if (args[0]) {
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`*🍁Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*👾Alias :* ${cmd.alias.join(", ")}`) 
            if(cmd.cool) data.push(`*⏱️Cooldown:* ${cmd.cool}`)       
            if (cmd.desc) data.push(`*🧾Description :* ${cmd.desc}`)
            if (cmd.usage) data.push(`*💡Example :* ${cmd.usage.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            var buttonss = [
				{buttonId: `${prefix}help`, buttonText: {displayText: `help`}, type: 1},]
            let buth={
                text:`*ℹ️Command Info*\n\n${data.join("\n")}`,
                footer:"*𝙷𝚊𝚛𝚛𝚒𝚜𝚘𝚗 𝚆𝚎𝚕𝚕𝚜*",
                buttons:buttonss,
                headerType:1
            }    
            return client.sendMessage(m.from,buth,{quoted:m})
        } else {
           const { pushName, sender } = m
let cm=commands.keys()
            let category=[];
             

            for (let cmd of cm) {
                let info = commands.get(cmd);
                if (!cmd) continue;
                if (!info.category || info.category === 'private') continue;
				if (
					!info?.category ||
					(info.category === "Nsfw" &&
					!(nsfw.includes(m.from)))
				)
					continue;
				if (Object.keys(category).includes(info.category))
                category[info.category].push(info);
				else {
                    category[info.category] = [];
                    category[info.category].push(info);
				}
			}
        if (!nsfw.includes(m.from)) {
        var emo=["📖","🍁","🍀","🌊","🎵","🎟","♨️","🉐",]
        } else {
        var emo=["📖","🍁","🍀","🌊","🎵","🔞","🎟","♨️","🉐",]
        } 
        let txt = `*Hi there* ${pushName} I'm *𝙷𝚊𝚛𝚛𝚒𝚜𝚘𝚗 𝚆𝚎𝚕𝚕𝚜*.
                       
🧧 *Prefix :* [ ${prefix} ]
                       
📝 Here's the *Commands* listed below :\n\n`
        const keys = Object.keys(category);
        for (const key of keys) {
            txt += `*${key.toUpperCase()} ${emo[keys.indexOf(key)]} :-*  \n\`\`\`${category[key]
                .map((cmd) => cmd.name).join(", ")}\`\`\`\n\n`
        }
        txt += `📗 Type *${prefix}help* <Command-Name> or <Command-Name> --info\n`; 
    const eternity = await wall.getAnimeWall5("Nezuko")
    const eternitylogo = eternity[Math.floor(Math.random() * eternity.length)]
    const Button = [
        {buttonId: `${prefix}nezuko`, buttonText: {displayText: '𝙷𝚊𝚛𝚛𝚒𝚜𝚘𝚗',}, type: 2},
        {buttonId: `${prefix}support`, buttonText: {displayText: '𝚆𝚎𝚕𝚕𝚜'}, type: 1},
    ]
    let hbutto = {
        image: {url: eternitylogo.image},
        caption: txt,
        footer: '𝙷𝚊𝚛𝚛𝚒𝚜𝚘𝚗 𝚆𝚎𝚕𝚕𝚜',
        buttons: Button,
        headerType: 4
    }

    client.sendMessage(m.from,hbutto,{quoted:m})

     }
  }
}


