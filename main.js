const {app, BrowserWindow} = require('electron')

function createWindow(){
    const mainWindow = new BrowserWindow({
        width:250,
        height: 300,
        show: false,
        backgroundColor:'#e1f8c3' 
        
    })
    mainWindow.loadFile('index.html')

    mainWindow.once('ready-to-show', mainWindow.show)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin'){
       app.quit() 
    }
})

app.on('activate',() =>{
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
