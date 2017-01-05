const {app, BrowserWindow} = require('electron')

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden'
  })

  win.loadURL(`file://${__dirname}/app/index.html`)
  win.webContents.openDevTools();
})
