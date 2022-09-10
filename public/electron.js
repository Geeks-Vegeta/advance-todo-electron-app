const electron = require("electron/main");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

const {ipcMain} = require('electron');
const sqlite3 = require('sqlite3').verbose();
let dbFile = path.resolve(app.getAppPath(), 'public', 'users.db')
  
const db = new sqlite3.Database(dbFile);


ipcMain.on('async',(event, args)=>{
    const sql=args;
    db.all(sql, (err, row)=>{
        event.reply('async-reply',(err && err.message)|| row);
    });
    
});

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}


app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
