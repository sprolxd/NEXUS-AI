const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxuT0RXY3gxQ2ZPdFBtcGtCV1lsMEx2WERNamtlaHNVSW5SRnIxTG5FYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTktZVXhINUcreXlRWjNEdmJ6eG9xS1BRSjZ2SjBMY2xvV0lUNmRYZDMwST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSSt6WXJ4eXZCYVpmVjRMNnBUQXk5TU9zRm5yQUZpNW1JVWtVeFJ1MFdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1MUFXZkppS2ZaVmIxKzZNeGI1aVFRdTE3OUJNSmk5SHpBZkRqc293R3hZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNQMzFnTDU2dFdnNXQ3anBnKzM1Qk9uMzQ3Z2t1UXFDTzNkQTZtUUo0bjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNXTkNVUENjUERUV2t2MnM0ZmRubXVvbDlFb0FyWjVsSWk0QmtkYmx1VVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUIvSEZnSW1tWm10ZURHN1UwRUl1dmZCVy8rSXZ0T3RLN3UzTFFpY1hHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGMxenlpMi9pUW9mbUM1dDBTRUpidlJCN3VndzZLNktQWWd4YnJ5TjJobz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlYd3g5emhRRCt6VS9rbFJpMDE4aGFKNUVONFZkNnVaeThsRjMwd3Q3ZklHK3E0VXBIY0gyeXV5WkRXQURHbkpkL25DWXpTdnVTWkZXaXkyYlA5QmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiJJMmtJM3FhOXhFMGtXUzE5ZmpiQUdUVThHREJCcjJXdGd3WUloUXA4Q1VVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4ODk2NDUyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzZFRDM5MzVENzY2Mzg3NjYxMThBNUU5Qjk0MTZCNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NzczOTYyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3ODg5NjQ1MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDRkMyMTk1RjdBMDVDRUNBMjUzQTkxREMzMDg1QzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njc3Mzk2OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2Nzg4OTY0NTIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDN0E0NjBDOUJCRTVEMEVBMzNBQzgzRUUyOEIyMDEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY3NzQwMDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlY4Q1lXNVpDIiwibWUiOnsiaWQiOiIyNTY3ODg5NjQ1MjE6ODRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDkwMDI2MTI1NzYzNjU6ODRAbGlkIiwibmFtZSI6Iu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x2N3cvc0dFTGo4Mk1VR0dCb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhLY21nTU54SGVNMGV6RTFHWms1MC9ybHgzVyttejNiT3psZ0hQOStxRjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZuZGtKWHV6RGZjVlpELzBoeUQveC9hY1MrR1Vyd2ZJdGEvOUVHOHVLV0ROTFNobVBZYzQ4QWxLNFRVZ1lHNkUxdUF5em03di9Qa3JkZGtKcTJsWENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoVks3bm1rb3JVT2ZLaCtsSnlKY2xmeG9TQ0Irb1lUMHN2VW9mNVgwakxCK1NtNDFHellIRkQreUZnTzdGcnZWNjZsdlhKMzhIT05GWnZIc1RtT0tpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc4ODk2NDUyMTo4NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZU25Kb0REY1Izak5Ic3hOUm1aT2RQNjVjZDF2cHM5MnpzNVlCei9mcWhmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY3NzM5NTgsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWovIn0=",
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
