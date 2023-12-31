const { app, BrowserWindow, dialog } = require("electron");
const createWindow = () => {
  const win = new BrowserWindow({
    titleBarStyle: "hidden",
    titleBarOverlay: true,
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile("../index.html");
};
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
