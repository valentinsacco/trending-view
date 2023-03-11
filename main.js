const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1025,
        height: 634,
        minHeight: 600,
        minWidth: 800,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.setMenuBarVisibility(false)    
    win.loadFile('index.html')
}

app.on('ready', createWindow)