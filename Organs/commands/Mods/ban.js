module.exports={
    name:"ban",
    alias:["ban"],
    usage:"=ban @user",
    desc:"bans users from using commands",
    category:"Mods",
    react:"🚫",
    start:async(client,m,{text,ban,pushName,mentionByTag,iscreator,args,body,quoted,mime})=>{
        if(!iscreator) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})
  
        const mention= await mentionByTag

        let userss = await (mention[0]) || m.msg.contextInfo.participant
        if (!userss) return m.reply("❌ Couldn't find any userID in context")
 if(ban.includes(`${userss}`)) return client.sendMessage(m.from,{text:`🟨 @${userss.split("@")[0]} is already banned`,mentions:[userss]},{quoted:m})
 await db.push("ban",`${userss}`)
 client.sendMessage(m.from,{text:`🟥 @${userss.split("@")[0]} User Banned`,mentions:[userss]},{quoted:m})

    }
}
