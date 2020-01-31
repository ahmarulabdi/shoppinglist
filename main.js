const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow, Menu} = require('electron')

let mainWIndow;

// Listen for app to be ready
app.on('ready', function(){
    // Create new Window
    mainWIndow = new BrowserWindow({});

    // Load html into wndow
    mainWIndow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Build Menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu)
});

// Create menu template

const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item'
            },
            {
                label: 'Clear Items'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit()
                }
            }
        ]
    }
]