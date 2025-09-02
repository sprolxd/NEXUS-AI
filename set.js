




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxuT0RXY3gxQ2ZPdFBtcGtCV1lsMEx2WERNamtlaHNVSW5SRnIxTG5FYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTktZVXhINUcreXlRWjNEdmJ6eG9xS1BRSjZ2SjBMY2xvV0lUNmRYZDMwST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSSt6WXJ4eXZCYVpmVjRMNnBUQXk5TU9zRm5yQUZpNW1JVWtVeFJ1MFdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1MUFXZkppS2ZaVmIxKzZNeGI1aVFRdTE3OUJNSmk5SHpBZkRqc293R3hZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNQMzFnTDU2dFdnNXQ3anBnKzM1Qk9uMzQ3Z2t1UXFDTzNkQTZtUUo0bjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNXTkNVUENjUERUV2t2MnM0ZmRubXVvbDlFb0FyWjVsSWk0QmtkYmx1VVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUIvSEZnSW1tWm10ZURHN1UwRUl1dmZCVy8rSXZ0T3RLN3UzTFFpY1hHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGMxenlpMi9pUW9mbUM1dDBTRUpidlJCN3VndzZLNktQWWd4YnJ5TjJobz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlYd3g5emhRRCt6VS9rbFJpMDE4aGFKNUVONFZkNnVaeThsRjMwd3Q3ZklHK3E0VXBIY0gyeXV5WkRXQURHbkpkL25DWXpTdnVTWkZXaXkyYlA5QmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiJJMmtJM3FhOXhFMGtXUzE5ZmpiQUdUVThHREJCcjJXdGd3WUloUXA4Q1VVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4ODk2NDUyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzZFRDM5MzVENzY2Mzg3NjYxMThBNUU5Qjk0MTZCNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NzczOTYyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3ODg5NjQ1MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDRkMyMTk1RjdBMDVDRUNBMjUzQTkxREMzMDg1QzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njc3Mzk2OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2Nzg4OTY0NTIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDN0E0NjBDOUJCRTVEMEVBMzNBQzgzRUUyOEIyMDEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY3NzQwMDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlY4Q1lXNVpDIiwibWUiOnsiaWQiOiIyNTY3ODg5NjQ1MjE6ODRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDkwMDI2MTI1NzYzNjU6ODRAbGlkIiwibmFtZSI6Iu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI5cbu+4jlxu77iOXG7vuI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x2N3cvc0dFTGo4Mk1VR0dCb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhLY21nTU54SGVNMGV6RTFHWms1MC9ybHgzVyttejNiT3psZ0hQOStxRjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZuZGtKWHV6RGZjVlpELzBoeUQveC9hY1MrR1Vyd2ZJdGEvOUVHOHVLV0ROTFNobVBZYzQ4QWxLNFRVZ1lHNkUxdUF5em03di9Qa3JkZGtKcTJsWENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoVks3bm1rb3JVT2ZLaCtsSnlKY2xmeG9TQ0Irb1lUMHN2VW9mNVgwakxCK1NtNDFHellIRkQreUZnTzdGcnZWNjZsdlhKMzhIT05GWnZIc1RtT0tpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc4ODk2NDUyMTo4NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZU25Kb0REY1Izak5Ic3hOUm1aT2RQNjVjZDF2cHM5MnpzNVlCei9mcWhmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY3NzM5NTgsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWovIn0=',
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
