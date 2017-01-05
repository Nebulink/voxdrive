const {app, BrowserWindow} = require('electron')
var path = require('path')

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    titleBarStyle: 'hidden',
    backgroundColor: '#60BAE9',
    icon: path.join(__dirname, 'app/images/voxdrive-logo-64x64.png')
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.loadURL(`file://${__dirname}/app/index.html`)
  mainWindow.webContents.openDevTools();
})
