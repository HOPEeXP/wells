module.exports={
    name:"unban",
    alias:["unban"],
    usage:"=unban @user",
    desc:"unbans users from using commands",
    category:"Mods",
    react:"♻️",

    start:async(client,m,{text,ban,pushName,iscreator,mentionByTag,args,body,quoted,mime})=>{
        if(!iscreator) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})
  
        const mention= await mentionByTag

        let userss = await (mention[0]) || m.msg.contextInfo.participant
        if (!userss) return m.reply("❌ Couldn't find any userID in context")
 if(!ban.includes(`${userss}`)) return client.sendMessage(m.from,{text:`🟨 @${userss.split("@")[0]} is not banned`,mentions:[userss]},{quoted:m})
 await db.pull("ban",`${userss}`)
 client.sendMessage(m.from,{text:`🟩 @${userss.split("@")[0]} User Unbaned`,mentions:[userss]},{quoted:m})

    }
}
