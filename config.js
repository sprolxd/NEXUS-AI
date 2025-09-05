const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktIa1NpS29ia3MzV3V6N3lTajI4eDVwN01KWlllZDhMYXNWdVZxZVFIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmdobStsQU9hcjFkMk1ySG85NWZ3ZDVBUzA3cVlnTU1mdUw3c3VkYXgxcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDR3VmcmNpNkZpdXdxZ0JTYTRoOVBWYUhRT2V2T3MzVE9zSmsreFFReDI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrYm85V201ZEFYTWZGY2g4eWhkY2FPNU1WVWtlenlCOTMzejEycG5aK21RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEZlpTMldSOGZTU0VpYjVDZ0lIUW9BU0lLdXN2S2RoWWIwcktLTU9YbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMrMkd6Ry9LQkdTU1psSDhrMmQ5akVOemttbEJtelg3N2Uzd3FkOTBEVXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0I4eEFkSXlscFJqYi9ScS8vTUZmb2MvS1U0dTdxWVAvb2x1eWtlY0Ezdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzdwRHV4ck1tMVhadjg1L2FDUHFFK2dFSXdZdUltWUdkTjRVNkE1TXFUaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhTNnprMzJGMzM5SW11RU5PbHlwb1VKUWFZMnBKWDc4UEVvYmg2cFppakZBSVdNam9aWUtSaVNPVTFkMzFEQ2RzRHBWdEFtbjJFWkdWQWppOFRPMUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJYaUozL0dDQnd6Nk1RMUdTOTFPZHNDWVBhSmlTMTVIQlduaE1oQ0F1b0F3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4ODk2NDUyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0Y4MTI4QzM1QUY1M0MwNzQxNTAxQTEwN0ZGM0M0QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3MDYzNzM5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3ODg5NjQ1MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM5MjE3QjIxNjhFQUY3MzM2N0QwOUEzN0VERkQxOUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzA2Mzc1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWDYxRkZNR00iLCJtZSI6eyJpZCI6IjI1Njc4ODk2NDUyMTo5NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwOTAwMjYxMjU3NjM2NTo5NkBsaWQiLCJuYW1lIjoi77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHo3dy9zR0VLVFU2c1VHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNktnb2FYSmtJdVhObjJFUFJMYjFuZDFXYXA1UHpyOFpOWFRod2VITWhDMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSS9LOW84RUs4NU9wcEF1Y09QK3Q3RWk3WXpPMW1ld0czMzh4MHIvTVBaZ1NWN1puZVBWcURyNFZtb2JzRGtXOXdML3o4c1N4bXlraDJoVHFXMVd5QXc9PSIsImRldmljZVNpZ25hdHVyZSI6Img1dFlCM3gySkpMZFZRVm9rZDZlOHNCQnNWMlVOclp2Ri85a2NuYStwejd1RXMvK0d1RFo1WGd5cTdnVWttaUhxSFJhSWZOaFhyc01aM1o2WC9wOERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2Nzg4OTY0NTIxOjk2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVpb0tHbHlaQ0xselo5aEQwUzI5WjNkVm1xZVQ4Ni9HVFYwNGNIaHpJUXQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzA2MzczMCwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLb28ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NEXUS-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
GOODBYE: process.env.GOODBYE || "false",
// true if want welcome and goodbye msg in groups       
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/SR9S0ZdT/11900809-f4ad-46ee-bedf-f430eed4bab8.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "&",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "NEXUS-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "NEXUS-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "256788964521",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "officialPkdriller",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ pkdriller*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/SR9S0ZdT/11900809-f4ad-46ee-bedf-f430eed4bab8.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *NEXUS-AI*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "256788964521",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
