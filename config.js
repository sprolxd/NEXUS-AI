const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5qTUpDT0dNa3pBRlZici9OVEFab1hKeENNN2QvbzdKcjRZRjVNUDBrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3Bwd0FqY2labFRJYlVuUUlZSFhTQU44TXhkMUtaNjF1cjVVSm4yRmxTUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQ28wSmVVQldiOEtQTU5PMlVzU2l5YjFzTDRUQmJIVzJqYTlGWEEzdlZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6eUZ6bTdLZFRoTTI2eFF0Tk01YWdTaWxOQmZDNWlSbXF4UGhpOWxnV2lzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLWE5sdEcydzFTVFBqdlBJRkRQSEFaUnh3T1lrTk5BcDNOWmtTZXdKMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNWTVpVaUM1clFrd0NEWG1xRGlYSmdmZlF4cWM1NkNJbzEweVRNcXE1WDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUY0MWVMUnRKMWt1SnExZFVUeTFPVkdMQ1dvYmNzUEFmcXVDUC9yR2JFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FXZFVDRXdrbVI5NGRsZ2RwVUlGbGVWRFJSdXBNbGh2TkRRL1ZwUzhCUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilg0UEhkVTF5b2tnK0JDYm1ZN0NhU3ZPRmhlRDcrbWpHa01vU1ZBV2tCSDR6Smphb2lUa2dsUlUyRzNrMW5sTHpGalAvTHMrTWU4TEg3VHNldVp0aGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IkEraXpoNjJXYlBPU3pnNnlTQjF0RW5wWS9TYk1NcVlHWVJNT3V5MHJHUGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2NzQ2NzgyNTE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVBNTU4M0U0NzhDNDQ4RjgwNDA4OURFNjRCMTAxQTE4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYzMDQ3NTZ9XSwibmV4dFByZUtleUlkIjozNSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjM1LCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkxYNDgzQkZMIiwibWUiOnsiaWQiOiIyNTY3NDY3ODI1MTc6MTlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjQ1OTIwMzA3MTE4NzU6MTlAbGlkIiwibmFtZSI6Iu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082UHlPZ0JFTUtxdk1VR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5CcENMY0hFdGRudmJiOTFNZDNHb2pwb0NTMWYveUtkcG8vTmc1dU9kbnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imt4STdDUmRWNXlKU29idVlqMVR6UjFOS3lZOE0xUnlSZ21HZ3cxQWo0b01JNzBYVmpQZ0lubmx0eGdlbEJNNXlETDNWdXVTVDYxMmIzUU93bVRGQkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJclZSWlp5TDdKVy9mOFAxaEtBOUF0NjlYVjZDY2hRVlE1cldLTVE1eEhHWjFnOFFCaUFpbUxFVGZYOWFZVzQ2ZU5pTmhoaktGd1FKZDZ4SkNGejdnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc0Njc4MjUxNzoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUUWFRaTNCeExYWjcyMi9kVEhkeHFJNmFBa3RYLzhpbmFhUHpZT2Jqblo4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYzMDQ3MjMsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVYrIn0=",
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
WELCOME: process.env.WELCOME || "false",
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
OWNER_NUMBER: process.env.OWNER_NUMBER || "256746782517",
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
DEV: process.env.DEV || "256746782517",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
