




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktIa1NpS29ia3MzV3V6N3lTajI4eDVwN01KWlllZDhMYXNWdVZxZVFIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmdobStsQU9hcjFkMk1ySG85NWZ3ZDVBUzA3cVlnTU1mdUw3c3VkYXgxcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDR3VmcmNpNkZpdXdxZ0JTYTRoOVBWYUhRT2V2T3MzVE9zSmsreFFReDI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrYm85V201ZEFYTWZGY2g4eWhkY2FPNU1WVWtlenlCOTMzejEycG5aK21RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEZlpTMldSOGZTU0VpYjVDZ0lIUW9BU0lLdXN2S2RoWWIwcktLTU9YbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMrMkd6Ry9LQkdTU1psSDhrMmQ5akVOemttbEJtelg3N2Uzd3FkOTBEVXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0I4eEFkSXlscFJqYi9ScS8vTUZmb2MvS1U0dTdxWVAvb2x1eWtlY0Ezdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzdwRHV4ck1tMVhadjg1L2FDUHFFK2dFSXdZdUltWUdkTjRVNkE1TXFUaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhTNnprMzJGMzM5SW11RU5PbHlwb1VKUWFZMnBKWDc4UEVvYmg2cFppakZBSVdNam9aWUtSaVNPVTFkMzFEQ2RzRHBWdEFtbjJFWkdWQWppOFRPMUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJYaUozL0dDQnd6Nk1RMUdTOTFPZHNDWVBhSmlTMTVIQlduaE1oQ0F1b0F3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4ODk2NDUyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0Y4MTI4QzM1QUY1M0MwNzQxNTAxQTEwN0ZGM0M0QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3MDYzNzM5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3ODg5NjQ1MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM5MjE3QjIxNjhFQUY3MzM2N0QwOUEzN0VERkQxOUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzA2Mzc1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWDYxRkZNR00iLCJtZSI6eyJpZCI6IjI1Njc4ODk2NDUyMTo5NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwOTAwMjYxMjU3NjM2NTo5NkBsaWQiLCJuYW1lIjoi77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHo3dy9zR0VLVFU2c1VHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNktnb2FYSmtJdVhObjJFUFJMYjFuZDFXYXA1UHpyOFpOWFRod2VITWhDMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSS9LOW84RUs4NU9wcEF1Y09QK3Q3RWk3WXpPMW1ld0czMzh4MHIvTVBaZ1NWN1puZVBWcURyNFZtb2JzRGtXOXdML3o4c1N4bXlraDJoVHFXMVd5QXc9PSIsImRldmljZVNpZ25hdHVyZSI6Img1dFlCM3gySkpMZFZRVm9rZDZlOHNCQnNWMlVOclp2Ri85a2NuYStwejd1RXMvK0d1RFo1WGd5cTdnVWttaUhxSFJhSWZOaFhyc01aM1o2WC9wOERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2Nzg4OTY0NTIxOjk2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVpb0tHbHlaQ0xselo5aEQwUzI5WjNkVm1xZVQ4Ni9HVFYwNGNIaHpJUXQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzA2MzczMCwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLb28ifQ==',
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
