const {ipcMain} = require('electron');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./public/users.db');


ipcMain.on('async',(event, args)=>{
    const sql=args;
    db.all(sql, (err, row)=>{
        event.reply('async-reply',(err && err.message)|| row);
    });
    
});
