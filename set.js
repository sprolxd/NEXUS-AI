




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZicEh3eCs3UUZRUTlhWm5EK3E3SnpnQnE5VkZwbEd3UUpLSC9Wb1VVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmpYWitVbVBaUkoyOFZwR3Q3YnNUQnhTek8wNjlnR3NHRThCOEQ1TFl5Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ1VXcGlBN3hqNTdIV3RGZTFuem94NCtXa2lJVjF6bmxTVUhPVlM5bG1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQ0t4cDhzeGpLY2hlSHJISHpuUHlwWlFGcklkK3JJSzcwanc5NncyVFRJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIOGhKWUhQSmxaaStBOTN0ajU3Q09mUHc5SDhaNjFDbksxa1hqdGxhMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZWbEZpQlh1elZHR1VNNElaTGp0OVVJUlRrLy9nNnl6VnF3Q0pMem1QaVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09kWVdYb2NtMHpjZ29WREFZeTkwSllzTGRrRkZvOE1mNlJ4Y3hCYktYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTVjRmdmRTd6cGJLVTJwbDlLOVZNUEZpbzIzeStBS0o4VFRtMzZvdjNncz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpvL1BKV0tkZ2Zaa0FmeW9SMTE5Q2U2dDkxbU1OYlZQY0YxcU4xV3JTWkFtL1RHMklQd0JVb1VnaG9iVDErWG5Ld2QvU0FTQitScVoyUk1yMEJDaUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJrbkx3SXpVRUJZRFJMSDVLWUJtUk9tendURWhIdW5KeUEzK3JkRWRKVWwwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc0Njc4MjUxN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwOUJBRDE0NUUwMzQ1MTc3QUYxMTBGRThGRUIxMzY0MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MzE0NjcwfV0sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIzUlRKUEo0NiIsIm1lIjp7ImlkIjoiMjU2NzQ2NzgyNTE3OjIwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY0NTkyMDMwNzExODc1OjIwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTzZQeU9nQkVQSDN2TVVHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTkJwQ0xjSEV0ZG52YmI5MU1kM0dvanBvQ1MxZi95S2Rwby9OZzV1T2Rudz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK1RQUXlRVHlsUC9PVkRYbkt3cHhQY0JXd3o4M09ocUh6RmU4VTN2WHAxKzUydklaVU51UUIxRitmeGtHaHhtNGFWNkdaU0xtNWUxNTNySDdmUjEvQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkIvNFVQa1E4MWdQU1V5M2ZqTWQ3Mm54Z1NBbkNqbC9oYURYRGdpK0c3WkM4dzVZQmJrdE5CbUlIZnVnZXZJdm9mbEtEWDJwYXNrQU5Wb0gxTUF6VEF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzQ2NzgyNTE3OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRRYVFpM0J4TFhaNzIyL2RUSGR4cUk2YUFrdFgvOGluYWFQellPYmpuWjgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjMxNDYyNCwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJVisifQ==',
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
