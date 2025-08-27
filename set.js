




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5qTUpDT0dNa3pBRlZici9OVEFab1hKeENNN2QvbzdKcjRZRjVNUDBrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3Bwd0FqY2labFRJYlVuUUlZSFhTQU44TXhkMUtaNjF1cjVVSm4yRmxTUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQ28wSmVVQldiOEtQTU5PMlVzU2l5YjFzTDRUQmJIVzJqYTlGWEEzdlZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6eUZ6bTdLZFRoTTI2eFF0Tk01YWdTaWxOQmZDNWlSbXF4UGhpOWxnV2lzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLWE5sdEcydzFTVFBqdlBJRkRQSEFaUnh3T1lrTk5BcDNOWmtTZXdKMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNWTVpVaUM1clFrd0NEWG1xRGlYSmdmZlF4cWM1NkNJbzEweVRNcXE1WDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUY0MWVMUnRKMWt1SnExZFVUeTFPVkdMQ1dvYmNzUEFmcXVDUC9yR2JFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FXZFVDRXdrbVI5NGRsZ2RwVUlGbGVWRFJSdXBNbGh2TkRRL1ZwUzhCUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilg0UEhkVTF5b2tnK0JDYm1ZN0NhU3ZPRmhlRDcrbWpHa01vU1ZBV2tCSDR6Smphb2lUa2dsUlUyRzNrMW5sTHpGalAvTHMrTWU4TEg3VHNldVp0aGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IkEraXpoNjJXYlBPU3pnNnlTQjF0RW5wWS9TYk1NcVlHWVJNT3V5MHJHUGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2NzQ2NzgyNTE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVBNTU4M0U0NzhDNDQ4RjgwNDA4OURFNjRCMTAxQTE4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYzMDQ3NTZ9XSwibmV4dFByZUtleUlkIjozNSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjM1LCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkxYNDgzQkZMIiwibWUiOnsiaWQiOiIyNTY3NDY3ODI1MTc6MTlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjQ1OTIwMzA3MTE4NzU6MTlAbGlkIiwibmFtZSI6Iu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082UHlPZ0JFTUtxdk1VR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5CcENMY0hFdGRudmJiOTFNZDNHb2pwb0NTMWYveUtkcG8vTmc1dU9kbnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imt4STdDUmRWNXlKU29idVlqMVR6UjFOS3lZOE0xUnlSZ21HZ3cxQWo0b01JNzBYVmpQZ0lubmx0eGdlbEJNNXlETDNWdXVTVDYxMmIzUU93bVRGQkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJclZSWlp5TDdKVy9mOFAxaEtBOUF0NjlYVjZDY2hRVlE1cldLTVE1eEhHWjFnOFFCaUFpbUxFVGZYOWFZVzQ2ZU5pTmhoaktGd1FKZDZ4SkNGejdnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc0Njc4MjUxNzoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUUWFRaTNCeExYWjcyMi9kVEhkeHFJNmFBa3RYLzhpbmFhUHpZT2Jqblo4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYzMDQ3MjMsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVYrIn0=',
    PREFIXE: process.env.PREFIX || "&",
    OWNER_NAME: process.env.OWNER_NAME || "256746782517",
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
