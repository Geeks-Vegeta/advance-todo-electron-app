
const electron = window.require('electron');

const {ipcRenderer}=electron;


export default function send(sql){
    return new Promise((resolve)=>{
        ipcRenderer.once('async-reply', (_,arg)=>{
            resolve(arg);
        });
        ipcRenderer.send('async', sql);
    });
}