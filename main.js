const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = require("electron");

let mainWIndow;
let addWindow;

// Listen for app to be ready
app.on("ready", function() {
  // Create new Window
  mainWIndow = new BrowserWindow({});

  // Load html into wndow
  mainWIndow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // Quit App when closed
  mainWIndow.on('closed',() => {
      app.quit()
  })
  // Build Menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: "Add Shopping List Item"
  });

  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "addWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );
}

// Create menu template

const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Item",
        click() {
          createAddWindow();
        }
      },
      {
        label: "Clear Items"
      },
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];
