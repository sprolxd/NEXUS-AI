




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURaS29aV0pIMExXR0NlQ0V5OVlKZGZBeVFHeUNTcnA2UUdWUGlkclozcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXR0elpwQUJLTVZYMEMyamhjdU9kT1cyRnNvTFN4L01ZSGVCZWFPd0V5Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQUJ3UUxqZGNDWWVVUm9aRVF6MU5MSVFCYzgycnA3UGtDRzF5V1hvRG40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOeDBySy9DaHY1TXlsSjJCWWNOY0ZSMUpxRzU1UE5mUVRKY1JjN1NIQTFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPazZtZCt3MnZZeHVqVWcyd0lPODBVdkEyamNqck0rQitkZnFpTmVDVlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJULzJPelMwa21hOUQvcHR2QUZmSVRMYzZUVjVxeVoxbjVienJYaWJiUTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RFWkdyTW5LZWRNM3dVVUY0SFQxaEFXdUM3NXpIRnlnRThYQkVDcUxGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXVDcVRSTXBKcVB6OVlWeVVvblRDMVFuRG9zeXZrajFVMWlpMldYWGxEYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE2OTNjekdUcktlb3Y0YVhvZUUycmNqQ1BlUUVOZjlCUXU4dmI5WlJwUVRTMmZBOENROEZ4QmtaTWg4cExoZDVBVjY1dnVxVXpsUUlpNlVBZitQeWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJlTUJYVStHY21HUWlMYlQ5ZExhVU5KeEJwaVBpL21yVUJKQ1lTNFB5QkhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4ODk2NDUyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzc3MjY3NUU3RjNENjMyNkZDMzRCMEUzNzU4QTkwMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2OTE2Njc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3ODg5NjQ1MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxMTBERUE4NURDMjg5NEEzRjlBRDgxMDI2MkEzRDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjkxNjY4NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOTNGQko0SlkiLCJtZSI6eyJpZCI6IjI1Njc4ODk2NDUyMTo5M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwOTAwMjYxMjU3NjM2NTo5M0BsaWQiLCJuYW1lIjoi77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHo3dy9zR0VLelg0Y1VHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNktnb2FYSmtJdVhObjJFUFJMYjFuZDFXYXA1UHpyOFpOWFRod2VITWhDMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSENCcEVkU2pQYVRDaUpBaFZndWJMSnlBNXhFK2k2SWJ5L3c4K0M3SjlEWFREOU1vL3BlUG00NVp2NHhJUk1pSTEzWkViUlNqbGN2MWlKU0piMFdQQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjlRVzRqa1dSOHdYMnU0Z0VKd2ltWWJmQThWS1QxU0tJSkVnZlF6MXZHaEdYRGczVzZvYUJ2WVZFeTREd2FzdS9NUzFKcWdrcyt2czlMM2dZN1BLL2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2Nzg4OTY0NTIxOjkzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVpb0tHbHlaQ0xselo5aEQwUzI5WjNkVm1xZVQ4Ni9HVFYwNGNIaHpJUXQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjkxNjY2NiwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLb24ifQ==',
    PREFIXE: process.env.PREFIX || "&",
    OWNER_NAME: process.env.OWNER_NAME || "256788964521",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Pkdriller01",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'NEXUS-AI',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/g86c1n.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  CHATBOT : process.env.CHATBOT || "yes",
                  AUTO_BIO : process.env.AUTO_BIO || "yes",
                  AUTO_REACT : process.env.AUTO_REACT || "no",
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
