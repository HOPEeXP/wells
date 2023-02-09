module.exports = {
	name: "support",
	alias: ["wells"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"📡",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/znKENedN06oAAAPo/harry-wells-wink.mp4',
                   'https://media.tenor.com/znKENedN06oAAAPo/harry-wells-wink.mp4',
                   'https://media.tenor.com/znKENedN06oAAAPo/harry-wells-wink.mp4',
                   'https://media.tenor.com/znKENedN06oAAAPo/harry-wells-wink.mp4',
                   'https://media.tenor.com/znKENedN06oAAAPo/harry-wells-wink.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const eternitylogogg = "https://media.tenor.com/8_KQ72LtiiIAAAPo/harry-wells-harrison-wells.mp4"
        
                         
const lemo = `
*━『 Support Group Links 』━*

*1) [ ▼△▼△ 𝚃𝙾𝙼𝙰𝙽 ▼△▼△ ] :*
https://chat.whatsapp.com/Hxpr3MtH79CIpGF4vG7NZ7

*2) [ ⭑⭑⭑★ 𝐁𝐎𝐍𝐓𝐄𝐍 ★⭑⭑⭑ ]  :*
https://chat.whatsapp.com/CQKbWP7c3GNIk4SfE7Xej7

`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:eternitylogogg},caption:lemo},{quoted:m})  
    }
}
