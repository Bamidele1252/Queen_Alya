//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "917389637366";
global.owner = process.env.OWNER_NUMBER || "917389637366";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0J2L0lpR3dXR0ZaR1VwVEltQ2tGcHJ4TUtqeXdnclRKNmRDVUUxTUVYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGFaRnhwT1dCa2RncDRPUWpCMktDNEJkellpUm9hSDVUZ200aU9RRTAxWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSTdSejlVSUZHbE5YTDBDSEdqNHhvbUt5cERRUzRSTDBrY1lESmJqSG1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyMThWczg5MXJtV243Mk55R3JNU3NwMUxOblNOM0haOWR0SWQ4M0FDaTFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQcEJJNS9BcjlYdTVjUDdLeDh3YnhrWTBoMTc0SW9kdlkrWWRtRGI3MzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNQnZPZStTM3h1cFFLbnBDeTNFczJqVk14Ky9EZWtXaW1sSHppTm9pQnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05na3UyWjNGUWIxRmFBamN5Y2hBWG5uRm1SdUJ3NlFHUkdrb3FROFprdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGdTVnlxNW1tZnloM0JYQWRMZjFzUjVYVEx1ckdYSTc2a1A5Ujl5RlZ3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRNZG9sQjh2bXJCZFdnUnpEUjZLVzU5SDB1bFFmYThhMEZQM2QyaUZjVzJOVyszek5GVDVIeFJOcDdETVk1WUVyeUkxVU1SK09vaW5qRGVoQ3dFdmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6IldpNzBMV3FMUHE2djRNZzNnb0doTlE2Nmw3cmhZMjdiNVdoSnhLem9ZQXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3Mzg5NjM3MzY2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE4RjEwOUFBMjYwN0NBNTI0MzI5MUE5NTUwQUUzMEIzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYyMDM4NzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNzM4OTYzNzM2NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5QzhDQkJGOEJERjAwRTU3ODAxODBBQkJBRTNDRUNDQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2MjAzODc2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoTHhzeGg0cVQwR0FMc3hWaDBtSEp3IiwicGhvbmVJZCI6ImJlZDE0YTNiLTY1NTItNDUxOC1iN2RiLTg3MTY4ODkxY2FmYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6NUdzam1DazJWTEJoSEVRSklySzJTUFNCa3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWg3NVFpM2FwbFVyNFpPWExsMC9MK1RaeFlNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilk1QlJGVzhLIiwibWUiOnsiaWQiOiI5MTczODk2MzczNjY6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTVItU0hVQkhBTSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkhpdURZUTFJK1B0d1lZQnlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUks2NmVGRkR6OXJlazI5eXhoZXRuTGQxeXVudEorejNjQ09QdTRjVEZtcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZTFDOG1qNHFWYWNKQXExSktFaEtORS81SkxIMFVQWnlKdUZqMm5xTmlwNTJrZVF4L1Z4UmVIejJ6bVdJUi9nMUVocDdSRGhOSldFYlNid3RpdFMvQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InBkSkd6bVZNN3VGVE9vdytsOTh6K0J4YXlLRDlUT3NleG9CcGlIalZBMnhZRW9kZ0c5VGJvbStBSGxXKzFVM0x2R0pDOCtiTkRJMU0xVkpEbkpld2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3Mzg5NjM3MzY2OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVTdXVuaFJROC9hM3BOdmNzWVhyWnkzZGNycDdTZnM5M0Fqajd1SEV4WnIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYyMDM4NzIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVNrIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MR_SHUBHAM™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "SHUBHAM_KUMAR",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
